import React, { useState, useEffect } from 'react'
import { Icon, Fab } from 'native-base'
import { Animated, Dimensions, View } from 'react-native'
import { SwipeListView } from 'react-native-swipe-list-view'
import NavigationService from '../../Services/NavigationService'
import AppShell from '../../Components/AppShell/AppShell'
import SwipeRowWithCheckBox from '../../Components/SwipeList/SwipeRowWithCheckBox'
import SwipeRowHiddenItem from '../../Components/SwipeList/SwipeRowHiddenItem'
import { db } from '../../Config/db'

const ListDetailScreen = ({ navigation }) => {
  const [listState, setListState] = useState([])
  const listId = navigation.getParam('key')

  let listItemsRef = db.ref(`lists/${listId}/items/`)

  useEffect(() => {
    listItemsRef.on('value', (snapshot) => {
      const listArray = []
      snapshot.forEach((childSnapshot) => {
        const childData = childSnapshot.val()
        childData.key = childSnapshot.key
        listArray.push(childData)
      })
      setListState(listArray)
    })
  }, [])

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
          onPress={() => NavigationService.navigate('AddListItemScreen', { listId })}
        >
          <Icon name="add" />
        </Fab>
      </View>
    </AppShell>
  )
}

export default ListDetailScreen
