import { Pipe, PipeTransform } from '@angular/core';
import { prop } from 'ramda';

export type currency = 'id' | 'label' | 'symbol' | 'full';

@Pipe({ name: 'currency' })
export class CurrencyPipe implements PipeTransform {
  private currencies = [
    { id: 978, label: 'EUR', symbol: '€', short: 'Euro', full: 'Euros' },
    { id: 840, label: 'USD', symbol: '$', short: 'Dólar', full: 'Dólares' }
  ];

  transform(value: any = 0, symbol: string, format: string): string {
    return this.formatLabel(value, symbol, format);
  }

  private formatLabel(value: any, symbol: string, key: string) {
    let format = '';
    const fullName = prop('full', this.getByLabel(symbol));
    const labelName = prop('label', this.getByLabel(symbol));
    const shortName = prop('short', this.getByLabel(symbol));
    const symbolName = prop('symbol', this.getByLabel(symbol));

    switch (key) {
      case '1':
        format = `1 ${shortName}`;
        break;

      case '2':
        format = `${fullName} (${labelName})`;
        break;

      default:
        const parseValue = value.toFixed(4);

        format = `${symbolName} ${parseValue} ${fullName}`;
        break;
    }

    return format;
  }

  private getByLabel(value: string) {
    return this.getByProp('label', value);
  }

  private getByProp(propCurrency: currency, value: any) {
    return this.currencies.find(
      item => `${prop(propCurrency, item)}` === value
    );
  }
}
