/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { StyleSheet, View, Text, ImageBackground, TextInput, Button } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

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
  <View style={styles.searchButton}>
    <Feather
    name="search"
    color="white"
    size={20}
    onPress={() => buttonWasPressed()}
    />
    <Button
      title='Search'
      color="white"
      style={styles.button}
      onPress={() => buttonWasPressed()}
      />
  </View>

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
    fontSize: 42
  },
  searchBar: {
    backgroundColor: 'white',
    height: 30,
    width: "80%",
    marginTop: 10,
    borderRadius: 10,
    paddingLeft: 10
  },
  searchButton: {
    flexDirection: "row",
    alignItems: 'center',
    backgroundColor: "#2980b9",
    width: "30%",
    justifyContent: "center",
    borderRadius: 15,
    marginTop: 15
  },
});

export default OverviewScreen
