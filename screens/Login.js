import React, { useState } from "react";
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons';
import { URL } from './../constants';
import { useContext } from 'react';
import AppContext from './../components/AppContext';
import {
    StyleContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    Subtitle,
    StyledFormArea,
    StyleLeftIcon,
    Colors,
    StyleInputLabel,
    StyleTextInput,
    StyleRightIcon,
    ButtonText,
    StyleButton,
    Line,
    MessageBox,
    ExtraText,
    ExtraView,
    TextLink,
    TextLinkContent

} from './../components/styles';
import { Formik } from "formik";
import { StatusBar } from "expo-status-bar";
import { View, SafeAreaView } from "react-native";
const { brand, darklight, primary } = Colors;




const Login = ({ navigation }) => {

    const myContext = useContext(AppContext);
    const [message, setMess] = useState('...');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = (values, resetForm, navigation) => {
        const r = JSON.stringify(values);
        fetch(URL.LOCALHOST + '/api/login-from-mobile', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',

            },
            body: r,
        })
            .then(async (res) => {
                let response = await res.json();
                if (response.error == 0) {
                    let data = response.userdata;
                    myContext.goUser(data);
                    resetForm();
                    navigation.navigate('HomePage');
                }
                else {
                    setMess(response.messageCode);
                }

            })
            .catch(e => console.log(e));

    }

    const [hidePassword, setHidePassword] = useState(true);
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
                <Subtitle>Acount Login</Subtitle>
                <Formik
                    initialValues={{ email: email, password: password }}
                    onSubmit={(values, { resetForm }) => handleLogin(values, resetForm, navigation)}
                >
                    {({ handleChange, handleBlur, handleSubmit, values }) => (

                        <StyledFormArea>

                            <MyTextInput
                                label="Email Address"
                                icon="mail"
                                placeholder="linh@gmail.com"
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                keyboardType="email-address"
                            />
                            <MyTextInput
                                label="Password"
                                icon="lock"
                                placeholder="Password"
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                secureTextEntry={hidePassword}
                                isPassword={true}
                                hidePassword={hidePassword}
                                setHidePassword={setHidePassword}
                            />
                            <MessageBox>{message}</MessageBox>
                            <StyleButton
                                onPress={handleSubmit}

                            >
                                <ButtonText>Login</ButtonText>
                            </StyleButton>
                            <Line />
                            <StyleButton
                                google={true}
                                onPress={handleSubmit}
                                style={{ alignItems: 'center' }}

                            >
                                <Fontisto
                                    name="google"
                                    color={primary}
                                    size={15}


                                ></Fontisto>
                                <ButtonText google={true}>Login with Google</ButtonText>
                            </StyleButton>
                            <ExtraView>
                                <ExtraText>Don't have account already! </ExtraText>
                                <TextLink>
                                    <TextLinkContent
                                        onPress={() => navigation.navigate("Signup")}
                                    >Sign-up</TextLinkContent>
                                </TextLink>
                            </ExtraView>
                        </StyledFormArea>
                    )}
                </Formik>

            </InnerContainer>
        </StyleContainer>

    );
}
const MyTextInput =
    ({ label, icon,
        isPassword,
        hidePassword,
        setHidePassword,
        ...props }) => {
        return (
            <View>
                <StyleLeftIcon>
                    <Octicons
                        name={icon}
                        color={brand}
                        size={30}
                    />

                </StyleLeftIcon>
                <StyleInputLabel>{label}</StyleInputLabel>
                <StyleTextInput
                    {...props} />
                {isPassword &&
                    (
                        <StyleRightIcon
                            onPress={
                                () => setHidePassword(!hidePassword)
                            }
                        >
                            <Ionicons
                                size={30}
                                name={hidePassword ? 'md-eye-off' : 'md-eye'}
                            />
                        </StyleRightIcon>
                    )}
            </View>
        )
    }
export default Login;