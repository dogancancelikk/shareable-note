import { CLOSE_NEW_LIST_FORM, CREATE_NEW_LIST, CREATE_NEW_LIST_FAILURE, CREATE_NEW_LIST_SUCCESS, OPEN_NEW_LIST_FORM } from './Types'

export function openNewListForm() {
  return {
    type: OPEN_NEW_LIST_FORM,
    isNewListFormOpened: true,
  }
}
export function closeNewListForm() {
  return {
    type: CLOSE_NEW_LIST_FORM,
    isNewListFormOpened: false,
  }
}

export function createList(title, description) {
  return {
    type: CREATE_NEW_LIST,
    title: title,
    description: description,
  }
}

export function createListSuccess() {
  return {
    type: CREATE_NEW_LIST_SUCCESS,
  }
}

export function createListFailure(errorMessage) {
  return {
    type: CREATE_NEW_LIST_FAILURE,
    payload: errorMessage,
  }
}
