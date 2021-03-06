import React, { useState } from "react";
import KeyboardAvoidingWrapper from "../components/KeyboardAvoidingWrapper";
import { Octicons, Ionicons, Fontisto, AntDesign } from '@expo/vector-icons';
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
import { View } from "react-native";
import { URL } from "../constants";
const { brand, darklight, primary } = Colors;
const checkInput = (data) => {
    if (!data.address || !data.email || !data.password || !data.roleId || !data.tel) {
        alert("Vui lòng điền đủ thông tin")
        return false;
    }
    return true;
}
const handleSignup = (values, navigation) => {
    values.roleId = 3;


    let req = JSON.stringify(values);

    if (checkInput(values)) {
        fetch(URL.LOCALHOST + '/api/create-new-user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: req,
        })
            .then(async (res) => {
                let response = await res.json();
                if (response.errorCode === 0) {

                    navigation.navigate('Login');
                }
                else {
                    console.log(response);
                    alert(response.messageCode);
                }

            })
            .catch(e => console.log(e));
    }
}
const Signup = ({ navigation }) => {

    const [hidePassword, setHidePassword] = useState(true);

    return (
        <KeyboardAvoidingWrapper>
            <StyleContainer>
                <StatusBar style="auto"></StatusBar>
                <InnerContainer>

                    <PageTitle>TimPhongTro123</PageTitle>
                    <Subtitle>Acount Signup</Subtitle>
                    <Formik
                        initialValues={{ email: '', password: '', tel: '', address: '' }}
                        onSubmit={values => {
                            handleSignup(values, navigation);

                        }}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values }) => (

                            <StyledFormArea>

                                <MyTextInput
                                    label="Email Address"
                                    icon="mail"
                                    placeholder="Email"
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                                    keyboardType="email-address"
                                />

                                <MyTextInput
                                    label="Phone number"
                                    icon="device-mobile"
                                    placeholder="Telephone number"
                                    onChangeText={handleChange('tel')}
                                    onBlur={handleBlur('tel')}
                                    value={values.tel}

                                />
                                <MyTextInput
                                    label="Address"
                                    icon="home"
                                    placeholder="Address"
                                    onChangeText={handleChange('address')}
                                    onBlur={handleBlur('address')}
                                    value={values.address}
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
                                <MessageBox>...</MessageBox>
                                <StyleButton
                                    onPress={handleSubmit}

                                >
                                    <ButtonText>Signup</ButtonText>
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
                                    <ButtonText google={true}>Signup with Google</ButtonText>
                                </StyleButton>
                                <ExtraView>
                                    <ExtraText>Don't have account already! </ExtraText>
                                    <TextLink
                                        onPress={() => navigation.navigate('Login')}
                                    >
                                        <TextLinkContent>Sign-in</TextLinkContent>
                                    </TextLink>
                                </ExtraView>
                            </StyledFormArea>
                        )}
                    </Formik>

                </InnerContainer>
            </StyleContainer>
        </KeyboardAvoidingWrapper>

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
export default Signup;