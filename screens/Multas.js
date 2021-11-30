import * as React from 'react';
import { View, Image, ScrollView, ImageBackground } from 'react-native';
import { Card, ListItem, Button, Icon, Text } from 'react-native-elements'


const multas = [
  {
    multa: 'Realizar servicio público de transporte sin la auotorización correspondiente.',
    precio: '$2060'
  },
  {
    multa: 'Carecer de autorización especial, los camiones que exceden de la carga y dimensiones que fija el reglamento.',
    precio: '$824'
  },
  {
    multa: 'Carecer del permiso para transporte de carga, los camiones, camionetas y automoviles particulares que hagan este servicio.',
    precio: '$1648'
  },
  {
    multa: 'Carecer de autorización para transportar maquinaria u objetos cuyo peso puedan entorpecer la libre circulación o causar daño al pavimento.',
    precio: '$1236'
  },
  {
    multa: 'Conducir vehículos en estado de ebriedad o bajo el influjo de drogas o enervantes.',
    precio: '$2472'
  },
  {
    multa: 'Conducir vehículos sin anteojos anotados en la licencia de conducir.',
    precio: '$206'
  },
  {
    multa: 'Llevar a su izquierda o entre sus manos alguna persona, bulto o permitir alguna intromisión sobre el control de direción.',
    precio: '$1648'
  },
  {
    multa: 'Transitar sobre las banquetas, rayas longitudinales; dentro de una isleta o zona de seguridad para peatones.',
    precio: '$309'
  },
  {
    multa: 'Dar vuelta en "U" en lugares no permitidos.',
    precio: '$309'
  },
  {
    multa: 'Detener la marcha del vehículo sin pegarse a la banqueta de estacionamiento, o sin hacer las señales necesarias para ellos.',
    precio: '$721'
  },
  {
    multa: 'Reparar vehículos en la vía pública, fuera de los casos permitidos.',
    precio: '$412'
  },
  {
    multa: 'No ceder el paso a los vehículos de servicios de ambulancias, policía, tránsito, bomberos y transporte militar.',
    precio: '$412'
  },
  {
    multa: 'No obedecer la señal que indique el sentido de circulación.',
    precio: '$1476'
  },
  {
    multa: 'Circular con las puertas de seguridad abiertas.',
    precio: '$206'
  },
  {
    multa: 'Llevar pasajeros en el exterior del vehículo.',
    precio: '$412'
  },
  {
    multa: 'Hacer paradas, los vehículos de servicio público de pasajeros en lugares no autorizados. ',
    precio: '$824'
  },
  {
    multa: 'Circular o realizar maniobras de carga o descarga fuera de las zonas y horas permitidas.',
    precio: '$412'
  },
  {
    multa: 'Causar daño a la vía pública.',
    precio: '$412'
  },
  {
    multa: 'Causar daños o lesiones a terceros con motivo de la fuga.',
    precio: '$3690'
  },

  {
    multa: 'Interrumpir desfiles.',
    precio: '$412'
  },
  {
    multa: 'Emplear sirena o silbato accionado con el escape del vehículo.',
    precio: '$412'
  },
  {
    multa: 'Carecer de velocímetro o frenos en buenas condiciones.',
    precio: '$824'
  },
  {
    multa: 'Carecer de las luces reglamentarias para circular.',
    precio: '$305'
  },
  {
    multa: 'Usar en vehículos particulares, los colores reservados por el Reglamento para otros vehículos.',
    precio: '$412'
  },
  {
    multa: 'Carecer los autobuses de pasajeros y vehículos similares de asientos, de cristales, timbre, pasamanos y de más accesorios en buen estado.',
    precio: '$412'
  },
  {
    multa: 'Producir ruido o humo excesivo.',
    precio: '$412'
  },
  {
    multa: 'Resistencia a serinfraccionado.',
    precio: '$2460'
  },
  {
    multa: 'Abastecer de combustible con pasajeros abordo.',
    precio: '$1476'
  },
  {
    multa: 'Circular a mayor velocidad de la marcada en los señalamientos.',
    precio: '$412'
  },
  {
    multa: 'No hacer el conductor las señales reglamentarias y en forma oportuna al detener o disminuir la velocidad o al dar vuelta a la derecha o izquierda.',
    precio: '$206'
  },
  {
    multa: 'No obedecer la señal de alto.',
    precio: '$412'
  },
  {
    multa: 'Mover o destruir las señales o dispositivos de tránsito o cambiarlos de lugar.',
    precio: '$3690'
  },
  {
    multa: 'No obedecer la señal que indique el sentido de circulación.',
    precio: '$824'
  },
  {
    multa: 'Ocasionar atropellamiento de una persona.',
    precio: '$9840'
  },
  {
    multa: 'Estacionarse en doble o triple fila.',
    precio: '$309'
  },
]
export default function Multas() {
  return (
    <ScrollView>
      <View>
        <ImageBackground source={require('../assets/multas.jpeg')} resizeMode="cover" style={{
          flex: 1,
          justifyContent: "center"
        }}>
          {
            multas.map((u, i) => {
              return (
                <Card>
                  <Card.Title>{u.multa}</Card.Title>
                  <Card.Divider />
                  <View key={i}>
                    <Text style={{ color: 'green', textAlign: 'center' }}>{u.precio}</Text>
                  </View>
                </Card>
              );
            })
          }
        </ImageBackground>
      </View>
    </ScrollView>
  );
}