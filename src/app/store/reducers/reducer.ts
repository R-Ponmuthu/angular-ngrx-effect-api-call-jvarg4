import { createReducer, on, Action } from '@ngrx/store';
import * as shipmentActions from '../actions/actions';

export interface ShipmemtState {
  result?: any;
  isLoading?: boolean;
  isLoadingSuccess?: boolean;
}

export const initialState: ShipmemtState = {
  result: '',
  isLoading: false,
  isLoadingSuccess: false,
};

const shipmentReducer = createReducer(
  initialState,
  on(shipmentActions.getShipment, (state) => ({ ...state, isLoading: true })),
  on(shipmentActions.getShipmentSuccess, (state, result) => ({
    shipments: result.response,
    isLoading: false,
    isLoadingSuccess: true,
  }))
);

export function reducer(state: ShipmemtState | undefined, action: Action): any {
  return shipmentReducer(state, action);
}

export const getShipments = (state: ShipmemtState) => {
  return {
    shipments: state.result,
    isLoading: state.isLoading,
    isLoadingSuccess: state.isLoadingSuccess,
  };
};
