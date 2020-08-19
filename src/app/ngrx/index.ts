import{
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store'
import {environment} from '../../environments/environment'
import {checkAddressNode,checkAddressState,checkAddressReducer} from './check-address-tab/checkAddres.reducer'

export interface State{
  [checkAddressNode]:checkAddressState
}

export const reducers: ActionReducerMap<State> = {
  [checkAddressNode]:checkAddressReducer
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : []
