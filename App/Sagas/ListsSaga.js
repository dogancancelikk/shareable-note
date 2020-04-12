import { put, call } from 'redux-saga/effects'
import ListService from '../Services/ListService'
import { createListFailure, createListSuccess } from '../Stores/Lists/Actions'

export function* createList(action) {
  try {
    yield call(() => ListService.createList(action.title, action.description))
    yield put(createListSuccess())
  } catch (e) {
    yield put(createListFailure(e))
  }
}
