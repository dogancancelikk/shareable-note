import React from 'react'
import { Text, View } from 'react-native'
import styles from './SplashScreenStyle'
import { Helpers } from 'App/Theme'
import { Image } from 'native-base'

const logo = require('../../Assets/Images/TOM.png')

export default class SplashScreen extends React.Component {
  render() {
    return (
      <View style={[Helpers.fillRowCenter, styles.container]}>
        <View style={[Helpers.center, styles.logo]}>
          {/* You will probably want to insert your logo here */}
          <Image source={logo} style={styles.logo}></Image>
        </View>
      </View>
    )
  }
}
