import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, TouchableHighlight } from 'react-native';
import {StackNavigator} from 'react-navigation';

export default class Calculate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {peso: '', altura: '', imc: 0};
  }
  calculateImc = () => {
    const { peso, altura } = this.state;
    this.setState({
      imc: ((Number(peso) / (Number(altura)*Number(altura))) * 10000).toFixed(2)
    });
  }
  handleOnPress = () => {
   //console.warn('puff');
  }
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
      <Image style= { styles.imgContainer} source={{uri: 'https://s-media-cache-ak0.pinimg.com/originals/46/ff/fa/46fffa31e76037fd28b18921ab874d7a.jpg'}}>
        <View style={styles.textNumberContainer}>
          <TouchableOpacity onPress={this.handleOnPress} style= {styles.buttonContainer}>
            <Text style= {styles.buttonText}>Peso (kg) : </Text>
          </TouchableOpacity>
          <TextInput
            style= {styles.input}
            underlineColorAndroid='transparent'
            placeholder= 'Peso'
            keyboardType="numeric"
            value= {this.state.peso}
            onChangeText= {(peso) => this.setState({peso})}
          />
        </View>
        <View style={styles.textNumberContainer}>
          <TouchableOpacity style= {styles.buttonContainer}>
            <Text style= {styles.buttonText}>Altura (cm): </Text>
          </TouchableOpacity>
          <TextInput
            style= {styles.input}
            underlineColorAndroid='transparent'
            placeholder= 'Altura'
            keyboardType="numeric"
            value={this.state.altura}
            onChangeText={(altura) => this.setState({altura})}
          />
        </View>
        <View style={styles.btnCalculateContainer}>
          <TouchableHighlight onPress={this.calculateImc} style={styles.buttonCalculate}>
            <Text style={styles.buttonTextCalculate}>Calcular</Text>
          </TouchableHighlight>
        </View>
         <View style={styles.textNumberContainer}>
          <TouchableOpacity style= {styles.buttonContainer}>
            <Text style= {styles.buttonText}>IMC : </Text>
          </TouchableOpacity>
          <View style= {styles.border}></View>
          <Text>{this.state.imc}</Text>
        </View>
        <View style= {styles.footer}>
          <TouchableOpacity onPress= { ()=> navigate('Result', {imc:this.state.imc}) } style={styles.buttonResult}>
            <Text style={styles.buttonTextFooter}>Resultados</Text>
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
  textNumberContainer: {
    backgroundColor: 'white',
    width: '70%',
    height: 48,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 11,
    alignSelf: 'center',
    marginBottom: 40
  },
  buttonText:{
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
  buttonTextFooter: {
    padding: 20,
    color: '#ecf0f1',
    textAlign: 'center'
  },
  btnCalculateContainer:{
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30
  },
  buttonCalculate: {
    backgroundColor: '#e74c3c',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonTextCalculate:{
    padding: 20,
    color: '#ecf0f1',
    textAlign: 'center'
  },
  buttonResult: {
    backgroundColor: '#e74c3c',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20
  }
});
