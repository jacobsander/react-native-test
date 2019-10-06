/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';

function OverviewScreen({navigation}) {

  function buttonWasPressed() {
    console.log("it worked!")
    navigation.navigate('Detail')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello Jacob!</Text>
      <Image
      style={{width: 50, height: 50}}
      source={{uri: 'https://images.unsplash.com/photo-1431274172761-fca41d930114?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80'}}
      /> 
      <Button
      title='Show Detail'
      color="red"
      style={styles.button}
      onPress={() => buttonWasPressed()}
      />
    </View>
  );
};

OverviewScreen.navigationOptions = ({navigation}) => ({
    title: "Overview"
})

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: 'white',
    fontWeight: '600',
    fontSize: 32
  },
  button: {
    color: 'red'
  }
});

export default OverviewScreen
