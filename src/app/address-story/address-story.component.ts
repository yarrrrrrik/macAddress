import { Component, OnInit, Input } from '@angular/core';
import {select,Store} from '@ngrx/store'
import {selectAddressStoryFeature} from '../ngrx/address-story/addressStory.selectors'
import {AddressStoryState} from '../ngrx/address-story/addressStory.reducer'

@Component({
  selector: 'app-address-story',
  templateUrl: './address-story.component.html',
  styleUrls: ['./address-story.component.scss']
})
export class AddressStoryComponent implements OnInit {
  public addresses:any = false

  public state$ = this.store$.pipe(select(selectAddressStoryFeature)).subscribe(data => this.addresses = data.checkedAddresses)// тут можно поработать с датой

  constructor(
    public store$:Store<AddressStoryState>
  ) { }

  ngOnInit(): void {
  }

}
