import React from 'react'
import { Icon } from 'react-native-elements'
import MainPage from './MainPage'
import { Detail } from './Detail'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()    

export const NavBar = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen 
        name='Main'
        component={MainPage}
        options={{
            tabBarIcon:({color, size}) =>(
                <Icon name='heart' type='font-awesome' color={color} size={size} />
            )            
        }}
        />
        <Tab.Screen 
        name='Detail'
        component={Detail}
        options={{
            tabBarIcon:({color, size}) =>(
                <Icon name='map' type='font-awesome' color={color} size={size} />
            )            
        }}
        />
    </Tab.Navigator>
    
  )
}
