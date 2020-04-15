import { put, call } from 'redux-saga/effects'
import ListService from '../Services/ListService'
import {
  createListFailure,
  createListSuccess,
  deleteListSuccess,
  deleteListFailure,
  addListItemSuccess,
  addListItemFailure,
} from '../Stores/Lists/Actions'

export function* createList(action) {
  try {
    yield call(() => ListService.createList(action.title, action.description))
    yield put(createListSuccess())
  } catch (e) {
    yield put(createListFailure(e))
  }
}

export function* deleteList(action) {
  try {
    yield call(() => ListService.deleteList(action.id))
    yield put(deleteListSuccess())
  } catch (e) {
    yield put(deleteListFailure(e))
  }
}

export function* addListItem(action) {
  try {
    yield call(() => ListService.addListItem(action.listId, action.title, action.isChecked))
    yield put(addListItemSuccess())
  } catch (e) {
    yield put(addListItemFailure(e))
  }
}
