import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Image } from 'react-native-elements';

export default function Señalamientos() {
    return (
<View style={{ top:40, flex:1, flexDirection:"column", alignItems:"center", }}>

    <Image
  source={ require('../assets/preventivas/Curva.png')}
  style={{width: 100, height: 100 }}
/>
      <Text>Preventiva</Text>
       <Image
  source={ require('../assets/restrictivas/no_rebasar.png')}
  style={{width: 100, height: 100 }}
/>
      <Text>Restrictiva</Text>
       <Image
  source={ require('../assets/informativa/caseta.png')}
  style={{ width: 100, height: 100 }}
/>
      <Text>Informativa</Text>




    </View>
    );
  }