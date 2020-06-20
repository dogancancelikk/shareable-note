import React from 'react'
import { Container, Title } from 'native-base'

import { Header, Button, Body, Left, Icon, Right } from 'native-base'
import { StyleSheet, View } from 'react-native'
import Colors from '../../Theme/Colors'
import { withNavigation } from 'react-navigation'
import { auth } from '../../Config/db'
import NavigationService from '../../Services/NavigationService'

const AppShell = (props) => {
  const logout = () => {
    auth.signOut()
    NavigationService.navigateAndReset('Login')
  }
  return (
    <Container>
      <Header style={styles.header} androidStatusBarColor="#F8F8F8" iosBarStyle="dark-content">
        <Left style={styles.leftItem}>
          {!props.navigation.isFirstRouteInParent() ? (
            <Button iconLeft transparent onPress={() => props.navigation?.goBack()}>
              <Icon style={styles.icon} name="arrow-left" type="MaterialCommunityIcons" />
            </Button>
          ) : (
            <View></View>
          )}
        </Left>
        <Body style={styles.centerItem}>
          <Title style={styles.headerLogo}>{props.navigation?.state?.params?.title ? props.navigation.state.params.title : ''} </Title>
        </Body>
        <Right style={styles.rightItem}>
          {auth.currentUser ? (
            <Button iconRight transparent onPress={logout}>
              <Icon style={styles.icon} name="logout" type="MaterialCommunityIcons" />
            </Button>
          ) : (
            <View></View>
          )}
        </Right>
      </Header>
      {props.children}
    </Container>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#F8F8F8',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: 'transparent',
    alignItems: 'center',
  },
  leftItem: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  rightItem: {
    flex: 1.5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  centerItem: {
    flex: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  headerLogo: {
    alignItems: 'center',
  },
  icon: {
    color: Colors.primary,
    fontSize: 25,
  },
})

export default withNavigation(AppShell)
