import {TestActions,checkAddressActions} from './checkAddress.actions'

export const checkAddressNode = 'checkAddress'

export interface CheckAddressState {
  count: any
}

const initialState:CheckAddressState ={
  count:0
}

export const checkAddressReducer = (state = initialState,action:TestActions) => {
  switch (action.type) {
    case checkAddressActions.init:
      return {...state,count:10}
    default:
      return state
  }

}
