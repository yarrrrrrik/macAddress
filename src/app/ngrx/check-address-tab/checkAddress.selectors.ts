import {createFeatureSelector,createSelector} from '@ngrx/store'
import {checkAddressNode,checkAddressState} from './checkAddress.reducers'

export const selectTestFeature = createFeatureSelector<checkAddressState>(checkAddressNode)

export const selectTest = createSelector(
  selectTestFeature,
  (state:checkAddressState):any => state.count
)
