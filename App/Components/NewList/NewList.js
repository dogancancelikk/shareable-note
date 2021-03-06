import { Content, Input, Item, Button } from 'native-base'
import React, { useState } from 'react'
import style from './NewListStyle'
import { Text } from 'native-base'
import { useDispatch } from 'react-redux'
import { createList } from '../../Stores/Lists/Actions'

const NewList = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const dispatch = useDispatch()
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
          dispatch(createList(title, description))
        }}
      >
        <Text>Create New List</Text>
      </Button>
    </Content>
  )
}

export default NewList
