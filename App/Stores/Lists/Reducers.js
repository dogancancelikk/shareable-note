import { createReducer } from 'reduxsauce'
import { INITIAL_STATE } from './InitialState'
import {
  CLOSE_NEW_LIST_FORM,
  CREATE_NEW_LIST,
  CREATE_NEW_LIST_FAILURE,
  CREATE_NEW_LIST_SUCCESS,
  OPEN_NEW_LIST_FORM,
  DELETE_LIST,
  DELETE_LIST_SUCCESS,
  DELETE_LIST_FAILURE,
} from './Types'

const openNewListForm = (state) => ({
  ...state,
  isNewListFormOpened: true,
})

const closeNewListForm = (state) => ({
  ...state,
  isNewListFormOpened: false,
})

const createNewListSuccess = (state) => ({
  ...state,
  isNewListFormOpened: false,
  isLoading: false,
})

const createNewListFailure = (state, action) => ({
  ...state,
  errorMessage: action.payload,
  isLoading: false,
})

const createNewList = (state) => ({
  ...state,
  isLoading: true,
})

const deleteList = (state) => ({
  ...state,
  isLoading: true,
})

const deleteListSuccess = (state) => ({
  ...state,
  isLoading: false,
})

const deleteListFailure = (state, action) => ({
  ...state,
  errorMessage: action.payload,
  isLoading: false,
})

export const reducer = createReducer(INITIAL_STATE, {
  [OPEN_NEW_LIST_FORM]: openNewListForm,
  [CLOSE_NEW_LIST_FORM]: closeNewListForm,
  [CREATE_NEW_LIST_SUCCESS]: createNewListSuccess,
  [CREATE_NEW_LIST]: createNewList,
  [CREATE_NEW_LIST_FAILURE]: createNewListFailure,
  [DELETE_LIST]: deleteList,
  [DELETE_LIST_SUCCESS]: deleteListSuccess,
  [DELETE_LIST_FAILURE]: deleteListFailure,
})
