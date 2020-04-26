import React from 'react'
import { Animated, Dimensions, View } from 'react-native'
import { SwipeListView } from 'react-native-swipe-list-view'
import SwipeRowHiddenItem from '../../Components/SwipeList/SwipeRowHiddenItem'

const SwipeList = ({ data, renderItem, deleteAction }) => {
  const onSwipeValueChange = ({ key, value }) => {
    if (!this.animationIsRunning && value < -Dimensions.get('window').width) {
      this.animationIsRunning = true
      Animated.timing(new Animated.Value(1), { toValue: 0, duration: 200 }).start(() => {
        deleteAction(key)
        this.animationIsRunning = false
      })
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <SwipeListView
        disableRightSwipe
        data={data}
        keyExtractor={(item) => item.key}
        renderItem={renderItem}
        renderHiddenItem={() => <SwipeRowHiddenItem />}
        rightOpenValue={-Dimensions.get('window').width}
        onSwipeValueChange={onSwipeValueChange}
        useNativeDriver={false}
      />
    </View>
  )
}

export default SwipeList
