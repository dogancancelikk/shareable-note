import {
  CLOSE_NEW_LIST_FORM,
  CREATE_NEW_LIST,
  CREATE_NEW_LIST_FAILURE,
  CREATE_NEW_LIST_SUCCESS,
  OPEN_NEW_LIST_FORM,
  DELETE_LIST,
  DELETE_LIST_SUCCESS,
  DELETE_LIST_FAILURE,
  ADD_LIST_ITEM,
  ADD_LIST_ITEM_SUCCESS,
  ADD_LIST_ITEM_FAILURE,
  REMOVE_LIST_ITEM,
  REMOVE_LIST_ITEM_SUCCESS,
  REMOVE_LIST_ITEM_FAILURE,
} from './Types'

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

export function deleteList(id) {
  return {
    type: DELETE_LIST,
    id: id,
  }
}

export function deleteListSuccess() {
  return {
    type: DELETE_LIST_SUCCESS,
  }
}

export function deleteListFailure(errorMessage) {
  return {
    type: DELETE_LIST_FAILURE,
    payload: errorMessage,
  }
}

export function addListItem(listId, title, isChecked) {
  return {
    type: ADD_LIST_ITEM,
    listId,
    title,
    isChecked,
  }
}

export function addListItemSuccess() {
  return {
    type: ADD_LIST_ITEM_SUCCESS,
  }
}

export function addListItemFailure(errorMessage) {
  return {
    type: ADD_LIST_ITEM_FAILURE,
    payload: errorMessage,
  }
}

export function removeListItem(listId, itemId) {
  return {
    type: REMOVE_LIST_ITEM,
    listId,
    itemId,
  }
}

export function removeListItemSuccess() {
  return {
    type: REMOVE_LIST_ITEM_SUCCESS,
  }
}

export function removeListItemFailure(errorMessage) {
  return {
    type: REMOVE_LIST_ITEM_FAILURE,
    payload: errorMessage,
  }
}
