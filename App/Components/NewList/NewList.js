import { Content, Input, Item, Button } from 'native-base'
import React, { useState } from 'react'
import ListService from '../../Services/ListService'
import style from './NewListStyle'
import { Text } from 'native-base'
const NewList = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  return (
    <Content>
      <Item>
        <Input placeholder="Enter List Title" value={title} onChangeText={(inputValue) => setTitle(inputValue)} />
      </Item>
      <Item>
        <Input placeholder="Enter List Description" value={description} onChangeText={(inputValue) => setDescription(inputValue)} />
      </Item>
      <Button
        style={style.button}
        onPress={() => {
          console.log(title + ' ' + description)
          ListService.createList(title, description)
        }}
      >
        <Text>Create New List</Text>
      </Button>
    </Content>
  )
}

export default NewList
