import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Image } from 'react-native-elements';
import { Text } from 'react-native-elements';

export default function Señalamientos() {
    return (
<View style={{ top:40, flex:1, flexDirection:"column", alignItems:"center", }}>
    <Text h2>Preventivas</Text>
    <Image
  source={ require('../assets/preventivas/bifurcacion.png')}
  style={{width: 100, height: 100 }}
/>
      <Text>Bifurcacion</Text>
       <Image
  source={ require('../assets/preventivas/camino_sinuoso.png')}
  style={{width: 100, height: 100 }}
/>
      <Text>Camino sinuoso</Text>
       <Image
  source={ require('../assets/preventivas/contracurva.png')}
  style={{ width: 100, height: 100 }}
/>
      <Text>contracurva</Text>
       <Image
  source={ require('../assets/preventivas/cruce.png')}
  style={{width: 100, height: 100 }}
/>
      <Text>Cruce</Text>
       <Image
  source={ require('../assets/preventivas/curva.png')}
  style={{width: 100, height: 100 }}
/>
      <Text>Curva</Text>
       <Image
  source={ require('../assets/preventivas/curva_cerrada.png')}
  style={{ width: 100, height: 100 }}
/>
      <Text>Curva cerrada</Text>
       <Image
  source={ require('../assets/preventivas/curva_sinuosa.png')}
  style={{width: 100, height: 100 }}
/>
      <Text>Curva sinuosa</Text>
       <Image
  source={ require('../assets/preventivas/doble_circulacion')}
  style={{width: 100, height: 100 }}
/>
      <Text>Doble circulacion</Text>
       

       <Text h2>Restrictivas</Text>
       <Image
  source={ require('../assets/restrictivas/altura_restringida')}
  style={{width: 100, height: 100 }}
/>
      <Text>Altura restringida</Text>
       <Image
  source={ require('../assets/restrictivas/')}
  style={{width: 100, height: 100 }}
/>
      <Text>Camino sinuoso</Text>
       <Image
  source={ require('../assets/restrictivas/ceda_paso')}
  style={{ width: 100, height: 100 }}
/>
      <Text>Ceda el paso</Text>
       <Image
  source={ require('../assets/restrictivas/circulación')}
  style={{width: 100, height: 100 }}
/>
      <Text>Circulación</Text>
       <Image
  source={ require('../assets/restrictivas/conservar_derecha')}
  style={{width: 100, height: 100 }}
/>
      <Text>Conservar derecha</Text>
       <Image
  source={ require('../assets/restrictivas/inspeccion')}
  style={{ width: 100, height: 100 }}
/>
      <Text>Inspeccion</Text>
       <Image
  source={ require('../assets/restrictivas/no_rebasar')}
  style={{width: 100, height: 100 }}
/>
      <Text>No rebasar</Text>
       <Image
  source={ require('../assets/restrictivas/retorno_prohibido')}
  style={{width: 100, height: 100 }}
/>
      <Text>Retorno prohibido</Text>
       <Image
  source={ require('../assets/restrictivas/velocidad_maxima')}
  style={{ width: 100, height: 100 }}
/>
      <Text>Velocidad maxima</Text>

        <Text h2>Informativas</Text>
       <Image
  source={ require('../assets/informativa/auxilios')}
  style={{width: 100, height: 100 }}
/>
      <Text>Auxilios</Text>
       <Image
  source={ require('../assets/informativa/caseta')}
  style={{width: 100, height: 100 }}
/>
      <Text>Caseta</Text>
       <Image
  source={ require('../assets/informativa/correos')}
  style={{ width: 100, height: 100 }}
/>
      <Text>Correos</Text>
       <Image
  source={ require('../assets/informativa/hospedaje')}
  style={{width: 100, height: 100 }}
/>
      <Text>Hospedaje</Text>
       <Image
  source={ require('../assets/informativa/playa')}
  style={{width: 100, height: 100 }}
/>
      <Text>Playa</Text>
       <Image
  source={ require('../assets/informativa/natacion')}
  style={{ width: 100, height: 100 }}
/>
      <Text>Natación</Text>
       <Image
  source={ require('../assets/informativa/')}
  style={{width: 100, height: 100 }}
/>
      <Text>No rebasar</Text>
       <Image
  source={ require('../assets/informativa/taller')}
  style={{width: 100, height: 100 }}
/>
      <Text>Taller</Text>
       <Image
  source={ require('../assets/informativa/restaurantes')}
  style={{ width: 100, height: 100 }}
/>
      <Text>Restaurantes</Text>




    </View>
    );
  }