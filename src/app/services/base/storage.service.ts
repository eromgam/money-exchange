import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse } from '@angular/common/http';

@Injectable()
export class StorageService {
  constructor() {}

  get(item: string) {
    return JSON.parse(localStorage.getItem(item));
  }

  set(item: string, response: any) {
    localStorage.setItem(item, JSON.stringify(response));
  }
}
