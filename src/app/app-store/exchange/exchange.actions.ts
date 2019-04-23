import { Action } from '@ngrx/store';

// tslint:disable-next-line: no-namespace
export namespace ExchangeActions {
  export enum Types {
    LIST = '[@mxc/exchange] List',
    SUCCESS = '[@mxc/success ] Success',
    FAILED = '[@mxc/failed] Failed'
  }

  export class List implements Action {
    readonly type = Types.LIST;
    constructor(public payload: any) {}
  }

  export class Success implements Action {
    readonly type = Types.SUCCESS;
    constructor(public payload: any) {}
  }

  export class Failed implements Action {
    readonly type = Types.FAILED;
  }

  export type Actions = List | Success | Failed;
}
