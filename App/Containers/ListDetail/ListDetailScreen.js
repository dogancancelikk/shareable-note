import React, { useState } from 'react'
import { Container, CheckBox, Header, Title, Button, Left, Right, Body, Icon, Text, View, Fab, List, ListItem } from 'native-base'
import NavigationService from '../../Services/NavigationService'

const INITIAL_LIST = [
  { id: '1', title: 'First List', isChecked: true },
  { id: '2', title: 'Second List', isChecked: false },
]

const ListDetailScreen = ({ navigation }) => {
  const [listState, setListState] = useState(INITIAL_LIST)

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
          dataArray={listState}
          renderRow={({ title, isChecked }) => (
            <ListItem thumbnail>
              <CheckBox checked={isChecked} />
              <Body>
                <Text>{title}</Text>
              </Body>
            </ListItem>
          )}
        />

        <List />
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
