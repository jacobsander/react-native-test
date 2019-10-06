import React from 'react'
import { View } from 'react-native'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import OverviewScreen from './screens/Overview'
import DetailScreen from './screens/Detail'
import LoginScreen from './screens/Login';

const StackOne = createStackNavigator({
  Overview: {
    screen: OverviewScreen
  },
  Detail: {
    screen: DetailScreen
  }
},{
  navigationOptions: {
    tabBarIcon: ({tintColor}) => {
      return (
          <View style={{height: 20, width: 20, backgroundColor: tintColor, borderRadius: 10}}></View>
      )
    }
  }
})

const StackTwo = createStackNavigator({
  StackTwoOverview: {
    screen: OverviewScreen
  },
  StackTwoDetail: {
    screen: DetailScreen
  }
},{
  navigationOptions: {
    tabBarIcon: ({tintColor}) => {
      return (
          <View style={{height: 20, width: 20, backgroundColor: tintColor, borderRadius: 2}}></View>
      )
    }
  }
})

const Tab = createBottomTabNavigator({
  TabOne: StackOne,
  TabTwo: StackTwo
},
{
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  },
})

const Switch = createSwitchNavigator({
  Auth: LoginScreen,
  App: Tab
})


export default createAppContainer(Switch)
