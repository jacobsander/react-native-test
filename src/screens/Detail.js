/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { StyleSheet, View, Text, Image, Button, TouchableHighlight } from 'react-native';
import OverviewScreen from './Overview';
import { TextInput } from 'react-native-gesture-handler';

const DetailScreen = ({navigation}) => {

  function buttonWasPressed() {
    navigation.navigate('Attraction')
  }

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <TextInput 
        style={styles.searchBar}
        placeholder="Search Here"/>
        
        <Button
        title="Filter"></Button>
      
      </View>
      <View style={styles.middle}> 
        <Text style={styles.cardTitle}
          >
          Santa Monica Pier
        </Text>
        <TouchableHighlight
          onPress={() => buttonWasPressed()}>
          <Image
          style={styles.card}
          source={{uri: "https://images.unsplash.com/photo-1551574210-10831cdf882d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"}}
          />
        </TouchableHighlight>
        
      </View>
        <View style={styles.bottom}>
        <Button
          title="Back"
          />
          <Button
          title="Add"
          />
          <Button
          title="Next"
          />
        </View>
      
    </View>
  );
};

OverviewScreen.navigationOptions = ({navigation}) => ({
  title: "Detail"
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  top: {
    height: "10%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",

  },
  searchBar: {
    width: "70%",
    height: "40%",
    borderRadius: 20,
    backgroundColor: "white",
    textAlign: "center",
    shadowOffset:{  width: 1,  height: 1, },
    shadowColor: 'grey',
    shadowOpacity: 0.6,
  },
  middle: {
    height: "70%",
    width: "90%",
  },
  cardTitle: {
    textAlign:"center", 
    marginBottom: 5,
    fontSize: 24
  },
  card: {
    backgroundColor: "green",
    height: "100%",
    borderRadius: 15,
    resizeMode: "cover"
  },
  bottom: {
    flexDirection: "row",
    height: "25%",
    justifyContent: "space-between",
    width: "90%",
    alignItems: "center"
  }
});

export default DetailScreen
