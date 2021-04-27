import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

type InputProps = {
  label: string;
};

export default function Input({ label }: InputProps) {
  return (
    <View style={styles.container}>
      <Text>{label}</Text>
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
