import * as React from 'react';
import { ImageBackground, View, StyleSheet, Image, ScrollView } from 'react-native';
import { Text, LinearProgress } from 'react-native-elements';
export default function Consejos() {
  return (
    <ScrollView>
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

          <View style={styles.Card}>
            <Text h4 style={{textAlign: 'center'}}>¿Qué hacer si un policia de transito te detiene?</Text>
            <LinearProgress color="green" />
            <View style={{ flexDirection: "row", marginVertical: 3 }}>
              <Text style={{ fontStyle: 'italic' }}>1.-</Text>
              <Text style={{ flex: 1, paddingLeft: 5 }}>Para el vehículo en un lugar seguro lo más pronto posible.</Text>
            </View>
            <View style={{ flexDirection: "row", marginVertical: 3 }}>
              <Text style={{ fontStyle: 'italic' }}>2.-</Text>
              <Text style={{ flex: 1, paddingLeft: 5 }}>Para el vehículo en un lugar seguro lo más pronto posible.</Text>
            </View>
            <View style={{ flexDirection: "row", marginVertical: 3 }}>
              <Text style={{ fontStyle: 'italic' }}>3.-</Text>
              <Text style={{ flex: 1, paddingLeft: 5 }}>Para el vehículo en un lugar seguro lo más pronto posible.</Text>
            </View>
            <View style={{ flexDirection: "row", marginVertical: 3 }}>
              <Text style={{ fontStyle: 'italic' }}>4.-</Text>
              <Text style={{ flex: 1, paddingLeft: 5 }}>Para el vehículo en un lugar seguro lo más pronto posible.</Text>
            </View>
            <LinearProgress color="green" />
          </View>

          <View style={styles.Card}>
            <Text h3 style={{textAlign: 'center', marginBottom:5}}>Tienes derechos cuando tránsito te detiene.</Text>
            <Text h4 style={{textAlign: 'center'}}>¿Sabes cuales son?</Text>
            <LinearProgress color="yellow" />
            <View style={{ flexDirection: "row", marginVertical: 3 }}>
              <Text style={{ fontStyle: 'italic' }}>{'\u2022'}</Text>
              <Text style={{ flex: 1, paddingLeft: 5 }}>Si un policia o agente de inmigración te pide registrar tu vehículo sin una orden de cateo puedes negarte, sin embargo si te detienen en un reten si pueden hacerlo sin tu permiso</Text>
            </View>
            <View style={{ flexDirection: "row", marginVertical: 3 }}>
              <Text style={{ fontStyle: 'italic' }}>{'\u2022'}</Text>
              <Text style={{ flex: 1, paddingLeft: 5 }}>Tanto los conductores como los pasajeros tienen derecho de permanecer en silencio.</Text>
            </View>
            <View style={{ flexDirection: "row", marginVertical: 3 }}>
              <Text style={{ fontStyle: 'italic' }}>{'\u2022'}</Text>
              <Text style={{ flex: 1, paddingLeft: 5 }}>Si tu eres un pasajero puedes preguntar si eres libre de irte y lo puedes hacer.</Text>
            </View>
            <View style={{ flexDirection: "row", marginVertical: 3 }}>
              <Text style={{ fontStyle: 'italic' }}>{'\u2022'}</Text>
              <Text style={{ flex: 1, paddingLeft: 5 }}>Para el vehículo en un lugar seguro lo más pronto posible.</Text>
            </View>
            <LinearProgress color="yellow" />
          </View>

        </ImageBackground>
      </View>
    </ScrollView>
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