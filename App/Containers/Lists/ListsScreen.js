import React, { useState, useEffect } from 'react'
import { Button, Icon, View, Fab, Spinner } from 'native-base'
import AppShell from '../../Components/AppShell/AppShell'
import { db, auth } from '../../Config/db'
import NewList from '../../Components/NewList/NewList'
import ListOfLists from '../../Components/ListOfLists/ListOfLists'
import { useSelector, useDispatch } from 'react-redux'
import { closeNewListForm, openNewListForm } from '../../Stores/Lists/Actions'

const ListsScreen = () => {
  const userId = auth.currentUser ? auth.currentUser.uid : 'public'
  const listsRef = db.ref(`users/${userId}/lists`)
  const [listData, setListsData] = useState([])
  const { isNewListFormOpened, isLoading } = useSelector((state) => state.lists)
  const [active, setActive] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    const getLists = (snapshot) => {
      const listArray = []
      snapshot.forEach((childSnapshot) => {
        const childData = childSnapshot.val()
        childData.key = childSnapshot.key
        listArray.push(childData)
      })
      setListsData(listArray)
    }
    listsRef.on('value', getLists)
    return () => listsRef.off('value', getLists)
  }, [])

  return (
    <AppShell>
      {!isLoading ? <View style={{ flex: 1 }}>{!isNewListFormOpened ? <ListOfLists listData={listData} /> : <NewList />}</View> : <Spinner />}
      <Fab
        active={active}
        direction="up"
        containerStyle={{}}
        style={{ backgroundColor: '#5067FF' }}
        position="bottomRight"
        onPress={() => setActive(!active)}
      >
        <Icon name="share" />

        <Button style={{ backgroundColor: '#DD5144' }} onPress={() => dispatch(closeNewListForm())}>
          <Icon name="remove" />
        </Button>
        <Button style={{ backgroundColor: '#34A34F' }} onPress={() => dispatch(openNewListForm())}>
          <Icon name="add" />
        </Button>
      </Fab>
    </AppShell>
  )
}

export default ListsScreen
