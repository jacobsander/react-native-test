import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const AttractionScreen = ({navigation}) => {

    return(
        <View style={styles.container}>
            <Text>The attraction screen!</Text>
        </View>
    );
};

AttractionScreen.navigationOptions = ({navigation}) => ({
    title: "Attraction"
  })

  const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
  });



export default AttractionScreen;