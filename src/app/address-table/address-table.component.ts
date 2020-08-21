import { Component, OnInit, Input } from '@angular/core';
import {Observable} from 'rxjs'
import {select,Store} from '@ngrx/store'

import {addressTableService} from '../services/address-table.service'
import {AddressTableState} from '../ngrx/address-table/addressTable.reducer'
import {selectAddressTableFeature} from '../ngrx/address-table/addressTable.selectors'
import {GetDetails} from '../ngrx/address-table/addressTable.actions'


@Component({
  selector: 'app-address-table',
  templateUrl: './address-table.component.html',
  styleUrls: ['./address-table.component.scss']
})
export class AddressTableComponent implements OnInit {
  @Input() useDispatch:any
  @Input() address:any

  public details:any = false
  public state$:any = 0

  constructor(
    public store$:Store<AddressTableState>
  ) { }

  ngOnInit(): void {
    if(!this.address){
      this.state$ = this.store$.pipe(select(selectAddressTableFeature)).subscribe(data => this.details = data.details)// тут можно поработать с датой
    }else{
      this.details = this.address
    }
  }


}
