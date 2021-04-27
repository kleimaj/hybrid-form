import React, { Dispatch, SetStateAction } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

type KeyboardTypes =
  | 'default'
  | 'number-pad'
  | 'decimal-pad'
  | 'numeric'
  | 'email-address'
  | 'phone-pad';

// https://stackoverflow.com/questions/56028635/passing-usestate-as-props-in-typescript

type InputProps = {
  label: string;
  keyboardType?: KeyboardTypes;
  value: string;
  onChangeValue?: Dispatch<SetStateAction<string>>;
};

export default function Input({
  label,
  keyboardType,
  value,
  onChangeValue,
}: InputProps) {
  return (
    <View style={styles.container}>
      <Text>{label}</Text>
      <TextInput
        onChangeText={onChangeValue}
        value={value}
        keyboardType={keyboardType}
      />
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
