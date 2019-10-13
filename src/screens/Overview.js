/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { StyleSheet, View, Text, ImageBackground, TextInput, Button } from 'react-native';
import AttractionScreen from './Attraction';

function OverviewScreen({navigation}) {

  function buttonWasPressed() {
    navigation.navigate('Detail')
  }

  return (

   <ImageBackground 
   source={{uri: 'https://images.unsplash.com/photo-1428908728789-d2de25dbd4e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'}}
   style={styles.backgroundImage}>
     <Text style={styles.title}>
       Where to?
    </Text>
    <TextInput
      style={styles.searchBar}
      placeholder="E.g. Los Angeles"
       />
    <Button
      title='Search'
      color="red"
      style={styles.button}
      onPress={() => buttonWasPressed()}
      />
   </ImageBackground>

  );
};

OverviewScreen.navigationOptions = ({navigation}) => ({
    title: "Search"
})

const styles = StyleSheet.create({
  container: {

  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '600',
    fontSize: 32
  },
  searchBar: {
    backgroundColor: 'white',
    height: 30,
    width: "70%",
    marginTop: 10,
    borderRadius: 10 
  }
});

export default OverviewScreen
