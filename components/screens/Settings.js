import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function New() {
  const [email, setEmail] = useState('');
  const [appPassword, setAppPassword] = useState('');

  const handleSave = () => {
    console.log(`E-mail: ${email}, Senha do aplicativo: ${appPassword}`);
    // Aqui você pode adicionar a lógica de salvar as configurações
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configurações de E-mail</Text>

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#aaa"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Senha do Aplicativo"
        placeholderTextColor="#aaa"
        value={appPassword}
        onChangeText={setAppPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefbf5', // Fundo claro
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#403454', // Roxo escuro para destaque
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd', // Adiciona uma borda leve
  },
  button: {
    width: '100%',
    backgroundColor: '#fb7d45', // Laranja vibrante
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
