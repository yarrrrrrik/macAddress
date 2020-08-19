import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs'
import {select,Store} from '@ngrx/store'
import {map,mergeMap,tap} from 'rxjs/operators'
import {checkAddressNode,checkAddressState,checkAddressReducer} from '../ngrx/check-address-tab/checkAddress.reducers'
import {selectTest} from '../ngrx/check-address-tab/checkAddress.selectors'
import {Init} from '../ngrx/check-address-tab/checkAddress.actions'

@Component({
  selector: 'app-check-address-tab',
  templateUrl: './check-address-tab.component.html',
  styleUrls: ['./check-address-tab.component.scss']
})
export class CheckAddressTabComponent implements OnInit {

  public state1:any = 5444
  public state$:Observable<any> = this.store.pipe(select(selectTest)).subscribe(data => {console.log('yes')})

  constructor(
    public store:Store<checkAddressState>
  ) { }

  count = 5444

  ngOnInit(): void {
    this.store.dispatch(new Init())
  }


}