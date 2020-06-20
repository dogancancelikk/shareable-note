import { createAppContainer, createStackNavigator } from 'react-navigation'
import Loading from 'App/Containers/Loading/Loading'
import ListsScreen from 'App/Containers/Lists/ListsScreen'
import ListDetailScreen from 'App/Containers/ListDetail/ListDetailScreen'
import AddListItemScreen from 'App/Containers/ListDetail/AddListItemScreen'
import Login from 'App/Containers/Login/Login'

/**
 * The root screen contains the application's navigation.
 *
 * @see https://reactnavigation.org/docs/en/hello-react-navigation.html#creating-a-stack-navigator
 */
const StackNavigator = createStackNavigator(
  {
    // Create the application routes here (the key is the route name, the value is the target screen)
    // See https://reactnavigation.org/docs/en/stack-navigator.html#routeconfigs
    // SplashScreen: SplashScreen,
    MainScreen: Loading,
    ListsScreen: ListsScreen,
    ListDetailScreen: ListDetailScreen,
    AddListItemScreen: AddListItemScreen,
    Login: Login,
  },
  {
    initialRouteName: 'MainScreen',
    // See https://reactnavigation.org/docs/en/stack-navigator.html#stacknavigatorconfig
    headerMode: 'none',
  }
)

export default createAppContainer(StackNavigator)
