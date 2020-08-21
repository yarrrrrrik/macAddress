import{
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store'
import {environment} from '../../environments/environment'
import {addressTableNode,AddressTableState,addressTableReducer} from './address-table/addressTable.reducer'
import {addressStoryNode,AddressStoryState,addressStoryReducer} from './address-story/addressStory.reducer'


export interface State{
  [addressTableNode]:AddressTableState;
  [addressStoryNode]:AddressStoryState
}

export const reducers: ActionReducerMap<State> = {
  [addressTableNode]:addressTableReducer,
  [addressStoryNode]:addressStoryReducer
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : []
