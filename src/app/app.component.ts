import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getShipment } from './store/actions/actions';
import { ShipmemtState } from './store/reducers/reducer';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private store: Store<ShipmemtState>) {}

  // data$ = this.store.pipe(getShipments);

  ngOnInit(): void {
    this.store.dispatch(getShipment());
  }
}
