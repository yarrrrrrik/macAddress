import {createFeatureSelector,createSelector} from '@ngrx/store'
import {addressTableNode,AddressTableState} from './addressTable.reducer'

export const selectAddressTableFeature = createFeatureSelector<AddressTableState>(addressTableNode)

export const selectAddressDetails = createSelector(
  selectAddressTableFeature,
  (state:AddressTableState):any => state.details
)
