import { call } from 'redux-saga/effects'
import ListItemsService from '../Services/ListItemsService'

export function* addListItem(action) {
  yield call(() => ListItemsService.addListItem(action.listId, action.title, action.isChecked))
}

export function* removeListItem(action) {
  yield call(() => ListItemsService.deleteListItem(action.listId, action.itemId))
}

export function* updateListItem(action) {
  yield call(() => ListItemsService.updateListItem(action.listId, action.itemId, action.isChecked))
}
