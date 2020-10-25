import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Alert, Button, StyleSheet, Text, View, Image } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  const [count, setCount] = useState(0) 
  
  const clickButton = () => {
    setCount(count + 1)
    Alert.alert('I have been clicked $(count) times')
  }

  return (
    // <NavigationContainer>
      // <Stack.Navigator>
        <Stack.Screen name="Home">
          {({ navigation }) => (
            <View style={styles.container}>
            <Text style={styles.introduction}>Open up App.js to start working on your app!
            </Text>
            <StatusBar style="auto" />
            <Image style={style.mainImage}
              source={{
                uri:'https://cdn.imgbin.com/9/7/13/imgbin-black-hair-african-american-woman-black-hair-woman-6KEnWrZ42HjC7btDF8CvKp1RC.jpg'
              }} />
              <Button title="Click Me" onPress={() => navigation.navigate('About')} />
            </View>
            )}
        </Stack.Screen>        
    {/* </Stack.Navigator> */}
  {/* </NavigationContainer> */}
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });



