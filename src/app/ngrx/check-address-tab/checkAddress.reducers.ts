import {TestActions,checkAddressActions} from './checkAddress.actions'

// export const pageListNode = 'pageList'
export const checkAddressNode = 'checkAddress'

export interface checkAddressState {
  count: any
}

const initialState:checkAddressState ={
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
