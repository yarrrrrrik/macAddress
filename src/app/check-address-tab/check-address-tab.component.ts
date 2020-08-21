import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs'
import {select,Store} from '@ngrx/store'
import {CheckAddressState} from '../ngrx/check-address-tab/checkAddress.reducer'
import {selectTest} from '../ngrx/check-address-tab/checkAddress.selectors'
import {Init} from '../ngrx/check-address-tab/checkAddress.actions'

@Component({
  selector: 'app-check-address-tab',
  templateUrl: './check-address-tab.component.html',
  styleUrls: ['./check-address-tab.component.scss']
})
export class CheckAddressTabComponent implements OnInit {

  public state$:Observable<any> = this.store.pipe(select(selectTest))

  constructor(
    public store:Store<CheckAddressState>
  ) { }

  ngOnInit(): void {
  }


}
