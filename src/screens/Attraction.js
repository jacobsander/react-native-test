import React from 'react'
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native'
import { FlatList } from 'react-native-gesture-handler';

const AttractionScreen = ({navigation}) => {

    return(
        <View style={styles.container}>
            <Image
            style={styles.imageHeader}
            source={{uri: 'https://images.unsplash.com/photo-1551574210-10831cdf882d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'}}
            />
            <View style={styles.description}>
            <Text>The Santa Monica Pier is a large double-jointed pier at the foot of Colorado Avenue in Santa Monica, California that is over 100 years old. With a breakwater constructed in 1934.</Text>
            <Text style={styles.categoryHeader}>Relevant categories:</Text>
            </View>
        
        <View style={{padding: 20}}>
        
        <FlatList
        horizontal={true}
        data={[
            {
                key: "1",
                title: "Romantic",
                uri: "https://images.unsplash.com/photo-1487035242901-d419a42d17af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80",
            },
            {
                key: "2",
                title: "Photography",
                uri: "https://images.unsplash.com/photo-1500634245200-e5245c7574ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
                },
            {
                key: "3",
                title: "Nature",
                uri: "https://images.unsplash.com/photo-1439853949127-fa647821eba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
                },
            
        ]}
        renderItem={({item}) => 
        <View>
            <Text style={styles.categoryTitle}>{item.title}</Text>
            <Image
                style={styles.categoryImages}
                source={{uri: item.uri}}
            />
        </View>
        }
        />
       
        </View>
        
    </View>    
        
    );
};

AttractionScreen.navigationOptions = ({navigation}) => ({
    title: "Santa Monica Pier"
  })

  const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageHeader: {
        width: '100%',
        height: "40%",
    },
    description: {
        padding: 20
    },
    categoryHeader: {
        paddingTop: 20,
        fontSize: 19
    },
    categoryImages: {
        width: 150,
        height: 150,
        borderRadius: 20,
        margin: 5,
    },
    categoryTitle:{
        textAlign: "center",
        padding: 10
    }
  });



export default AttractionScreen;