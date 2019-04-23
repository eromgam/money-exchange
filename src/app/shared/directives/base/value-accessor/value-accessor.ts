import { ElementRef, HostListener, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

export class ValueAccessor implements ControlValueAccessor {
  protected lastValue: any;

  @Output() mxcChange: EventEmitter<any> = new EventEmitter<any>();

  constructor(protected el: ElementRef) {}

  private onChange: (value: any) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(value: any) {
    const nativeInput = this.getNativeInput();

    if (nativeInput) {
      Promise.resolve(null).then(() => {
        nativeInput.value = this.lastValue = value == null ? '' : value;
        this.mxcChange.emit({ value });
      });
    }
  }

  _handleChangeEvent(value: any) {
    if (value !== this.lastValue) {
      this.lastValue = value;
      this.onChange(value);
    }
  }

  @HostListener('mxcBlur')
  _handleBlurEvent() {
    this.onTouched();
  }

  registerOnChange(fn: (value: any) => void) {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    const nativeInput = this.getNativeInput();

    if (nativeInput) {
      Promise.resolve(null).then(() => {
        nativeInput.disabled = isDisabled;
      });
    }
  }

  getNativeInput(): HTMLInputElement {
    return this.el.nativeElement.querySelector('input');
  }
}
