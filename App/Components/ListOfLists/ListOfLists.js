import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteList } from '../../Stores/Lists/Actions'
import NavigationService from '../../Services/NavigationService'
import SwipeList from '../../Components/SwipeList/SwipeList'
import SwipeRow from '../../Components/SwipeList/SwipeRow'

const ListOfLists = ({ listData }) => {
  const dispatch = useDispatch()

  const deleteAction = (id) => dispatch(deleteList(id))

  const renderItem = ({ item }) => (
    <SwipeRow
      text={item.title}
      desc={item.desc}
      onPress={() => {
        NavigationService.navigate('ListDetailScreen', { key: item.key, title: item.title })
      }}
    />
  )

  return <SwipeList data={listData} renderItem={renderItem} deleteAction={deleteAction} />
}

export default ListOfLists
