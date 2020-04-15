import React from 'react'
import { useDispatch } from 'react-redux'
import { Body, Button, List, ListItem, Right, Text, View } from 'native-base'
import NavigationService from '../../Services/NavigationService'
import { deleteList } from '../../Stores/Lists/Actions'

const ListOfLists = (props) => {
  const dispatch = useDispatch()
  const removeList = (id) => {
    dispatch(deleteList(id))
  }
  return (
    <View style={{ flex: 1 }}>
      <List
        dataArray={props.listData}
        keyExtractor={(item) => item.key}
        renderRow={({ key, title, desc }) => (
          <ListItem
            onPress={() => {
              NavigationService.navigate('ListDetailScreen', { key, title })
            }}
          >
            <Body>
              <Text>{title}</Text>
              <Text note numberOfLines={1}>
                {desc}
              </Text>
            </Body>
            <Right>
              <Button transparent onPress={() => removeList(key)}>
                <Text>Delete</Text>
              </Button>
            </Right>
          </ListItem>
        )}
      />
      <List />
    </View>
  )
}

export default ListOfLists
