import React, { useState } from 'react'
import { Button, Content, Footer, FooterTab, Item, Input, Text } from 'native-base'
import AppShell from '../../Components/AppShell/AppShell'

const AddListItemScreen = ({ navigation }) => {
  const [itemValue, setItemValue] = useState('')
  const addFunction = navigation.getParam('addFunction')
  const submitFunction = () => {
    addFunction(itemValue)
    navigation.goBack()
  }

  return (
    <AppShell>
      <Content>
        <Item>
          <Input
            placeholder="Enter new item .."
            value={itemValue}
            onChangeText={(inputValue) => setItemValue(inputValue)}
            autoCorrect={false}
            onEndEditing={submitFunction}
          />
        </Item>
      </Content>

      <Footer>
        <FooterTab>
          <Button full disabled={itemValue === ''} onPress={submitFunction}>
            <Text>Add</Text>
          </Button>
        </FooterTab>
      </Footer>
    </AppShell>
  )
}

export default AddListItemScreen
