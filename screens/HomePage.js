import React, { useState } from "react";
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons';
import {
    StyleContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    Subtitle,



} from './../components/styles';
import { StatusBar } from "expo-status-bar";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import House from '../screens/House';
import NewPost from '../screens/NewPost';
import User from '../screens/User';
import { View } from "react-native";

const Tab = createBottomTabNavigator();

const HomePage = () => {

    return (


        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="House" component={House} />
            <Tab.Screen name="New Post" component={NewPost} />
            <Tab.Screen name="Account" component={User} />
        </Tab.Navigator>


    );
}

export default HomePage;