import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {StackNavigator} from 'react-navigation';

//import Calculate from './src/components/Calculate';

export default class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {imc: this.props.navigation.state.params.imc};
    //console.warn('this.props.navigation.state.params',this.props.navigation.state.params.imc);
  }
  static navigationOptions = {
    title: 'Resultados',
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

    if(this.state.imc < 16)
    return(
    <Image style= { styles.imgContainer} source={{uri: 'https://s-media-cache-ak0.pinimg.com/originals/46/ff/fa/46fffa31e76037fd28b18921ab874d7a.jpg'}}>
      <Text style= {styles.text}>Delgadez Severa</Text>
    </Image>
    );


    if((this.state.imc > 16) && (this.state.imc < 16.99))
    return(
    <Image style= { styles.imgContainer} source={{uri: 'https://s-media-cache-ak0.pinimg.com/originals/46/ff/fa/46fffa31e76037fd28b18921ab874d7a.jpg'}}>
      <Text style= {styles.text}>Delgadez Moderada</Text>
    </Image>
    );


    if((this.state.imc > 17) && (this.state.imc < 18.49))
    return(
    <Image style= { styles.imgContainer} source={{uri: 'https://s-media-cache-ak0.pinimg.com/originals/46/ff/fa/46fffa31e76037fd28b18921ab874d7a.jpg'}}>
      <Text style= {styles.text}>Delgadez Aceptable</Text>
    </Image>
    );

    if((this.state.imc > 18.50) && (this.state.imc < 24.99)){
    return(
    <Image style= { styles.imgContainer} source={{uri: 'https://s-media-cache-ak0.pinimg.com/originals/46/ff/fa/46fffa31e76037fd28b18921ab874d7a.jpg'}}>
      <Text style= {styles.text}>Peso Normal</Text>
    </Image>
    );
    }

    if((this.state.imc > 25) && (this.state.imc < 29.99))
    return(
    <Image style= { styles.imgContainer} source={{uri: 'https://s-media-cache-ak0.pinimg.com/originals/46/ff/fa/46fffa31e76037fd28b18921ab874d7a.jpg'}}>
      <Text style= {styles.text}>Sobrepeso</Text>
    </Image>
    );

    if((this.state.imc > 30) && (this.state.imc < 34.99))
    return(
    <Image style= { styles.imgContainer} source={{uri: 'https://s-media-cache-ak0.pinimg.com/originals/46/ff/fa/46fffa31e76037fd28b18921ab874d7a.jpg'}}>
      <Text style= {styles.text}>Obeso: Tipo I</Text>
    </Image>
    );

    if((this.state.imc > 35) && (this.state.imc < 39.99))
    return(
    <Image style= { styles.imgContainer} source={{uri: 'https://s-media-cache-ak0.pinimg.com/originals/46/ff/fa/46fffa31e76037fd28b18921ab874d7a.jpg'}}>
      <Text style= {styles.text}>Obeso: Tipo II</Text>
    </Image>
    );

    if(this.state.imc > 40)
    return(
    <Image style= { styles.imgContainer} source={{uri: 'https://s-media-cache-ak0.pinimg.com/originals/46/ff/fa/46fffa31e76037fd28b18921ab874d7a.jpg'}}>
      <Text style= {styles.text}>Obeso: Tipo III</Text>
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
  }
});
