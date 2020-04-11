import React, { useState, useEffect } from 'react'
import { Button, Right, Body, Icon, Text, View, Fab, List, ListItem } from 'native-base'
import AppShell from '../../Components/AppShell/AppShell'
import NavigationService from '../../Services/NavigationService'
import { db } from '../../Config/db'
import ListService from '../../Services/ListService'
import NewList from '../../Components/NewList/NewList'
import ListOfLists from '../../Components/ListOfLists/ListOfLists'

let listsRef = db.ref('lists')

const ListsScreen = ({ navigation }) => {
  const [active, setActive] = useState(false)
  const [listData, setListsData] = useState([])
  const [isAddingNewList, setIsAddingNewList] = useState(false)

  useEffect(() => {
    listsRef.on('value', (snapshot) => {
      let data = snapshot.val()
      let items = Object.values(data)
      setListsData(items)
    })
  }, [])

  return (
    <AppShell>
      <View style={{ flex: 1 }}>{!isAddingNewList ? <ListOfLists listData={listData} /> : <NewList />}</View>

      <Fab
        active={active}
        direction="up"
        containerStyle={{}}
        style={{ backgroundColor: '#5067FF' }}
        position="bottomRight"
        onPress={() => setActive(!active)}
      >
        <Icon name="share" />
        <Button disabled style={{ backgroundColor: '#DD5144' }}>
          <Icon name="mail" />
        </Button>
        <Button style={{ backgroundColor: '#3B5998' }}>
          <Icon name="remove" />
        </Button>
        <Button style={{ backgroundColor: '#34A34F' }} onPress={() => setIsAddingNewList(true)}>
          <Icon name="add" />
        </Button>
      </Fab>
    </AppShell>
  )
}

export default ListsScreen
