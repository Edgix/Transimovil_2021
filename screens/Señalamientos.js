import * as React from 'react';
import { ImageBackground, Text, View, StyleSheet, Image, ScrollView } from 'react-native';


export default function Señalamientos() {
  return (
    <ScrollView >
      <ImageBackground source={require('../assets/señalfondo.jpg')} resizeMode="cover" style={styles.image}>
        <View style={{ top: 40, flex: 1, flexDirection: "column", alignItems: "center", }}>
          <Text h2>Preventivas</Text>
          <Image
            source={require('../assets/preventivas/Bifurcacion.png')}
            style={{ width: 100, height: 100 }}
          />
          <Text>Bifurcacion</Text>
          <Image
            source={require('../assets/preventivas/Camino_sinuoso.png')}
            style={{ width: 100, height: 100 }}
          />
          <Text>Camino sinuoso</Text>
          <Image
            source={require('../assets/preventivas/Contracurva.png')}
            style={{ width: 100, height: 100 }}
          />
          <Text>contracurva</Text>
          <Image
            source={require('../assets/preventivas/Cruce.png')}
            style={{ width: 100, height: 100 }}
          />
          <Text>Cruce</Text>
          <Image
            source={require('../assets/preventivas/Curva.png')}
            style={{ width: 100, height: 100 }}
          />
          <Text>Curva</Text>
          <Image
            source={require('../assets/preventivas/Curva_cerrada.png')}
            style={{ width: 100, height: 100 }}
          />
          <Text>Curva cerrada</Text>
          <Image
            source={require('../assets/preventivas/Curva_sinuosa.png')}
            style={{ width: 100, height: 100 }}
          />
          <Text>Curva sinuosa</Text>
          <Image
            source={require('../assets/preventivas/doble_circulacion.png')}
            style={{ width: 100, height: 100 }}
          />
          <Text>Doble circulacion</Text>


          <Text h2>Restrictivas</Text>
          <Image
            source={require('../assets/restrictivas/altura_restringida.png')}
            style={{ width: 100, height: 100 }}
          />
          <Text>Altura restringida</Text>
          <Image
            source={require('../assets/restrictivas/altura_restringida.png')}
            style={{ width: 100, height: 100 }}
          />
          <Text>Camino sinuoso</Text>
          <Image
            source={require('../assets/restrictivas/ceda_paso.png')}
            style={{ width: 100, height: 100 }}
          />
          <Text>Ceda el paso</Text>
          <Image
            source={require('../assets/restrictivas/circulación.png')}
            style={{ width: 100, height: 100 }}
          />
          <Text>Circulación</Text>
          <Image
            source={require('../assets/restrictivas/conservar_derecha.png')}
            style={{ width: 100, height: 100 }}
          />
          <Text>Conservar derecha</Text>
          <Image
            source={require('../assets/restrictivas/inspeccion.png')}
            style={{ width: 100, height: 100 }}
          />
          <Text>Inspeccion</Text>
          <Image
            source={require('../assets/restrictivas/no_rebasar.png')}
            style={{ width: 100, height: 100 }}
          />
          <Text>No rebasar</Text>
          <Image
            source={require('../assets/restrictivas/retorno_prohibido.png')}
            style={{ width: 100, height: 100 }}
          />
          <Text>Retorno prohibido</Text>
          <Image
            source={require('../assets/restrictivas/velocidad_maxima.png')}
            style={{ width: 100, height: 100 }}
          />
          <Text>Velocidad maxima</Text>

          <Text h2>Informativas</Text>
          <Image
            source={require('../assets/informativa/auxilios.jpg')}
            style={{ width: 100, height: 100 }}
          />
          <Text>Auxilios</Text>
          <Image
            source={require('../assets/informativa/caseta.png')}
            style={{ width: 100, height: 100 }}
          />
          <Text>Caseta</Text>
          <Image
            source={require('../assets/informativa/correos.jpg')}
            style={{ width: 100, height: 100 }}
          />
          <Text>Correos</Text>
          <Image
            source={require('../assets/informativa/hospedaje.png')}
            style={{ width: 100, height: 100 }}
          />
          <Text>Hospedaje</Text>
          <Image
            source={require('../assets/informativa/playa.png')}
            style={{ width: 100, height: 100 }}
          />
          <Text>Playa</Text>
          <Image
            source={require('../assets/informativa/natacion.png')}
            style={{ width: 100, height: 100 }}
          />
          <Text>Natación</Text>
          <Image
            source={require('../assets/informativa/natacion.png')}
            style={{ width: 100, height: 100 }}
          />
          <Text>No rebasar</Text>
          <Image
            source={require('../assets/informativa/taller.png')}
            style={{ width: 100, height: 100 }}
          />
          <Text>Taller</Text>
          <Image
            source={require('../assets/informativa/Restaurantes.png')}
            style={{ width: 100, height: 100 }}
          />
          <Text>Restaurantes</Text>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}
const styles = StyleSheet.create({

  image: {
    flex: 1,
    justifyContent: "center"
  }
});