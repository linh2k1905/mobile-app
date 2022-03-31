import React, { useState } from "react";
import { Octicons, Ionicons } from '@expo/vector-icons';
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
    StyleButton
} from './../components/styles';
import { Formik } from "formik";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
const { brand } = Colors
const Login = () => {
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
                    initialValues={{ email: '', password: '' }}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                >
                    {({ handleChange, handleBlur, values }) => (

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
                            <StyleButton>
                                <ButtonText>Login</ButtonText>
                            </StyleButton>
                        </StyledFormArea>
                    )}
                </Formik>

            </InnerContainer>
        </StyleContainer>

    );
}
const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {
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
            <StyleTextInput  {...props} />
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