import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Button, Content, Form, Input, Text, Item, Label, View } from 'native-base'
import AppShell from '../../Components/AppShell/AppShell'
import { auth } from '../../Config/db'
import NavigationService from '../../Services/NavigationService'

const Login = () => {
  const [showLogin, setShowLogin] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => NavigationService.navigate('MainScreen'))
      .catch((error) => setErrorMessage(error.message))
  }
  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => NavigationService.navigate('MainScreen'))
      .catch((error) => setErrorMessage(error.message))
  }

  const renderLoginButtons = () => {
    return (
      <View>
        <Button block onPress={handleLogin} style={styles.loginButton} disabled={email === '' || password === ''}>
          <Text>Login</Text>
        </Button>
        <Button block transparent onPress={() => setShowLogin(false)}>
          <Text>Don't have an account? Sign Up</Text>
        </Button>
      </View>
    )
  }
  const renderSignUpButtons = () => {
    return (
      <View>
        <Button block onPress={handleSignUp} style={styles.loginButton} disabled={email === '' || password === ''}>
          <Text>Sign Up</Text>
        </Button>
        <Button block transparent onPress={() => setShowLogin(true)}>
          <Text>Already have an account? Login</Text>
        </Button>
      </View>
    )
  }

  return (
    <AppShell title="Sign Up">
      <Content padder>
        <Form style={styles.form}>
          <Item floatingLabel last>
            <Label>Email</Label>
            <Input autoFocus autoCorrect={false} autoCapitalize="none" onChangeText={(email) => setEmail(email)} value={email} />
          </Item>
          <Item floatingLabel last>
            <Label>Password</Label>
            <Input secureTextEntry autoCapitalize="none" onChangeText={(password) => setPassword(password)} value={password} />
          </Item>
          {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
          {showLogin ? renderLoginButtons() : renderSignUpButtons()}
        </Form>
      </Content>
    </AppShell>
  )
}
const styles = StyleSheet.create({
  form: {
    marginTop: 150,
  },
  loginButton: {
    marginTop: 50,
  },
  errorMessage: {
    alignItems: 'center',
    color: 'red',
    marginTop: 25,
  },
})

export default Login
