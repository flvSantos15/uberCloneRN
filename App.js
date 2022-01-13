import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import HomeScreen from './screens/HomeScreem';
import { store } from './store';

export default function App() {
  return (
    <Provider store={store}>
      <View>
        <HomeScreen/>
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d6d6d6',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
