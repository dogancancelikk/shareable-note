import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Icon, Fab } from 'native-base'
import { Animated, Dimensions, View } from 'react-native'
import { SwipeListView } from 'react-native-swipe-list-view'
import NavigationService from '../../Services/NavigationService'
import AppShell from '../../Components/AppShell/AppShell'
import SwipeRowWithCheckBox from '../../Components/SwipeList/SwipeRowWithCheckBox'
import SwipeRowHiddenItem from '../../Components/SwipeList/SwipeRowHiddenItem'
import { db } from '../../Config/db'
import { removeListItem, updateListItem } from '../../Stores/ListItems/Actions'

const ListDetailScreen = ({ navigation }) => {
  const [listState, setListState] = useState([])
  const listId = navigation.getParam('key')
  const dispatch = useDispatch()
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

  const checkItem = (itemId, isChecked) => {
    dispatch(updateListItem(listId, itemId, isChecked))
  }

  const onSwipeValueChange = ({ key, value }) => {
    if (!this.animationIsRunning && value < -Dimensions.get('window').width) {
      this.animationIsRunning = true
      Animated.timing(new Animated.Value(1), { toValue: 0, duration: 200 }).start(() => {
        dispatch(removeListItem(listId, key))
        this.animationIsRunning = false
      })
    }
  }

  const renderItem = ({ item, index }) => (
    <SwipeRowWithCheckBox title={item.title} isChecked={item.isChecked} onPressMethod={() => checkItem(item.key, !item.isChecked)} />
  )

  return (
    <AppShell title={navigation.state.params.title}>
      <View style={{ flex: 1 }}>
        <SwipeListView
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
