import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, KeyboardAvoidingView, TouchableHighLight, Button } from 'react-native';
import {StackNavigator} from 'react-navigation';

class IntroductionScreen extends React.Component {
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
      <Image style= { styles.imgContainer} source= {require('./src/img/white.jpg')}>
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
              <Text style={styles.buttonText}>Calcular IMC</Text>
          </TouchableOpacity>
        </View>
      </Image>
    );
  }
}

class CalculateScreen extends React.Component {
  static navigationOptions = {
    title: 'Calcular IMC',
    headerTintColor: 'white',
    headerStyle: {
        backgroundColor: '#e74c3c',
        marginTop: Expo.Constants.statusBarHeight
      },
    headerTitleStyle: {
      padding: 50,
      color: '#ecf0f1',
    }
  };
  render(){
    const { navigate } = this.props.navigation;
    return(
      <Image style= { styles.imgContainer} source= {require('./src/img/white.jpg')}>

      

        <View style={styles.textNumberContainer}>
          <TouchableOpacity style= {styles.buttonContainer}>
            <Text style= {styles.buttonText1}>Peso : </Text>
          </TouchableOpacity>
          <View style= {styles.border}></View>
          <TextInput style= {styles.input} underlineColorAndroid='transparent' keyboardType="numeric"></TextInput>
        </View>

        <View style={styles.textNumberContainer}>
          <TouchableOpacity style= {styles.buttonContainer}>
            <Text style= {styles.buttonText1}>Altura: </Text>
          </TouchableOpacity>
          <View style= {styles.border}></View>
          <TextInput style= {styles.input} underlineColorAndroid='transparent'  keyboardType="numeric"></TextInput>
        </View>

        <View style={styles.textNumberContainer}>
          <TouchableOpacity style= {styles.buttonContainer}>
            <Text style= {styles.buttonText1}>IMC : </Text>
          </TouchableOpacity>
          <View style= {styles.border}></View>
          <TextInput style= {styles.input} underlineColorAndroid='transparent'  editable={false} ></TextInput>
        </View>

        <View style= {styles.footer}>
          <TouchableOpacity onPress= { ()=> navigate('Result') } style={styles.button}>
            <Text style={styles.buttonText}>Ver Tabla</Text>
          </TouchableOpacity>
        </View>

      </Image>
    );
  }
}

class ResultScreen extends React.Component {
  static navigationOptions = {
    title: 'Result',
    headerTintColor: 'white',
    headerStyle: {
        backgroundColor: '#e74c3c',
        marginTop: Expo.Constants.statusBarHeight
      },
    headerTitleStyle: {
      padding: 70,
      color: '#ecf0f1',
    }
  };
  render(){
    const { navigate } = this.props.navigation;
    return(
    <Image style= { styles.imgContainer} source= {require('./src/img/kiwi.jpg')}>
        <TouchableOpacity onPress= { ()=> navigate('Result') }>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Go Table</Text>
          </View>
        </TouchableOpacity>
      </Image>
    );
  }
}

const NavigationApp = StackNavigator({
  Introduction: {screen: IntroductionScreen},
  Calculate: {screen: CalculateScreen},
  Result: {screen: ResultScreen},
},
{
  //navigationOptions: {
    //headerStyle:{
    //  marginTop: Expo.Constants.statusBarHeight,
    //},

  //}
});

export default class App extends React.Component {
  render() {
    return (
      <NavigationApp />
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
  textNumberContainer: {
    backgroundColor: 'white',
    width: '90%',
    height: 48,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 11,
    alignSelf: 'center',
    marginBottom: 40
  },
  buttonText1:{
    fontWeight: '600',
    fontSize: 20,
    paddingHorizontal: 16,
    color: 'black'
  },
  buttonContainer: {
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4
  },
  border: {
    height: 48,
    width: 20,
    backgroundColor: 'white'
  },
  input: {
    height: 48,
    flex: 1,
    fontSize: 18,
    paddingHorizontal: 8,
    color: 'black'
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
  buttonText: {
    padding: 20,
    color: '#ecf0f1',
    textAlign: 'center'
  }
});
