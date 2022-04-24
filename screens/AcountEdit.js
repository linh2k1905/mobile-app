import react, { useState } from 'react'
import { StatusBar, SafeAreaView, Text, TextInput, View, TouchableOpacity } from 'react-native'
import { heightLine } from '../constants';
import { styles } from '../components/styles';
import { useContext } from 'react';
import AppContext from './../components/AppContext';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const AcountEdit = ({ navigation }) => {
    const myContext = useContext(AppContext);
    let userInfo = myContext.userInfo;
    const [text, onChangeText] = useState("Useless Text");
    console.log(userInfo);


    return (

        <SafeAreaView
            style={{ top: heightLine + 10 }}
        >
            <Text style={styles.title}>Chỉnh sửa trang cá nhân</Text>
            <MaterialCommunityIcons style={styles.title} name="folder-edit-outline" />
            <Text style={styles.label}>Họ </Text>
            <TextInput
                style={styles.inputEdit}
                onChangeText={onChangeText}
                value={text}
            />
            <Text style={styles.label}>Tên </Text>
            <TextInput
                style={styles.inputEdit}
                onChangeText={onChangeText}
                value={text}
            />
            <Text style={styles.label}>Số điện thoại</Text>
            <TextInput
                style={styles.inputEdit}
                onChangeText={onChangeText}
                value={text}
            />
            <Text style={styles.label}>Địa chỉ </Text>
            <TextInput
                style={styles.inputEdit}
                onChangeText={onChangeText}
                value={text}
            />
        </SafeAreaView>
    )
}
export default AcountEdit;