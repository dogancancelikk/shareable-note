import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Icon, Fab } from 'native-base'
import { View } from 'react-native'
import NavigationService from '../../Services/NavigationService'
import AppShell from '../../Components/AppShell/AppShell'
import SwipeList from '../../Components/SwipeList/SwipeList'
import SwipeRowWithCheckBox from '../../Components/SwipeList/SwipeRowWithCheckBox'
import { db, auth } from '../../Config/db'
import { removeListItem, updateListItem } from '../../Stores/ListItems/Actions'

const ListDetailScreen = ({ navigation }) => {
  const [listState, setListState] = useState([])
  const listId = navigation.getParam('key')
  const dispatch = useDispatch()
  const listItemsRef = db.ref(`users/${auth.currentUser?.uid}/lists/${listId}/items/`)

  useEffect(() => {
    const getListItems = (snapshot) => {
      const listArray = []
      snapshot.forEach((childSnapshot) => {
        const childData = childSnapshot.val()
        childData.key = childSnapshot.key
        listArray.push(childData)
      })
      setListState(listArray)
    }
    listItemsRef.on('value', getListItems)
    return () => listItemsRef.off('value', getListItems)
  }, [])

  const checkItem = (itemId, isChecked) => {
    dispatch(updateListItem(listId, itemId, isChecked))
  }
  const deleteAction = (id) => dispatch(removeListItem(listId, id))

  const renderItem = ({ item }) => (
    <SwipeRowWithCheckBox title={item.title} isChecked={item.isChecked} onPressMethod={() => checkItem(item.key, !item.isChecked)} />
  )

  return (
    <AppShell title={navigation.state.params.title}>
      <SwipeList data={listState} renderItem={renderItem} deleteAction={deleteAction} />
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
