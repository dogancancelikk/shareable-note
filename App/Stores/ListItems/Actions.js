import { ADD_LIST_ITEM, REMOVE_LIST_ITEM, UPDATE_LIST_ITEM } from './Types'

export function addListItem(listId, title, isChecked) {
  return {
    type: ADD_LIST_ITEM,
    listId,
    title,
    isChecked,
  }
}

export function removeListItem(listId, itemId) {
  return {
    type: REMOVE_LIST_ITEM,
    listId,
    itemId,
  }
}

export function updateListItem(listId, itemId, isChecked) {
  return {
    type: UPDATE_LIST_ITEM,
    listId,
    itemId,
    isChecked,
  }
}
