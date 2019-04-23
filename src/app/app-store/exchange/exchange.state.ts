import { createSelector } from '@ngrx/store';

// tslint:disable-next-line: no-namespace
export namespace ExchangeState {
  export interface IExchange {
    baseSymbol: string;
    rateSymbol: string;
    rate: number;
  }

  export interface IState {
    data: IExchange;
    loading: boolean;
    loaded: boolean;
    failed: boolean;
  }

  export const initialState: IState = {
    data: null,
    failed: false,
    loading: false,
    loaded: false
  };
}

export const selectExchangeStore = createSelector(
  (state: any) => state.exchange,
  (state: any) => state
);
