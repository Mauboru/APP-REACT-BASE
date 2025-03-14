import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Welcome() {
  return (
    <View style={styles.container}>
      <View style={styles.containerForm}>
        <Text style={styles.title}>Busque, publique seu pedido de trabalho de qualquer lugar!</Text>
        <Text style={styles.text}>Faça o login para começar</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#38a69d',
    flex: 1
  },
  containerForm:{
    flex: 1,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%'
  },
  title:{
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12
  },
  text:{
    color: '#a1a1a1'
  }
});