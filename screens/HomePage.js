import React from "react";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import House from '../screens/House';
import NewPost from '../screens/NewPost';
import User from '../screens/User';
import { Colors } from '../components/styles';
const { red } = Colors;
const Tab = createBottomTabNavigator();
const HomePage = () => {

    return (


        <Tab.Navigator
        >
            <Tab.Screen name="Home"
                component={Home}

                options={
                    {
                        title: 'Trang chủ',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="home" color={red} size={size} />
                        ),
                    }
                }
            />
            <Tab.Screen
                name="House"
                component={House}
                options={
                    {
                        title: 'Tìm trọ',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="home-search-outline" color={red} size={size} />
                        ),
                    }
                }
            />
            <Tab.Screen
                name="NewPost"
                component={NewPost}
                options={
                    {
                        title: 'Tin',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="newspaper-plus" color={red} size={size} />
                        ),
                    }
                }
            />
            <Tab.Screen
                name="Account"
                component={User}
                options={
                    {
                        title: 'Tài khoản',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="account" color={red} size={size} />
                        ),
                    }
                }
            />
        </Tab.Navigator>


    );
}

export default HomePage;