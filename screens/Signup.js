import React, { useState } from "react";
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
const { brand, darklight, primary } = Colors
const Signup = () => {
    const [hidePassword, setHidePassword] = useState(true);
    return (
        <StyleContainer>
            <StatusBar style="auto"></StatusBar>
            <InnerContainer>

                <PageTitle>TimPhongTro123</PageTitle>
                <Subtitle>Acount Signup</Subtitle>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
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
                                <TextLink>
                                    <TextLinkContent>Sign-up</TextLinkContent>
                                </TextLink>
                            </ExtraView>
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
export default Signup;