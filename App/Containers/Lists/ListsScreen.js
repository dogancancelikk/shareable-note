import React, { useState, Component } from 'react'
import { Container, Header, Title, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, View, Fab, List, ListItem } from 'native-base'
import Style from './ListsScreenStyle'

const ListsScreen = (props) => {
  const [active, setActive] = useState(false)
  const listData = [
    { id: '1', title: 'First List', desc: 'Its time to add new note . .' },
    { id: '2', title: 'Second List', desc: 'Its time to add new note . .' },
  ]

  return (
    <Container>
      <Header>
        <Left>
          <Button transparent>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>My Lists</Title>
        </Body>
        <Right />
      </Header>

      <View style={{ flex: 1 }}>
        <List
          dataArray={listData}
          renderRow={({ title, desc }) => (
            <ListItem
              onPress={() => {
                props.navigation.navigate('ListDetailScreen')
              }}
            >
              <Body>
                <Text>{title}</Text>
                <Text note numberOfLines={1}>
                  {desc}
                </Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
          )}
        />

        <List />
      </View>
      <View style={{ flex: 1 }}>
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
          <Button style={{ backgroundColor: '#34A34F' }}>
            <Icon name="add" />
          </Button>
        </Fab>
      </View>
      <Footer>
        <FooterTab>
          <Button full>
            <Text>Sha-List</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  )
}

export default ListsScreen
