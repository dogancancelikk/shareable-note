import React from 'react'
import { Container, CheckBox, Header, Title, Button, Left, Right, Body, Icon, Text, View, Fab, List, ListItem } from 'native-base'

const ListDetailScreen = () => {
  const listData = [
    { id: '1', title: 'First List', isChecked: true },
    { id: '2', title: 'Second List', isChecked: false },
  ]

  return (
    <Container>
      <Header>
        <Left>
          <Button transparent onPress={() => Actions.pop()}>
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
          dataArray={listData}
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
        <Fab direction="up" containerStyle={{}} style={{ backgroundColor: '#34A34F' }} position="bottomRight">
          <Icon name="add" />
        </Fab>
      </View>
    </Container>
  )
}

export default ListDetailScreen
