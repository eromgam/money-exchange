import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '../base/api.service';

@Injectable()
export class ExchangeService {
  constructor(private apiService: ApiService) {}

  latest(base: string, symbols: string): Observable<any> {
    return this.apiService.get(`/latest?base=${base}&symbols=${symbols}`);
  }
}
