import React from 'react'
import { Animated, StyleSheet, TouchableHighlight } from 'react-native'
import { ListItem, Text } from 'native-base'

const SwipeRow = ({ text, desc, onPress }) => {
  return (
    <Animated.View>
      <TouchableHighlight style={styles.rowFront} underlayColor={'#AAA'}>
        <ListItem onPress={onPress}>
          <Text>{text}</Text>
          <Text note numberOfLines={1} style={styles.rowTextStyle}>
            {desc}
          </Text>
        </ListItem>
      </TouchableHighlight>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  rowFront: {
    backgroundColor: 'white',
    height: 50,
  },
  rowTextStyle: {
    paddingLeft: 15,
  },
})

export default SwipeRow
