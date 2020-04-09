import React, { useState } from 'react'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, View, Fab, List, ListItem, Thumbnail } from 'native-base';
import Style from './ExampleScreenStyle'

const ExampleScreen = () => {
  const [active, setActive] = useState(false);

  return (
    <Container>
      <Header>
        <Left>
          <Button transparent>
            <Icon name='menu' />
          </Button>
        </Left>
        <Body>
          <Title>My Lists</Title>
        </Body>
        <Right />
      </Header>

      <Content>

        <List>
          <ListItem thumbnail>
            <Body>
              <Text>First List</Text>
              <Text note numberOfLines={1}>Its time to add new note . .</Text>
            </Body>
            <Right>
              <Button transparent>
                <Text>View</Text>
              </Button>
            </Right>
          </ListItem>
          <ListItem thumbnail>
            <Body>
              <Text>Second List</Text>
              <Text note numberOfLines={1}>Its time to add new note . .</Text>
            </Body>
            <Right>
              <Button transparent>
                <Text>View</Text>
              </Button>
            </Right>
          </ListItem>
          <ListItem thumbnail>
            <Body>
              <Text>Third List</Text>
              <Text note numberOfLines={1}>Its time to add new note . .</Text>
            </Body>
            <Right>
              <Button transparent>
                <Text>View</Text>
              </Button>
            </Right>
          </ListItem>
          <ListItem thumbnail>
            <Body>
              <Text>First List</Text>
              <Text note numberOfLines={1}>Its time to add new note . .</Text>
            </Body>
            <Right>
              <Button transparent>
                <Text>View</Text>
              </Button>
            </Right>
          </ListItem>
          <ListItem thumbnail>
            <Body>
              <Text>First List</Text>
              <Text note numberOfLines={1}>Its time to add new note . .</Text>
            </Body>
            <Right>
              <Button transparent>
                <Text>View</Text>
              </Button>
            </Right>
          </ListItem>
        </List>

      </Content>
      <View style={{ flex: 1 }}>
        <Fab
          active={active}
          direction="up"
          containerStyle={{}}
          style={{ backgroundColor: '#5067FF' }}
          position="bottomRight"
          onPress={() => setActive(!active)}>
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

export default ExampleScreen
