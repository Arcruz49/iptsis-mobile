import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator, TextInput, RefreshControl } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function AgendamentosScreen() {
  const [agendamentos, setAgendamentos] = useState([]);
  const [filteredAgendamentos, setFilteredAgendamentos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    async function fetchAgendamentos() {
      try {
        const response = await fetch("https://iptsisteste.store/app/controllers/ApiController.php?chave=123");
        const json = await response.json();

        if (json.success) {
          setAgendamentos(json.data);
          setFilteredAgendamentos(json.data);
        } else {
          console.error("Erro ao buscar dados:", json.error);
        }
      } catch (error) {
        console.error("Erro na requisição:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchAgendamentos();
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim() === "") {
      setFilteredAgendamentos(agendamentos);
    } else {
      const filtered = agendamentos.filter((item) =>
        item.nomeCompleto.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredAgendamentos(filtered);
    }
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    try {
      const response = await fetch("https://iptsisteste.store/app/controllers/ApiController.php?chave=123");
      const json = await response.json();
      
      if (json.success) {
        setAgendamentos(json.data);
        setFilteredAgendamentos(json.data);
      } else {
        console.error("Erro ao buscar dados:", json.error);
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
    } finally {
      setRefreshing(false);
    }
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
      <Text style={styles.title}>Agendamentos</Text>
      <TextInput
        style={styles.input}
        placeholder="Buscar por nome"
        value={searchQuery}
        onChangeText={handleSearch}
      />
      {filteredAgendamentos.length === 0 ? (
        <Text style={styles.noData}>Nenhum agendamento encontrado.</Text>
      ) : (
        <FlatList
          data={filteredAgendamentos}
          keyExtractor={(item) => item.idInscricao.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.atendimento}>{item.dsServico}</Text>
              <Text style={styles.nome}>{item.nomeCompleto || "Nome não informado"}</Text>
              <Text style={styles.detalhes}>Idade: {item.idade} anos</Text>
              <Text style={styles.detalhes}>Nascimento: {item.dataNascimento}</Text>
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
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
          }
        />
      )}
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
    color: "#403454",
    textAlign: "center",
    marginBottom: 10,
  },
  input: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    borderColor: "#ccc",
    borderWidth: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noData: {
    fontSize: 16,
    textAlign: "center",
    color: "#667",
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
