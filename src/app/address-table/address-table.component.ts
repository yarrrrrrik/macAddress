import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs'
import {select,Store} from '@ngrx/store'
import {map,mergeMap,tap} from 'rxjs/operators'

import {addressTableService} from '../services/address-table.service'
import {addressTableNode,AddressTableState,addressTableReducer} from '../ngrx/address-table/addressTable.reducer'
import {selectAddressTableFeature} from '../ngrx/address-table/addressTable.selectors'
import {GetDetails} from '../ngrx/address-table/addressTable.actions'

// import {checkAddressNode,CheckAddressState,checkAddressReducer} from '../ngrx/check-address-tab/checkAddress.reducer'
// import {selectTest} from '../ngrx/check-address-tab/checkAddress.selectors'
// import {Init} from '../ngrx/check-address-tab/checkAddress.actions'

@Component({
  selector: 'app-address-table',
  templateUrl: './address-table.component.html',
  styleUrls: ['./address-table.component.scss']
})
export class AddressTableComponent implements OnInit {
  public details:any = false

  public state$ = this.store$.pipe(select(selectAddressTableFeature)).subscribe(data => this.details = data.details)

  constructor(
    public store$:Store<AddressTableState>
  ) { }

  ngOnInit(): void {
    this.store$.dispatch(new GetDetails())
  }

  show(){
    console.log(this.details)
  }
}
