import * as React from 'react';
import { View, StyleSheet, ScrollView, Image, ImageBackground } from 'react-native';
import { Text, LinearProgress, Card } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Consejos from './screens/Consejos'
import Limitaciones from './screens/Limitaciones'
import Multas from './screens/Multas'
import Reglamento from './screens/Reglamento'
import Señalamientos from './screens/Señalamientos'
function Feed() {
  return (
    <ScrollView>
      <View>
        <ImageBackground source={require('./assets/principal.jpg')} resizeMode="cover" style={{ flex: 1, justifyContent: "center" }}>
          <View style={{ alignItems: 'center', marginTop: 40 }}>
            <Image
              source={require('./assets/Logo_preview_rev_1.png')}
              style={{ width: 200, height: 200 }}
            />
            <LinearProgress color="magenta"/>
          </View>
        </ImageBackground>
      </View>
      <Card>
        <Card.Title>OBJETIVO</Card.Title>
        <Text style={{ textAlign: 'justify', fontSize: 15 }}>Ayudar a la comunidad vial para conocer los diferentes escenarios legales y éticos,
          organizando los artículos del reglamento de tránsito, señalamientos y limitaciones de
          las autoridades correspondientes.
        </Text>
        <Text style={{ textAlign: 'justify', fontSize: 15 }}>
          Estimando el riesgo de algún incidente automovilisitico o abuso de autoridad por parte
          de policías o agentes de tránsito brindando una guía de tránsito estatal en el Estado
          de Puebla.
        </Text>
      </Card>
    </ScrollView>
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
      <Drawer.Screen name="Transimovil" component={Feed} />
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
    fontSize: 40
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
