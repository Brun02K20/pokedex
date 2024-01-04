import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Navigation } from './src/navigation/Navigation.js'; // importo el sistema de navegacion

export default function App() {
  return (
    // envuelvo toda la app con el Navigation contaioner para que se pueda navegar por toda la app
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
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
