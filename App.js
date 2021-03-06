import * as React from 'react';

import { View, Text, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

import ProductList from './src/product/ProductList';

//import Click from './Click';




function HomeScreen({ navigation }) {

  return (

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <Text>Home Screen</Text>

      <Button

        title="Go to Details"

        onPress={() => navigation.navigate('Details')}

      />
      <Button

title="Go to ya"

onPress={() => navigation.navigate('ya')}

/>

    </View>

  );

}
function DetailsScreen({ navigation }) {

  return (

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <Text>Details Screen</Text>

      <Button

      title="Go to Home"

      onPress={() => navigation.navigate('Home')}

    />

    </View>

  );

}
function yaScreen({ navigation }) {

  return (

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <Text>hi Screen</Text>

      <Button

      title="Go to home"

      onPress={() => navigation.navigate('home')}

    />

    </View>

  );

}




const Stack = createStackNavigator();



export default function App() {

  return (

    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen name="Home" component={HomeScreen} />

        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="ya" component={yaScreen} />
      </Stack.Navigator>

    </NavigationContainer>

  );

}