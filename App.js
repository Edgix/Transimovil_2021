import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Consejos from './screens/Consejos'
import Limitaciones from './screens/Limitaciones'
import Multas from './screens/Multas'
import Reglamento from './screens/Reglamento'
import Señalamientos from './screens/Señalamientos'
function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed Screen</Text>
    </View>
  );
}

function Article() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Article Screen</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          width: 300,
        },
      }}
    >
      <Drawer.Screen name="Transimovil" component={Feed}/>
      <Drawer.Screen name="Reglamento de Tránsito" component={Reglamento} />
      <Drawer.Screen name="Costos de Multas" component={Multas} />
      <Drawer.Screen name="Consejos" component={Consejos} />
      <Drawer.Screen name="Limitaciones de la Policía" component={Limitaciones} />
      <Drawer.Screen name="Señalamientos" component={Señalamientos} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  Navigator: {
   fontSize:40
  },
  Text: {
    color: 'blue'
  }
});


export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
