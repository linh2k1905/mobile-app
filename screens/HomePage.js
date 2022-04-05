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
        <View>

            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="House" component={House} />
                <Tab.Screen name="User" component={User} />
                <Tab.Screen name="NewPost" component={NewPost} />
            </Tab.Navigator>

        </View>
    );
}

export default HomePage;