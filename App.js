import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigation from './navigation/BottomTabNavigation';
import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashSreen from 'expo-splash-screen';
import { useCallback } from 'react';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    regular: require("./assets/fonts/Poppins-Regular.ttf"),
    light: require("./assets/fonts/Poppins-Light.ttf"),
    bold: require("./assets/fonts/Poppins-Bold.ttf"),
    medium: require("./assets/fonts/Poppins-Medium.ttf"),
    extrabold: require("./assets/fonts/Poppins-ExtraBold.ttf"),
    semibold: require("./assets/fonts/Poppins-SemiBold.ttf")
  })

  const onLayoutRootView = useCallback(async() => {

    if(fontsLoaded) {
      await SplashSreen.hideAsync();
    }
  }, [fontsLoaded] );

  if(!fontsLoaded) {
    return null;
  }




  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Bottom Navigation' component={BottomTabNavigation} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontFamily: "semibold",
    fontSize: 20,
  }
});
