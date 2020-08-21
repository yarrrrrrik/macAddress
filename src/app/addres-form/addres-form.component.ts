import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs'
import {select,Store} from '@ngrx/store'


import {addressTableService} from '../services/address-table.service'
import {addressTableNode,AddressTableState,addressTableReducer} from '../ngrx/address-table/addressTable.reducer'
import {selectAddressTableFeature} from '../ngrx/address-table/addressTable.selectors'
import {GetDetails} from '../ngrx/address-table/addressTable.actions'


@Component({
  selector: 'app-addres-form',
  templateUrl: './addres-form.component.html',
  styleUrls: ['./addres-form.component.scss']
})
export class AddresFormComponent implements OnInit {

  constructor(
    public store$:Store<AddressTableState>
  ) { }

  address = "44:38:39:ff:ef:57"

  getDetails(){
      this.store$.dispatch(new GetDetails(this.address))
      // console.log(this.address);

  }
  ngOnInit(): void {
  }

}
