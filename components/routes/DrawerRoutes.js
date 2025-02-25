import {createDrawerNavigator} from '@react-navigation/drawer'
import Feed from '../screens/Home';
import New from '../screens/Settings';
import StackRoutes from './StackRoutes';
import Profile from '../screens/Profile';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes(){
  return(
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={Feed}
      />
      <Drawer.Screen
        name="new"
        component={StackRoutes}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
      />
    </Drawer.Navigator>



  )
}