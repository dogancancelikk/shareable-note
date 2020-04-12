import { put, call } from 'redux-saga/effects'
import ListActions from 'App/Stores/Lists/Actions'
import { userService } from 'App/Services/UserService'
import ListService from '../Services/ListService'

/**
 * A saga can contain multiple functions.
 *
 * This example saga contains only one to fetch fake user informations.
 * Feel free to remove it.
 */
export function* createList() {
  // Dispatch a redux action using `put()`
  // @see https://redux-saga.js.org/docs/basics/DispatchingActions.html
  yield put(ExampleActions.fetchUserLoading())

  // Fetch user informations from an API
  const user = yield call(ListService.createList)
  if (user) {
    yield put(ListActions.createListSuccess())
  } else {
    yield put(ListActions.createListFailure('There was an error while fetching user informations.'))
  }
}
