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
    <Content>
      <View style={{ flex: 1 }}>
        <List
          dataArray={props.listData}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => (
            <ListItem
              onPress={() => {
                NavigationService.navigate('ListDetailScreen', { title: item.title })
              }}
            >
              <Body>
                <Text>{item.title}</Text>
                <Text note numberOfLines={1}>
                  {item.desc}
                </Text>
              </Body>
              <Right>
                {!isLoading ? (
                  <Button transparent onPress={() => removeList(item.key)}>
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
    </Content>
  )
}

export default ListOfLists
