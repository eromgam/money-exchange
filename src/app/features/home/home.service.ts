import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { selectExchangeStore } from '../../app-store/exchange/exchange.state';

@Injectable()
export class HomeService {
  formExchange: FormGroup;
  exchange: any;

  constructor(private store: Store<any>) {}

  listenExchange() {
    this.store.select(selectExchangeStore).subscribe((response: any) => {
      const { data } = response;

      if (data) {
        this.exchange = data;
        this.calculateRate();
      }
    });
  }

  initExchange() {
    this.exchange = {
      baseSymbol: 'USD',
      rateSymbol: 'EUR'
    };
  }

  initFormExchange() {
    this.formExchange = new FormGroup({
      baseAmount: new FormControl('1', Validators.required),
      rateAmount: new FormControl('0', Validators.required)
    });
  }

  calculateRate() {
    const { rate } = this.exchange;
    const base = this.formExchange.get('baseAmount').value;
    const total = this.formatNumber(base) * rate;

    this.formExchange.get('rateAmount').setValue(total.toFixed(4));
  }

  formatNumber(value: string): number {
    return parseFloat(value.replace(/,/g, ''));
  }
}
