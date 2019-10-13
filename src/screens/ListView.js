import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { tsPropertySignature } from '@babel/types';
import Colors from '../constants/Colors.js';

import {CATEGORIES} from '../data/dummy-data'

const ListView = ({navigation}) => {
    const cId = navigation.getParam('cityId');
    
    const selectedCity = CATEGORIES.find(c => c.id === cId) // what does this argument mean?

    return(
        <View style={styles.container}>
            <Text>{selectedCity.title}</Text>
        </View>
    );
};

ListView.navigationOptions = navigationData => {
    const cId = navigationData.navigation.getParam('cityId');
    const selectedCity = CATEGORIES.find(c => c.id === cId)

    return {
        headerTitle: selectedCity.title,
        headerTintColor: Colors.primaryColor
    }
}

  const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
  });



export default ListView;