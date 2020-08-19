import {Action} from '@ngrx/store'

export enum checkAddressActions{
  init ='init',
}

export class Init implements Action{
  readonly type = checkAddressActions.init
}


export type TestActions = Init 
