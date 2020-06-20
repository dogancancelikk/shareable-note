import React, { useEffect } from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import { auth } from '../../Config/db'
import NavigationService from '../../Services/NavigationService'

const Loading = () => {
  const onAuthStateChanged = (user) => {
    NavigationService.navigateAndReset(user ? 'ListsScreen' : 'Login')
  }
  useEffect(() => {
    const subscriber = auth.onAuthStateChanged(onAuthStateChanged)
    return subscriber
  }, [])

  return (
    <View style={styles.container}>
      <Text>Loading</Text>
      <ActivityIndicator size="large" />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
})

export default Loading
