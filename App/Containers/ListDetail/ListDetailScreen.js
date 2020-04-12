import React, { useState } from 'react'
import { CheckBox, Body, Icon, Text, View, Fab, List, ListItem } from 'native-base'
import NavigationService from '../../Services/NavigationService'
import AppShell from '../../Components/AppShell/AppShell'

const INITIAL_LIST = [
  { id: '1', title: 'Milk', isChecked: true },
  { id: '2', title: 'Butter', isChecked: false },
]

const ListDetailScreen = ({ navigation }) => {
  const [listState, setListState] = useState(INITIAL_LIST)

  checkItem = (index) => {
    const newArray = [...listState]
    newArray[index].isChecked = !newArray[index].isChecked
    setListState(newArray)
  }

  return (
    <AppShell title={navigation.state.params.title}>
      <View style={{ flex: 1 }}>
        <List
          keyExtractor={(item) => item.id}
          dataArray={listState}
          renderItem={({ index, item }) => (
            <ListItem thumbnail>
              <CheckBox checked={item.isChecked} onPress={() => checkItem(index)} />
              <Body>
                <Text>{item.title}</Text>
              </Body>
            </ListItem>
          )}
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
