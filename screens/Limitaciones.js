import * as React from 'react';
import { ImageBackground, Text, View, StyleSheet, Image } from 'react-native';

export default function Limitaciones() {
    return (
      <View style={styles.container}>
      <ImageBackground source={require('../assets/limitaciones.jpg')} resizeMode="cover" style={styles.image}>
        <View style={styles.Card}>
          <Text> Si ves que el agente de tránsito te graba en un reten, el puede hacerlo, el codigo de tránsito establece que las ayudas tecnológicas.</Text>
        </View>

        <View style={styles.Card}>
          <Text> Sus funciones de un agente de transito son regulatorias y preventivas, deben de respetar a las personas, velar por el cumplimiento de la ley y colaborar en casos de incidentes en las vias, nunca usando el abuso de la autoridad.</Text>
        </View>

        <View style={styles.Card}>
          <Text> Los agentes de transito te pueden pedir en retenes, licencia de conducir, tarjeta de propiedad poliza SOAT y cedula de ciudadania. </Text>
        </View>

        <View style={styles.Card}>
          <Text> El policia de transito puede inmovilizar tu vehiculo en los siguientes casos. </Text>
        </View>

        <View style={styles.Card}>
          <Text> Positivo en prueba de alcoholimetro.</Text>
        </View>

        <View style={styles.Card}>
          <Text> Licencia de conducir alterada.</Text>
        </View>

        <View style={styles.Card}>
          <Text> Falta de licencia de conducir.</Text>
        </View>

        <View style={styles.Card}>
          <Text>Remolcar otro vehiculo.</Text>
        </View>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  Card: {
    backgroundColor: '#D3D3D3',
    padding: 25,
    marginVertical: 10,
    marginHorizontal: 25,
    borderRadius: 15,
    borderColor: 'black',
    borderWidth: 2,
  },
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  }
});