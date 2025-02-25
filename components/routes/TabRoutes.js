import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feed from '../screens/Home';
import New from '../screens/Settings';
import Profile from '../screens/Profile';
import { Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#403454', // Cor do fundo do header
        },
        headerTintColor: '#fff', // Cor do texto do header
        tabBarStyle: {
          backgroundColor: '#403454', // Cor do fundo da barra inferior
          borderTopWidth: 0, // Remove a linha superior da barra de navegação
        },
        tabBarActiveTintColor: '#fb7d45', // Cor do ícone e texto ativo
        tabBarInactiveTintColor: '#ccc', // Cor do ícone e texto inativo
      }}
    >
      <Tab.Screen
        name="Configurações"
        component={New}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="settings" color={color} size={size} />,
          tabBarLabel: 'Configurações',
        }}
      />

      <Tab.Screen
        name="Início"
        component={Feed}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="home" color={color} size={size} />,
          tabBarLabel: 'Início',
        }}
      />

      <Tab.Screen
        name="Perfil"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="user" color={color} size={size} />,
          tabBarLabel: 'Usuário',
        }}
      />
    </Tab.Navigator>
  );
}
