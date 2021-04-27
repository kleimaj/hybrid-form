import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Input from './components/Input';

export default function App() {
  const [res, setRes] = useState({
    'Date Question': Date.now(),
    'New Address': '',
  });
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text>Hybrid</Text>
        <Input
          label={'New Address'}
          value={res['New Address']}
          onChangeValue={(value) => console.log(value)}
          keyboardType={'default'}
        />
      </View>
    </TouchableWithoutFeedback>
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
