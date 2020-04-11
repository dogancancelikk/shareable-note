import { createAppContainer, createStackNavigator } from 'react-navigation'
import ListsScreen from 'App/Containers/Lists/ListsScreen'
import ListDetailScreen from 'App/Containers/ListDetail/ListDetailScreen'

/**
 * The root screen contains the application's navigation.
 *
 * @see https://reactnavigation.org/docs/en/hello-react-navigation.html#creating-a-stack-navigator
 */
const StackNavigator = createStackNavigator(
  {
    // Create the application routes here (the key is the route name, the value is the target screen)
    // See https://reactnavigation.org/docs/en/stack-navigator.html#routeconfigs
    //SplashScreen: SplashScreen,
    MainScreen: ListsScreen,
    ListDetailScreen: ListDetailScreen,
  },
  {
    // By default the application will show the splash screen
    initialRouteName: 'MainScreen',
    // See https://reactnavigation.org/docs/en/stack-navigator.html#stacknavigatorconfig
    headerMode: 'none',
  }
)

export default createAppContainer(StackNavigator)
