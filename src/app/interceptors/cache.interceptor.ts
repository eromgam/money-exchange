import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse
} from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

import { StorageService } from '../services';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {
  constructor(protected storage: StorageService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const storageResponse = this.storage.get('exchange');

    return storageResponse
      ? of(new HttpResponse(storageResponse))
      : this.sendRequest(req, next);
  }

  sendRequest(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          const { body } = event;
          this.storage.set('exchange', event);
        }
      })
    );
  }
}
