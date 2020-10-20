import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import ForgotPs from './screens/ForgotPs';
import HomeScreen from './screens/HomeScreen';

import { AuthContext } from './components/context';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {

  createHomeStack = () =>
  <Stack.Navigator>
    <Stack.Screen name="Login" component={ LoginScreen } />
    <Stack.Screen name="SignUp" component={ SignUpScreen } />
  </Stack.Navigator>


  const [isLoading, setIsLoading] = React.useState(false);
  const [userToken, setUserToken] = React.useState(null);

  const authContext = React.useMemo(() => ({
    signIn: () => {
      setUserToken('hi');
      setIsLoading(false);
    },
    signOut: () => {
      setUserToken(null);
      setIsLoading(false);
    },
    signUp: () => {
      setUserToken('hi');
      setIsLoading(false);
    },
  }));
/*
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
*/
  if ( isLoading ) {
    return(
      <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    /*<LoginScreen />*/
    <AuthContext.Provider value={ authContext }>
      <NavigationContainer>
        { userToken != null ? (
          <HomeScreen />
        ) :
          <Stack.Navigator>
            <Stack.Screen name="Login" component={ LoginScreen } options={{ headerShown: false }} />
            <Stack.Screen name="SignUp" component={ SignUpScreen } options={{ headerShown: false }} />
            <Stack.Screen name="Forgot" component={ ForgotPs } options={{ headerShown: false }} />
            <Stack.Screen name="BevoEats" component={ HomeScreen } options={{ headerShown: false }} />
        </Stack.Navigator>
        }
      </NavigationContainer>
    </AuthContext.Provider>
    
  );
}

export default App;

const styles = StyleSheet.create({

});