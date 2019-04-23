import { ExchangeActions } from './exchange.actions';
import { ExchangeState } from './exchange.state';

export function ExchangeReducer(
  state = ExchangeState.initialState,
  action: ExchangeActions.Actions
): ExchangeState.IState {
  switch (action.type) {
    case ExchangeActions.Types.LIST:
      return {
        ...state,
        loading: true
      };

    case ExchangeActions.Types.SUCCESS:
      return {
        ...state,
        data: action.payload,
        loaded: true
      };

    case ExchangeActions.Types.FAILED:
      return {
        ...state,
        failed: true
      };

    default:
      return { ...state };
  }
}
