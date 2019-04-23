import {
  Directive,
  ElementRef,
  OnInit,
  Output,
  EventEmitter,
  HostListener
} from '@angular/core';

import * as Cleave from 'cleave.js';

@Directive({
  selector: 'mxc-input[money]'
})
export class MoneyDirective implements OnInit {
  cleave: any;

  @Output() mxcChange: EventEmitter<any> = new EventEmitter<any>();

  @HostListener('mxcChange', ['$event.value'])
  handleInputEvent(value: any) {
    this.updateCleave(value);
  }

  constructor(protected el: ElementRef) {}

  ngOnInit() {
    this.getElementInput().then(element => {
      this.initCleave(element);
    });
  }

  initCleave(element: HTMLInputElement) {
    this.cleave = new Cleave(element, {
      numeral: true,
      numeralThousandsGroupStyle: 'thousand',
      numeralDecimalScale: 4
    });
  }

  updateCleave(value: any) {
    if (this.cleave) {
      this.cleave.setRawValue(value);
    }
  }

  getElementInput(): Promise<HTMLInputElement> {
    const nativeInput = this.el.nativeElement.querySelector('input');
    // tslint:disable-next-line: no-non-null-assertion
    return Promise.resolve(nativeInput!);
  }
}
