import React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Sign from "./pages/account/login/index";
import Login from "./pages/account/login/accountLogin";
import Reset from "./pages/account/login/reset";
import Main from "./pages/account/login/main";
// import ResetPassword from "./pages/account/login/restPassword";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}
// 创建页面栈
const Stack = createStackNavigator();

function Nav() {
  return (
    <NavigationContainer>
      {/* 默认注册界面 */}
      <Stack.Navigator headerMode="none" initialRouteName="Sign">
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Sign" component={Sign} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Reset" component={Reset} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Nav;