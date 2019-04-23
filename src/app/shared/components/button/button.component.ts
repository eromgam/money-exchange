import { Component, ViewEncapsulation, Input } from '@angular/core';
import { type, color } from '../../types';

@Component({
  selector: 'mxc-button',
  templateUrl: 'button.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent {
  @Input() type: type = 'button';
  @Input() color: color = 'primary';

  constructor() {}
}
