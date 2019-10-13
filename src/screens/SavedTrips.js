import React from 'react'
import {View, ScrollView, Text, StyleSheet, FlatList, Image, TouchableHighlight} from 'react-native'

import { CATEGORIES } from '../data/dummy-data.js'; 
import { tsPropertySignature } from '@babel/types';
import Colors from '../constants/Colors.js';

const SavedTrips = ({navigation}) => {

    const renderCity = (itemData) => {
    
        return (
            <TouchableHighlight
             onPress={() => {
                 navigation.navigate({routeName: 'List', params: {
                     cityId: itemData.item.id
                 }})
             }}
            >
                <View style={styles.cityList}>
                    <Text style={styles.cityTitle}>
                        {itemData.item.title}
                    </Text>
                    <Image
                     style={{width: "100%", height: "100%"}}
                     source={{uri: itemData.item.img}}
                    />
                </View>
            </TouchableHighlight>
            );
    };

    return(
        <View>
            <FlatList 
            data={CATEGORIES} // Why won't this work if I use CITIES instead?
            renderItem={renderCity}/>
        </View>
    );
};

SavedTrips.navigationOptions = ({navigation}) => ({
    title: "Saved Trips",
    headerTintColor: Colors.primaryColor
  })

  const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    cityList: {
        flex: 1,
        height: 250,
        justifyContent: "center",
    },
    cityTitle: {
        color: "white",
        fontSize: 40,
        textAlign: "center",
        position: "relative",
        top: "55%",
        zIndex: 999,
        textShadowColor: "black"
    }
  });



export default SavedTrips;