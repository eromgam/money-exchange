import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { ExchangeService } from '../../services';
import { ExchangeActions } from './exchange.actions';

@Injectable()
export class ExchangeEffects {
  @Effect()
  list$ = this.actions$.pipe(
    ofType(ExchangeActions.Types.LIST),
    switchMap((action: any) => {
      const { payload } = action;
      const { baseSymbol, rateSymbol } = payload;

      return this.exchangeService.latest(baseSymbol, rateSymbol).pipe(
        map((data: any) => {
          payload.rate = data.rates[rateSymbol];

          return new ExchangeActions.Success(payload);
        }),
        catchError((error: any) => {
          return of(new ExchangeActions.Failed());
        })
      );
    })
  );

  constructor(
    private actions$: Actions,
    private exchangeService: ExchangeService
  ) {}
}
