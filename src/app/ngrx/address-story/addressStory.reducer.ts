import {addressStoryActionsType,AddressStoryActions} from './addressStory.actions'

// export const pageListNode = 'pageList'
export const addressStoryNode = 'addressStory'

export interface AddressStoryState {
  checkedAddresses: any
}

const initialState:AddressStoryState ={
  checkedAddresses:[]
}

export const addressStoryReducer = (state = initialState,action:AddressStoryActions) => {
  switch (action.type) {
    case addressStoryActionsType.addAddressDetails:
      let newCheckedAddresses = state.checkedAddresses.concat(action.addressDetails)
      return {...state,checkedAddresses:newCheckedAddresses}
    default:
      return state
  }
}
