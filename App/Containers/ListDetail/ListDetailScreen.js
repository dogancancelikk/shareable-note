import React, { useState } from 'react'
import { Icon, Fab } from 'native-base'
import { Animated, Dimensions, View } from 'react-native'
import { SwipeListView } from 'react-native-swipe-list-view'
import NavigationService from '../../Services/NavigationService'
import AppShell from '../../Components/AppShell/AppShell'
import SwipeRowWithCheckBox from '../../Components/SwipeList/SwipeRowWithCheckBox'
import SwipeRowHiddenItem from '../../Components/SwipeList/SwipeRowHiddenItem'

const INITIAL_LIST = [
  { id: '1', title: 'Milk', isChecked: true },
  { id: '2', title: 'Butter', isChecked: false },
  { id: '3', title: 'Coke', isChecked: false },
  { id: '4', title: 'Peanut', isChecked: false },
  { id: '5', title: 'Meat', isChecked: false },
]

const ListDetailScreen = ({ navigation }) => {
  const [listState, setListState] = useState(INITIAL_LIST)

  const checkItem = (index) => {
    const newArray = [...listState]
    newArray[index].isChecked = !newArray[index].isChecked
    setListState(newArray)
  }

  const removeItem = (id) => {
    const newArray = [...listState]
    const prevIndex = listState.findIndex((item) => item.id === id)
    newArray.splice(prevIndex, 1)
    setListState(newArray)
  }

  const onSwipeValueChange = ({ key, value }) => {
    //TODO fix multiple calls to remove method
    if (value < -Dimensions.get('window').width) {
      Animated.timing(new Animated.Value(1), {
        toValue: 0,
        duration: 200,
      }).start(() => {
        removeItem(key)
      })
    }
  }

  const renderItem = ({ item, index }) => (
    <SwipeRowWithCheckBox title={item.title} isChecked={item.isChecked} onPressMethod={() => checkItem(index)} />
  )

  return (
    <AppShell title={navigation.state.params.title}>
      <View style={{ flex: 1 }}>
        <SwipeListView
          keyExtractor={(item) => item.id}
          disableRightSwipe
          data={listState}
          renderItem={renderItem}
          renderHiddenItem={() => <SwipeRowHiddenItem />}
          rightOpenValue={-Dimensions.get('window').width}
          onSwipeValueChange={onSwipeValueChange}
          useNativeDriver={false}
        />
      </View>
      <View style={{ flex: 1 }}>
        <Fab
          direction="up"
          containerStyle={{}}
          style={{ backgroundColor: '#34A34F' }}
          position="bottomRight"
          onPress={() =>
            NavigationService.navigate('AddListItemScreen', {
              addFunction: (title) => setListState([...listState, { id: (listState.length + 1).toString(), title: title, isChecked: false }]),
            })
          }
        >
          <Icon name="add" />
        </Fab>
      </View>
    </AppShell>
  )
}

export default ListDetailScreen
