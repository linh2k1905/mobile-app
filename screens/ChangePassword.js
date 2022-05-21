import { useState } from "react"
import { StatusBar, View, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native'
import { styles } from './../components/styles';
import { URL } from '../constants';
import { useContext } from 'react';
import AppContext from './../components/AppContext';
const chieucao = StatusBar.currentHeight + 10;
const NewPost = ({ navigation }) => {
    const myContext = useContext(AppContext);
    const userInfo = myContext.userInfo;
    const [oldPassword, setOldPassword] = useState();
    const [newPassword, setNewPassword] = useState();
    const [retypeNewPassword, setRetypeNewPassword] = useState();

    const checkpass = (pass, repass) => {
        if (pass === repass) {
            return true;
        }
        return false;
    }
    const checkInPut = () => {
        if (!retypeNewPassword || !oldPassword) {
            alert("Vui lòng nhập mật khẩu");
        }

    }
    const postChangePassword = () => {

        if (checkpass(retypeNewPassword, newPassword)) {
            let data = {}
            data.password = oldPassword;
            data.newpassword = newPassword;
            data.id = userInfo.id

            let url = URL.LOCALHOST + '/api/edit-user-password'
            fetch(url,

                {
                    method: 'PUT',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    }
                    ,
                    body: JSON.stringify(data)
                }).then(async res => {
                    let result = await res.json();
                    console.log(result);
                    if (result.errorCode === 0) {
                        alert(result.messageCode);
                        navigation.navigate("Login");

                    }
                    else {
                        alert(result.messageCode)
                    }

                }).catch(e => console.log(e))
        } else {
            alert("Mật khẩu không khớp");
        }

    }
    return (
        <SafeAreaView

            style={{ top: chieucao }}>
            <View>
                <Text style={styles.title}>Đổi mật khẩu </Text>
                <Text style={styles.label}


                >   Nhập mật khẩu cũ </Text>

                <TextInput
                    style={styles.inputEdit}
                    secureTextEntry={true}
                    onChangeText={setOldPassword}
                    value={oldPassword}
                />

                <Text style={styles.label}>   Mật Khẩu Mới </Text>
                <TextInput
                    style={styles.inputEdit}
                    secureTextEntry={true}
                    onChangeText={setNewPassword}
                    value={newPassword}
                />
                <Text style={styles.label}>   Nhập lại mật khẩu</Text>
                <TextInput
                    style={styles.inputEdit}
                    secureTextEntry={true}
                    onChangeText={setRetypeNewPassword}
                    value={retypeNewPassword}
                />
            </View>
            <View

                style={styles.rowRight}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => { navigation.navigate("HomePage") }}
                >
                    <Text style={styles.textWhite}>
                        Trở lại
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={postChangePassword}
                >
                    <Text style={styles.textWhite}>
                        Đổi mật khẩu
                    </Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}
export default NewPost;