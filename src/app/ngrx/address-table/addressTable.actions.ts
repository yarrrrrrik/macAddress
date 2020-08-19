import {Action} from '@ngrx/store'

export enum addressTableActionsType{
  getDetails = '[CHECK_ADDRESS_TABLE] getDetails',
  pushDetails = '[CHECK_ADDRESS_TABLE] pushDetails'
}

export class GetDetails implements Action{
  readonly type = addressTableActionsType.getDetails
}

export class PushDetails implements Action{
  readonly type = addressTableActionsType.pushDetails
  constructor(public details){}
}

export type AddressTableActions = GetDetails | PushDetails
