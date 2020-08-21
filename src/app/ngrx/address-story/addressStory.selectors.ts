import {createFeatureSelector,createSelector} from '@ngrx/store'
import {addressStoryNode,AddressStoryState} from './addressStory.reducer'

export const selectAddressStoryFeature = createFeatureSelector<AddressStoryState>(addressStoryNode)

export const selectCheckedAddresses = createSelector(
  selectAddressStoryFeature,
  (state:AddressStoryState):any => state.checkedAddresses
)
