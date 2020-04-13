import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Body, Button, List, ListItem, Right, Text, View, Content } from 'native-base'
import NavigationService from '../../Services/NavigationService'
import { deleteList } from '../../Stores/Lists/Actions'

const ListOfLists = (props) => {
  const dispatch = useDispatch()
  const { isLoading } = useSelector((state) => state.lists)
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
              NavigationService.navigate('ListDetailScreen', { title: title })
            }}
          >
            <Body>
              <Text>{title}</Text>
              <Text note numberOfLines={1}>
                {desc}
              </Text>
            </Body>
            <Right>
              {!isLoading ? (
                <Button transparent onPress={() => removeList(key)}>
                  <Text>Delete</Text>
                </Button>
              ) : (
                <Spinner />
              )}
            </Right>
          </ListItem>
        )}
      />
      <List />
    </View>
  )
}

export default ListOfLists
