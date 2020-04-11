import React, { useState } from 'react'
import { Button, Content, Footer, FooterTab, Header, Item, Input, Text } from 'native-base'
import AppShell from '../../Components/AppShell/AppShell'

const AddListItemScreen = ({ navigation }) => {
  const [itemValue, setItemValue] = useState('')
  const addFunction = navigation.getParam('addFunction')

  return (
    <AppShell>
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
    </AppShell>
  )
}

export default AddListItemScreen
