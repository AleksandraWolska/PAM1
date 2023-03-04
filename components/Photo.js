import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Photo() {
  return (
    <View style={styles.container}>
      <Text>Tu bedzie fota!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: '100px',
    border: '1px solid red'
  },
});
