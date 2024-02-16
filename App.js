import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Bodysection from './components/Bodysection';
export default function App() {
  return (
    <View style={styles.container}>
      <Text>My First Mobile Application</Text>
      <Text>I Am Adeline Faye C. Lompon</Text>
      <Text>A Mobile Developer</Text> 
      <Bodysection/>
    </View>
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
