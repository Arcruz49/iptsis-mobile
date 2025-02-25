import { SafeAreaView, StyleSheet } from 'react-native';
import Routes from './components/routes/Index';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Routes />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: "#fefbf5", 
  },
});