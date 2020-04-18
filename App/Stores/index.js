import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from 'App/Sagas'
import { reducer as ListsReducer } from './Lists/Reducers'
import { reducer as ListItemsReducer } from './ListItems/Reducers'

export default () => {
  const rootReducer = combineReducers({
    /**
     * Register your reducers here.
     * @see https://redux.js.org/api-reference/combinereducers
     */
    lists: ListsReducer,
    listItems: ListItemsReducer,
  })

  return configureStore(rootReducer, rootSaga)
}
