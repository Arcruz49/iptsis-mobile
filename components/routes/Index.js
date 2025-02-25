import {NavigationContainer} from '@react-navigation/native'
import TabRoutes from './TabRoutes'
import DrawerRoutes from './DrawerRoutes'

export default function Routes(){
  return(
    <NavigationContainer>
      <TabRoutes/>
    </NavigationContainer>
    
  );
}