import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map, catchError, tap } from 'rxjs/operators';
import { EMPTY, combineLatest, of } from 'rxjs';
import { AppService } from '../../api.service';
import * as shipmentActions from '../actions/actions';

@Injectable()
export class ShipmentEffects {
  constructor(private actions$: Actions, private appService: AppService) {}

  getShipments$ = createEffect(() =>
    this.actions$.pipe(
      ofType(shipmentActions.getShipment),
      exhaustMap((action) =>
        this.appService.getShipment().pipe(
          map((response) => {
            console.log('response:::', response);
            return shipmentActions.getShipmentSuccess({ response });
          }),
          catchError((error: any) =>
            of(shipmentActions.getShipmentFailure(error))
          )
        )
      )
    )
  );
}
