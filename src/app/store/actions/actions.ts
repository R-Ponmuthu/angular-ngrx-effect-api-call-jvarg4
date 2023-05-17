import { createAction, props } from '@ngrx/store';

export const GET_SHIPMENT = '[Shipment] Get shipments';
export const GET_SHIPMENT_SUCCESS = '[Shipment] Get Shipment Success';
export const GET_SHIPMENT_FAILURE = '[Shipment] Get Shipment Failure';

export const getShipment = createAction(GET_SHIPMENT);

export const getShipmentSuccess = createAction(
  GET_SHIPMENT_SUCCESS,
  props<any>()
);

export const getShipmentFailure = createAction(
  GET_SHIPMENT_FAILURE,
  props<{ any }>()
);
