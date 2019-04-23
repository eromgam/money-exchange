import {
  Component,
  Input,
  ViewEncapsulation,
  Output,
  EventEmitter
} from '@angular/core';

import { type } from '../../types';

@Component({
  selector: 'mxc-input',
  templateUrl: 'input.component.html',
  styleUrls: ['input.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InputComponent {
  @Input() value = null;
  @Input() type: type = 'text';
  @Input() disabled = false;

  @Output() mxcChange: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}
}
