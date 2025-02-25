import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Feed from '../screens/Home';
import New from '../screens/Settings';
import Profile from '../screens/Profile';

const Stack = createNativeStackNavigator();

export default function StackRoutes(){
  return(
    <Stack.Navigator>
      <Stack.Screen
        name= "new"
        component= {New}
        options={
          {
            headerShown: false
          }
        }
      />
      <Stack.Screen
        name= "profile"
        component= {Profile}
      />
    </Stack.Navigator>
    
  )
}