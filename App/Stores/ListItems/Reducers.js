import { createReducer } from 'reduxsauce'
import { INITIAL_STATE } from './InitialState'
import { ADD_LIST_ITEM, REMOVE_LIST_ITEM, UPDATE_LIST_ITEM } from './Types'

const addListItem = (state) => ({
  ...state,
})

const removeListItem = (state) => ({
  ...state,
})

const updateListItem = (state) => ({
  ...state,
})

export const reducer = createReducer(INITIAL_STATE, {
  [ADD_LIST_ITEM]: addListItem,
  [REMOVE_LIST_ITEM]: removeListItem,
  [UPDATE_LIST_ITEM]: updateListItem,
})
