import {Action} from '@ngrx/store'

export enum addressStoryActionsType{
  addAddressDetails = '[ADDRESS_STORY] addDetails'
}

export class AddDetails implements Action{
  readonly type = addressStoryActionsType.addAddressDetails
  constructor(public addressDetails){}
}


export type AddressStoryActions = AddDetails
