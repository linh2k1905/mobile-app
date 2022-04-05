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

const HomePage = ({ navigation, route }) => {
    const [userName, setuserName] = useState('');

    let data = route.params.data.firstName;

    console.log(typeof data);

    return (
        <StyleContainer>
            <StatusBar style="auto"></StatusBar>
            <InnerContainer>
                <PageLogo
                    resizeMode='cover'
                    source={require('../assets/logo.jpeg')}
                >
                </PageLogo>
                <PageTitle>TimPhongTro123</PageTitle>
                <Subtitle>Welcome  HomePage</Subtitle>


            </InnerContainer>
        </StyleContainer>

    );
}

export default HomePage;