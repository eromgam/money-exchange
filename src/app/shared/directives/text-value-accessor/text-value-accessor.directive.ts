import { Directive, ElementRef, HostListener } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { ValueAccessor } from '../base';

@Directive({
  selector: 'mxc-input',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: TextValueAccessorDirective,
      multi: true
    }
  ]
})
export class TextValueAccessorDirective extends ValueAccessor {
  @HostListener('mxcChange', ['$event.value'])
  handleChangeEvent(value: any) {
    this._handleChangeEvent(value);
  }

  constructor(el: ElementRef) {
    super(el);
  }
}
