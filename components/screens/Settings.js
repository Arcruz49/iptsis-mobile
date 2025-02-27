import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator, Alert } from 'react-native';

export default function New() {
  const [email, setEmail] = useState('');
  const [appPassword, setAppPassword] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetch('https://iptsisteste.store/app/controllers/GetConfigApiController.php?chave=123')
      .then(response => response.json())
      .then(data => {
        if (data.success && data.data.length > 0) {
          setEmail(data.data[0].email);
          setAppPassword(data.data[0].senhaApp);
        } else {
          Alert.alert('Erro', 'Nenhuma configuração encontrada.');
        }
      })
      .catch(error => {
        Alert.alert('Erro', 'Falha ao buscar os dados da API.');
        console.error(error);
      })
      .finally(() => setLoading(false));
  }, []);

  const handleSave = () => {
    if (!email || !appPassword) {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return;
    }

    setSaving(true);

    fetch('https://iptsisteste.store/app/controllers/PostConfigApiController.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chave: '123', 
        email: email,
        senhaApp: appPassword,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          Alert.alert('Sucesso', 'Configuração salva com sucesso!');
        } else {
          Alert.alert('Erro', data.message || 'Erro ao salvar os dados.');
        }
      })
      .catch(error => {
        Alert.alert('Erro', 'Falha ao salvar os dados.');
        console.error(error);
      })
      .finally(() => setSaving(false));
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#fb7d45" />
      </View>
    );
  }

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
      />

      <TouchableOpacity style={styles.button} onPress={handleSave} disabled={saving}>
        {saving ? <ActivityIndicator color="#fff" /> : <Text style={styles.buttonText}>Salvar</Text>}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefbf5',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#403454',
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
    borderColor: '#ddd',
  },
  button: {
    width: '100%',
    backgroundColor: '#fb7d45',
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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

