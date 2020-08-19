import{
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store'
import {environment} from '../../environments/environment'
import {checkAddressNode,CheckAddressState,checkAddressReducer} from './check-address-tab/checkAddress.reducer'
import {addressTableNode,AddressTableState,addressTableReducer} from './address-table/addressTable.reducer'


export interface State{
  [checkAddressNode]:CheckAddressState;
  [addressTableNode]:AddressTableState
}

export const reducers: ActionReducerMap<State> = {
  [checkAddressNode]:checkAddressReducer,
  [addressTableNode]:addressTableReducer
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : []
