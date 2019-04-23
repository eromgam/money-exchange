import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ExchangeEffects } from './exchange.effects';
import { ExchangeReducer } from './exchange.reducer';

export enum ExchangeFeature {
  Exchange = 'exchange'
}

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(ExchangeFeature.Exchange, ExchangeReducer),
    EffectsModule.forFeature([ExchangeEffects])
  ],
  providers: [ExchangeEffects]
})
export class ExchangeStoreModule {}
