import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError,switchMap } from 'rxjs/operators';
import { addressTableService } from './services/address-table.service';
import { addressTableActionsType,GetDetails,PushDetails } from './ngrx/address-table/addressTable.actions'
// import {pageListActionsType,PageListGetReposAction,PageListGetReposActionHttp} from './reducers/count/count.actions'

@Injectable()
export class AddressTableEffects {

  getDetails$ = createEffect(() => this.actions$.pipe(
    ofType(addressTableActionsType.getDetails),
    switchMap(() => this.service.getAddressDetails()
      .pipe(
        map(details => (new PushDetails(details))),
       // catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private service: addressTableService
  ) {}
}