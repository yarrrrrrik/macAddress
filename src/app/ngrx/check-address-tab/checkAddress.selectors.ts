import {createFeatureSelector,createSelector} from '@ngrx/store'
import {checkAddressNode,CheckAddressState} from './checkAddress.reducer'

export const selectTestFeature = createFeatureSelector<CheckAddressState>(checkAddressNode)

export const selectTest = createSelector(
  selectTestFeature,
  (state:CheckAddressState):any => state.count
)
