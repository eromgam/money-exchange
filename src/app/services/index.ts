import { ApiService, StorageService } from './base';
import { ExchangeService } from './core';

export const BASE_SERIVICES = [ApiService, StorageService];
export const CORE_SERIVICES = [ExchangeService];

export * from './base';
export * from './core';
