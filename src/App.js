import React from 'react'
import { View } from 'react-native'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import OverviewScreen from './screens/Overview'
import DetailScreen from './screens/Detail'
import LoginScreen from './screens/Login';
import AttractionScreen from './screens/Attraction';
import SavedTrips from './screens/SavedTrips';
import ListView from './screens/ListView';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

const StackOne = createStackNavigator({
  Overview: {
    screen: OverviewScreen
  },
  Detail: {
    screen: DetailScreen
  },
  Attraction: {
    screen: AttractionScreen
  },
  SavedTrips: {
    screen: SavedTrips
  },
  List: {
    screen: ListView
  }
},{
  navigationOptions: {
    tabBarIcon: ({tintColor}) => {
      return (
        <Feather
        tintColor
        name="search"
        size={20}
        color={tintColor}
        />
      )
    }
  }
})

const StackTwo = createStackNavigator({
  StackTwoList: {
    screen: SavedTrips
  },
},{
  navigationOptions: {
    tabBarIcon: ({tintColor}) => {
      return (
          <Entypo
          tintColor
          name="globe"
          size={20}
          color={tintColor}
          
          />
      )
    }
  }
})

const StackThree = createStackNavigator({
  
  StackTwoDetail: {
    screen: DetailScreen
  }
},{
  navigationOptions: {
    tabBarIcon: ({tintColor}) => {
      return (
        <Feather
        tintColor
        name="user"
        size={20}
        color={tintColor}
        />
      )
    }
  }
})

const Tab = createBottomTabNavigator({
  Search: StackOne,
  Trips: StackTwo,
  Profile: StackThree,
},
{
  tabBarOptions: {
    activeTintColor: '#2980b9',
    inactiveTintColor: 'gray',
  },
})

const Switch = createSwitchNavigator({
  Auth: LoginScreen,
  App: Tab
})


export default createAppContainer(Switch)
