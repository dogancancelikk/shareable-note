import { takeLatest, all } from 'redux-saga/effects'
import { StartupTypes } from '../Stores/Startup/Actions'
import { CREATE_NEW_LIST, DELETE_LIST } from '../Stores/Lists/Types'
import { ADD_LIST_ITEM, REMOVE_LIST_ITEM, UPDATE_LIST_ITEM } from '../Stores/ListItems/Types'
import { startup } from './StartupSaga'
import { createList, deleteList } from './ListsSaga'
import { addListItem, removeListItem, updateListItem } from './ListItemsSaga'

export default function* root() {
  yield all([
    /**
     * @see https://redux-saga.js.org/docs/basics/UsingSagaHelpers.html
     */
    // Run the startup saga when the application starts
    takeLatest(StartupTypes.STARTUP, startup),

    takeLatest(CREATE_NEW_LIST, createList),

    takeLatest(DELETE_LIST, deleteList),

    takeLatest(ADD_LIST_ITEM, addListItem),

    takeLatest(REMOVE_LIST_ITEM, removeListItem),

    takeLatest(UPDATE_LIST_ITEM, updateListItem),
  ])
}
