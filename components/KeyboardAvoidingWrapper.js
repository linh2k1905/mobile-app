import React from 'react';
import { KeyboardAvoidingView, Keyboard, ScrollView, TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native';
const KeyboardAvoidingWrapper = ({ children }) => {
    return (
        <KeyboardAvoidingView>
            <ScrollView>
                <TouchableNativeFeedback onPress={Keyboard.dismiss}>
                    {children}
                </TouchableNativeFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    )

}

export default KeyboardAvoidingWrapper;