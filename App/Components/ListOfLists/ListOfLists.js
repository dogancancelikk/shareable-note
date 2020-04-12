import { Body, Button, Fab, Icon, List, ListItem, Right, Text, View, Content } from 'native-base'
import NavigationService from '../../Services/NavigationService'
import React, { useState } from 'react'
import { closeNewListForm, openNewListForm } from '../../Stores/Lists/Actions'
import { useDispatch } from 'react-redux'

const ListOfLists = (props) => {
  return (
    <Content>
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
    </Content>
  )
}

export default ListOfLists
