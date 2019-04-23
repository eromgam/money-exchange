import { Component, HostBinding, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'mxc-rate',
  templateUrl: 'rate.component.html',
  styleUrls: ['rate.component.scss']
})
export class RateComponent {
  @Input() symbol = null;
  @Input() control = new FormControl();
  @Input() disabled = false;

  @HostBinding('class.mxc-rate') classMain = true;

  constructor() {}
}
