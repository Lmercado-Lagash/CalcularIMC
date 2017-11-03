import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {StackNavigator} from 'react-navigation';

export default class Introduction extends React.Component {
  static navigationOptions = {
    title: '¿Qué es el IMC?',
    headerStyle: {
        backgroundColor: '#e74c3c',
        marginTop: Expo.Constants.statusBarHeight
      },
    headerTitleStyle: {
      textAlign: 'center',
      alignSelf: 'center',
      color: '#ecf0f1'
    }
  };
  render(){
    const { navigate } = this.props.navigation;
    return(
      <Image style= { styles.imgContainer} source={{uri: 'https://s-media-cache-ak0.pinimg.com/originals/46/ff/fa/46fffa31e76037fd28b18921ab874d7a.jpg'}}>
        <Text style= {styles.text}>
          El índice de masa corporal, o IMC, es una métrica utilizada para estimar la cantidad
          de grasa corporal que tiene una persona. Es una medida de peso relativo a la masa y altura de un adulto.


          El índice de masa corporal es un método utilizado para estimar la grasa corporal total. Esto ayuda a
          determinar si su peso está dentro del rango normal, o por el contrario tienes sobrepeso o delgadez.

          El cálculo del IMC puede subestimar la cantidad de grasa corporal en las personas con una discapacidad física, que no
          pueden caminar y pueden tener pérdida de masa muscular, y para los ancianos. Para las personas con trastornos de
          la alimentación como la anorexia nerviosa, el IMC no es también un indicador preciso.
        </Text>
        <View style={styles.footer}>
          <TouchableOpacity onPress= { ()=> navigate('Calculate') } style={styles.button}>
              <Text style={styles.buttonTextFooter}>Calcular IMC</Text>
          </TouchableOpacity>
        </View>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  imgContainer: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
    justifyContent: 'center',
    alignSelf: 'stretch'
  },
  text: {
    color: 'black',
    padding: 20,
    textAlign: 'justify',
    marginTop: -70
  },
  footer: {
    position: 'absolute',
    alignItems:'center',
    bottom: 0,
    left: 0,
    right: 0
  },
  button: {
    backgroundColor: '#e74c3c',
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: '#ccc',
    justifyContent: 'center',
    elevation: 8,
    zIndex: 10,
    alignItems: 'center',
    marginBottom: 10
  },
  buttonTextFooter: {
    padding: 20,
    color: '#ecf0f1',
    textAlign: 'center'
  }
});
