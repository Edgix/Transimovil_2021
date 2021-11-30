import * as React from 'react';
import { ImageBackground, Text, View, StyleSheet, Image } from 'react-native';

export default function Reglamento() {
    return (
      <View style={styles.container}>
      <ImageBackground source={require('../assets/reglamentofondo.jpg')} resizeMode="cover" style={styles.image}>
      <View style={styles.Card}>
          <Text h3> Placas y tarjetas</Text>
        </View>
        <View style={styles.Card}>
          <Text> Articulo 29 Las placas de todo tipo de vehiculo se colocaran en la parte posterior y anterior del mismo, siendo estas visibles.</Text>
        </View>

        <View style={styles.Card}>
          <Text>Articulo 31 Si el conductor pierde una placa o licencia, reportar inmediatamente a transito y tramitar su reposición.</Text>
        </View>

        <View style={styles.Card}>
          <Text h3> Condición de vehiculos</Text>
        </View>
        <View style={styles.Card}>
          <Text> Articulo 37 Maximos de camiones de carga, 8000 kg, 13 mts de largo y 3.5 mts de ancho </Text>
        </View>

        <View style={styles.Card}>
          <Text> Articulo 43 En caso de los vehiculos con pasajeros esta prohibido subir animales, bultos, etc. por el bien de los pasajeros. </Text>
        </View>

        <View style={styles.Card}>
          <Text> Artículo 47 Los vehiculos de carga que transporten materiales que puedan regarse buscaran la manera de que esto no suceda por el bien de los demas automovilistas y evitar accidentes.</Text>
        </View>

        <View style={styles.Card}>
          <Text> Artículo 53 Los vehículos de tracción animal contará con ruedas enllantadas.</Text>
        </View>

        <View style={styles.Card}>
          <Text h3> Conductores</Text>
        </View>

        <View style={styles.Card}>
          <Text>Artículo 60 Ninguna persona podra conducir un vehiculo sin su licencia de conducir expedida por transito.</Text>
        </View>

        <View style={styles.Card}>
          <Text>Artículo 64 Para la conducción de vehiculos grandes o de carga su licencia debera de tener antigüedad al menos de 2 años.</Text>
        </View>

        <View style={styles.Card}>
          <Text>Artículo 65 Los conductores de maquinaria movil tambien deberan de contar con licencia de manejo.</Text>
        </View>

        <View style={styles.Card}>
          <Text h3> Circulación de vehiculos</Text>
        </View>

        <View style={styles.Card}>
          <Text>Artículo 100 Ninguna persona conducirá vehículos de motor sin llevar firmemente, con ambas manos, el control de dirección</Text>
        </View>

        <View style={styles.Card}>
          <Text>Artículo 102 Queda prohibido a los automovilistas interrumpir desfiles.</Text>
        </View>

        <View style={styles.Card}>
          <Text>Artículo 104 Solamente podrá darse vuelta en ''U''en calles o avenidas con camellón central, cuando no exista señal prohibitiva.</Text>
        </View>

        <View style={styles.Card}>
          <Text>Artículo 105 Para transitar en torno a una rotondao glorieta, los vehículos deberán ser conducidos dejando a la izquierda el centro de la misma.</Text>
        </View>

        <View style={styles.Card}>
          <Text>Artículo 108 Los vehículos no podrán ser estacionados fuera de los lugares permitidos .</Text>
        </View>

        <View style={styles.Card}>
          <Text>Artículo 110 En las vías públicas únicamente podrán efectuarse reparaciones que se consideren motivadas por casos de emergencia o de fuerza mayor.</Text>
        </View>
        <View style={styles.Card}>
          <Text>Artículo 111 Se prohíbe terminantemente dejar abandonado o detener en la vía pública por más del tiempo necesario cualquier vehículo, con el motor en movimiento. </Text>
        </View>
        <View style={styles.Card}>
          <Text>Artículo 123 Cuando un vehículo sea conducido a velocidad menor de la normal, deberá circular siempre por su extrema derecha.</Text>
        </View>

        <View style={styles.Card}>
          <Text h3> Carga y descarga</Text>
        </View>

        <View style={styles.Card}>
          <Text>Artículo 207 Durante las maniobras de carga y descarga, no deberá impedirse la circulación de peatones y vehículos, debiendo usarse el equipo adecuado para que tales maniobras se lleven a cabo en condiciones satisfactorias.</Text>
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