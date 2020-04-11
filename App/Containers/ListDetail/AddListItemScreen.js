import React, { useState } from 'react'
import { Button, Container, Content, Footer, FooterTab, Header, Item, Input, Text, Left, Icon } from 'native-base'

const AddListItemScreen = ({ navigation }) => {
  const [itemValue, setItemValue] = useState('')
  const addFunction = navigation.getParam('addFunction')

  return (
    <Container>
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
      </Header>
      <Content>
        <Item>
          <Input placeholder="Enter new item .." value={itemValue} onChangeText={(inputValue) => setItemValue(inputValue)} />
        </Item>
      </Content>

      <Footer>
        <FooterTab>
          <Button
            full
            disabled={itemValue === ''}
            onPress={() => {
              addFunction(itemValue)
              navigation.goBack()
            }}
          >
            <Text>Add</Text>
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  )
}

export default AddListItemScreen
