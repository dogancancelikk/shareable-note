import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button, Content, Footer, FooterTab, Item, Input, Text } from 'native-base'
import AppShell from '../../Components/AppShell/AppShell'
import { addListItem } from '../../Stores/Lists/Actions'

const AddListItemScreen = ({ navigation }) => {
  const [itemValue, setItemValue] = useState('')
  const dispatch = useDispatch()
  const listId = navigation.getParam('listId')

  const submitFunction = () => {
    dispatch(addListItem(listId, itemValue, false))
    navigation.goBack()
  }

  return (
    <AppShell>
      <Content>
        <Item>
          <Input
            placeholder="Enter new item .."
            autoFocus
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
