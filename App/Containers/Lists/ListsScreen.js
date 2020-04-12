import React, { useState, useEffect } from 'react'
import { Button, Icon, View, Fab, Spinner } from 'native-base'
import AppShell from '../../Components/AppShell/AppShell'
import { db } from '../../Config/db'
import NewList from '../../Components/NewList/NewList'
import ListOfLists from '../../Components/ListOfLists/ListOfLists'
import { useSelector, useDispatch } from 'react-redux'
import { closeNewListForm, openNewListForm } from '../../Stores/Lists/Actions'

let listsRef = db.ref('lists')

const ListsScreen = ({ navigation }) => {
  const [listData, setListsData] = useState([])
  const { isNewListFormOpened, isLoading } = useSelector((state) => state.lists)
  const [active, setActive] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    listsRef.on('value', (snapshot) => {
      console.log(isNewListFormOpened)
      let data = snapshot.val()
      let items = Object.values(data)
      setListsData(items)
    })
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
