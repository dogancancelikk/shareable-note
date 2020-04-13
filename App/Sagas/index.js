import { takeLatest, all } from 'redux-saga/effects'
import { StartupTypes } from 'App/Stores/Startup/Actions'
import { CREATE_NEW_LIST, DELETE_LIST } from 'App/Stores/Lists/Types'
import { startup } from './StartupSaga'
import { createList, deleteList } from './ListsSaga'

export default function* root() {
  yield all([
    /**
     * @see https://redux-saga.js.org/docs/basics/UsingSagaHelpers.html
     */
    // Run the startup saga when the application starts
    takeLatest(StartupTypes.STARTUP, startup),

    takeLatest(CREATE_NEW_LIST, createList),

    takeLatest(DELETE_LIST, deleteList),
  ])
}
