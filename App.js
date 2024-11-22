import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import Rough from './components/Rough';
import Camera from './components/Camera';

export default function App() {
  
  return (
    <><View style={styles.container}>
      <StatusBar style="auto" />
      <Rough />
    </View></>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
