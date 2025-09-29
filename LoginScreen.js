import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

export default function LoginScreen({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const submit = () => {
    if (!email.includes('@') || password.length < 6) {
      setError('Invalid credentials');
      return;
    }
    setError('');
    onLogin?.({ email });
  };

  return (
    <View>
      {error ? <Text testID="error">{error}</Text> : null}
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        accessibilityLabel="email-input"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        accessibilityLabel="password-input"
      />
      <Button title="Login" onPress={submit} />
    </View>
  );
}