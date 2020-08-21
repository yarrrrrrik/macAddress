import {addressTableActionsType,AddressTableActions} from './addressTable.actions'

export const addressTableNode = 'addressTable'

export interface AddressTableState {
  details: any
}

const initialState:AddressTableState ={
  details:false
}

export const addressTableReducer = (state = initialState,action:AddressTableActions) => {
  switch (action.type) {
    case addressTableActionsType.pushDetails:
      return {...state,details:action.details}
    default:
      return state
  }
}
