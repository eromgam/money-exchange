import { Component, OnInit, HostBinding } from '@angular/core';
import { HomeService } from '../../home.service';

@Component({
  selector: 'mxc-price',
  templateUrl: 'price.component.html',
  styleUrls: ['price.component.scss']
})
export class PriceComponent implements OnInit {
  exchange: any;

  @HostBinding('class.mxc-price')
  @HostBinding('class.row')
  mainClass = true;

  constructor(public homeService: HomeService) {}

  ngOnInit() {
    this.exchange = this.homeService.exchange;
  }
}
