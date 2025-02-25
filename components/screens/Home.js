import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const agendamentos = [
  {
    id: "1",
    tipoAtendimento: "Consulta Individual",
    nome: "João Silva",
    conjuge: "Maria Silva",
    mae: "Ana Silva",
    pai: "Carlos Silva",
    idade: 30,
    nascimento: "1993-05-15",
    cpf: "123.456.789-00",
    sexo: "Masculino",
    telefone: "(11) 1234-5678",
    celular: "(11) 98765-4321",
    disponibilidade: "Segunda, Quarta | Manhã, Tarde",
  },
  {
    id: "2",
    tipoAtendimento: "Terapia de Casal",
    nome: "Ana Costa",
    conjuge: "Pedro Costa",
    mae: "Mariana Costa",
    pai: "José Costa",
    idade: 28,
    nascimento: "1995-08-20",
    cpf: "987.654.321-00",
    sexo: "Feminino",
    telefone: "(11) 8765-4321",
    celular: "(11) 99876-5432",
    disponibilidade: "Terça, Quinta | Tarde",
  },
  
];

export default function AgendamentosScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agendamentos</Text>
      <FlatList
        data={agendamentos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.atendimento}>{item.tipoAtendimento}</Text>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.detalhes}>Idade: {item.idade} anos</Text>
            <Text style={styles.detalhes}>Nascimento: {item.nascimento}</Text>
            <Text style={styles.detalhes}>Disponibilidade: {item.disponibilidade}</Text>
            <View style={styles.actions}>
              <TouchableOpacity style={styles.btnEdit}>
                <FontAwesome name="edit" size={20} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnDelete}>
                <FontAwesome name="trash" size={20} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fefbf5",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: '#403454',
    textAlign: "center",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  atendimento: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fb7d45",
  },
  nome: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 5,
  },
  detalhes: {
    fontSize: 14,
    color: "#666",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 10,
  },
  btnEdit: {
    backgroundColor: "#fb7d45",
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  btnDelete: {
    backgroundColor: "#dc3545",
    padding: 10,
    borderRadius: 5,
  },
});
