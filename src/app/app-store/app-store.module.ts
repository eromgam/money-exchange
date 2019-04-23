import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ExchangeStoreModule } from './exchange';

@NgModule({
  imports: [
    CommonModule,
    ExchangeStoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([])
  ]
})
export class AppStoreModule {}
