import { Component, OnInit, HostBinding } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';

import { ExchangeActions } from '../../app-store/exchange/exchange.actions';
import { HomeService } from './home.service';

@Component({
  selector: 'home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})
export class HomeComponent implements OnInit {
  formExchange: FormGroup;
  exchange: any;

  @HostBinding('class.mxc-home') mainClass = true;

  constructor(private store: Store<any>, public homeService: HomeService) {}

  ngOnInit() {
    this.homeService.initExchange();
    this.homeService.initFormExchange();
    this.homeService.listenExchange();

    this.exchange = this.homeService.exchange;
    this.formExchange = this.homeService.formExchange;

    this.store.dispatch(new ExchangeActions.List(this.exchange));
  }

  submit() {
    this.homeService.calculateRate();
  }
}
