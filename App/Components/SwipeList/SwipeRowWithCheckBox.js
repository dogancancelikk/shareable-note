import React from 'react'
import { Animated, StyleSheet, Text, TouchableHighlight } from 'react-native'
import { CheckBox, ListItem } from 'native-base'

const SwipeRowWithCheckBox = ({ title, isChecked, onPressMethod }) => {
  return (
    <Animated.View>
      <TouchableHighlight style={styles.rowFront} underlayColor={'#AAA'}>
        <ListItem>
          <CheckBox checked={isChecked} onPress={() => onPressMethod()} />
          <Text style={styles.rowTextStyle}>{title}</Text>
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

export default SwipeRowWithCheckBox
