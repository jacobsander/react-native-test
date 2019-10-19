/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { StyleSheet, View, Text, Image, Button, TouchableHighlight } from 'react-native';
import OverviewScreen from './Overview';
import { TextInput } from 'react-native-gesture-handler';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Octicons from 'react-native-vector-icons/Octicons';
 

const DetailScreen = ({navigation}) => {

  function goToAttraction() {
    navigation.navigate('Attraction') // shouldn't this be "Santa Monica Pier?"
  }

  const images = [
    {
      id: "1",
      title: "Santa Monica Pier",
      uri: 'https://images.unsplash.com/photo-1551574210-10831cdf882d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'
    },
    {
      id: "2",
      title: "Griffth Observatory",
      uri: 'https://images.unsplash.com/photo-1518533954129-7774297db60f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80'
    },
    {
      id: "3",
      title: "Universal Studios",
      uri: "https://images.unsplash.com/photo-1569789010436-421d71a9fc38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1611&q=80"
    },
  ];

  function nextWasPressed() {  
    currentImageIndex += 1;
  };

 
  currentImageIndex = 0;
  const image = images[currentImageIndex];

  return (
    <View style={styles.container}>
        <View style={styles.top}>
            <View style={styles.searchBarArea}>
                <TextInput 
                style={styles.searchBar}
                placeholder="Search Here"/>
            </View>

            <Octicons
          name="grabber"
          size={30}/>
        </View>

        <View style={styles.middle}>
        <Text style={styles.cardTitle}
          >
          {image.title}
        </Text> 
        
        <TouchableHighlight
            onPress={() => goToAttraction()}
        >
            <Image
              style={styles.card}
              source={{uri: image.uri}} //How do you add shadows?
            />
        </TouchableHighlight>

        </View>
        <View style={styles.bottom}>
        <Octicons 
          name="arrow-left"
          size={80}
          color="#2c3e50"
          />
        <SimpleLineIcons 
          name="heart"
          size={60}
          />
        <TouchableHighlight
            onPress={() => nextWasPressed()}
        >
        <Octicons 
          name="arrow-right"
          size={80}
          color="#2c3e50"
          />
        </TouchableHighlight>
        </View>
        
    </View>
    
  );
};

OverviewScreen.navigationOptions = ({navigation}) => ({
  title: "Detail"
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  top: {
    flexDirection: "row",
    height: "10%",
    alignItems: "center"
  },
  searchBarArea: {
    alignItems: "center",
    height: "50%",
    width: "80%",
    justifyContent: "center"

  },
  searchBar: {
    width: "90%",
    height: "100%",
    borderRadius: 5,
    backgroundColor: "white",
    textAlign: "center",
    shadowOffset:{  width: 1,  height: 1, },
    shadowColor: 'grey',
    shadowOpacity: 0.6,
  },
  middle: {
    height: "70%",
    width: "90%",
  },
  cardTitle: {
    textAlign:"center", 
    marginBottom: 15,
    fontSize: 24
  },
  card: {
    backgroundColor: "red",
    height: "100%",
    borderRadius: 10,
    resizeMode: "cover",
    shadowOffset:{  width: 10,  height: 10 },
    shadowColor: 'black',
    shadowOpacity: 0.6
  },
  bottom: {
    flexDirection: "row",
    height: "25%",
    justifyContent: "space-between",
    width: "80%",
    alignItems: "center"
  }
});

export default DetailScreen

