import React, { useState } from 'react'
import { Container, CheckBox, Header, Title, Button, Left, Right, Body, Icon, Text, View, Fab, List, ListItem } from 'native-base'
import NavigationService from '../../Services/NavigationService'

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
    <Container>
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>List Title</Title>
        </Body>
        <Right />
      </Header>

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
    </Container>
  )
}

export default ListDetailScreen
