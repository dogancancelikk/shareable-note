import { Body, Button, List, ListItem, Right, Text, View } from 'native-base'
import NavigationService from '../../Services/NavigationService'
import React from 'react'

const ListOfLists = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <List
        dataArray={props.listData}
        keyExtractor={(item, index) => index.toString()}
        renderRow={({ title, desc }) => (
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
              <Button transparent>
                <Text>View</Text>
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
