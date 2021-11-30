import * as React from 'react';
import { ImageBackground, Text, View, StyleSheet, Image } from 'react-native';
export default function Consejos() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/Fondo.jpg')} resizeMode="cover" style={styles.image}>
        <View style={styles.Card}>
          <Text> Llevar siempre tu licencia de conducir. </Text>
        </View>

        <View style={styles.Card}>
          <Text> Portar a la mano tu seguro vehicular. </Text>
        </View>

        <View style={styles.Card}>
          <Text> Revisar que tus placas esten vigentes. </Text>
        </View>

        <View style={styles.Card}>
          <Text> Abrochar tu cinturon de seguridad y pedirle a los pasajeros que lo porten de manera correcta. </Text>
        </View>

        <View style={styles.Card}>
          <Text> Respetar los límites de velocidad.</Text>
        </View>

        <View style={styles.Card}>
          <Text> No uses tu celular mientras el auto esta en movimiento.</Text>
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