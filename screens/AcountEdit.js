import react, { useState, useEffect } from 'react'
import { StatusBar, ScrollView, SafeAreaView, Text, TextInput, View, TouchableOpacity, Image } from 'react-native'
import { heightLine } from '../constants';
import { styles } from '../components/styles';
import { useContext } from 'react';
import AppContext from './../components/AppContext';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as ImagePicker from 'expo-image-picker';
import { URL } from '../constants';
const AcountEdit = ({ route, navigation }) => {
    const myContext = useContext(AppContext);
    const { userInfo } = route.params;
    const [firstName, setFirstName] = useState(userInfo.firstName);
    const [lastName, setLastName] = useState(userInfo.lastName);
    const [tel, setTel] = useState(userInfo.tel);
    const [address, setAddress] = useState(userInfo.address);
    const [imageSending, setImageSending] = useState(userInfo.image);
    const [imagePreview, setImagePreview] = useState(null);
    const [changeImage, setChangeImage] = useState(false);
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,

            quality: 0.5,
            base64: true
        });
        if (!result.cancelled) {
            setImagePreview(result.uri);
            setImageSending(result.base64);
            setChangeImage(true);
        }
    };
    const checkInPut = (data) => {
        if (!data.firstName) {
            alert("Vui lòng nhập tên")
            return false;
        };
        if (!data.lastName) {
            alert("Vui lòng nhập tên")
            return false
        };
        if (!data.tel) {

            alert("Vui lòng nhập số điện thoại")
            return false
        };
        if (!data.address) {
            alert("Vui lòng nhập địa chỉ")
            return false;
        };
        return true;

    }

    const handleEditUser = async () => {
        let data = {};
        data.firstName = firstName;
        data.lastName = lastName;
        data.roleId = userInfo.roleId;
        data.address = address;
        data.tel = tel;
        data.id = userInfo.id;
        data.email = userInfo.email;
        data.image = userInfo.image;
        if (changeImage)
            data.image = "data:image/jpeg;base64," + imageSending;
        else;
        let url = URL.LOCALHOST + '/api/edit-user';
        if (checkInPut(data)) {
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
                        alert("Cập nhật thành công");
                        navigation.navigate("HomePage");
                        myContext.goUser(data);

                    }
                    else {
                        alert("Lỗi khi thay đổi")
                    }

                }).catch(e => console.log(e))
        }
    }
    return (

        <SafeAreaView
            style={{ top: heightLine + 5 }}
        >
            <ScrollView>
                <Text style={styles.title}>Chỉnh sửa trang cá nhân</Text>
                <MaterialCommunityIcons style={styles.title} name="folder-edit-outline" />
                <View
                    style={{ justifyContent: 'center', alignItems: 'center', padding: 10 }}>
                    <Image
                        source={{ uri: changeImage ? imagePreview : userInfo.image }}
                        style={{
                            width: 150,
                            height: 150,
                            resizeMode: 'cover',
                            alignContent: 'center'
                        }}
                    ></Image>
                    <TouchableOpacity
                        onPress={() => { pickImage() }}
                        style={{
                            backgroundColor: 'blue',
                            width: 50,
                            alignContent: 'center',
                            alignItems: 'center',
                            margin: 5

                        }}
                    ><Text
                        style={styles.textWhite}
                    >Đổi ảnh</Text></TouchableOpacity>
                </View>

                <Text style={styles.label}>   Họ </Text>

                <TextInput
                    style={styles.inputEdit}
                    onChangeText={setLastName}
                    value={lastName}
                />

                <Text style={styles.label}>   Tên </Text>
                <TextInput
                    style={styles.inputEdit}
                    onChangeText={setFirstName}
                    value={firstName}
                />
                <Text style={styles.label}>   Số điện thoại</Text>
                <TextInput
                    style={styles.inputEdit}
                    onChangeText={setTel}
                    value={tel}
                />
                <Text style={styles.label}>   Địa chỉ </Text>
                <TextInput
                    style={styles.inputEdit}
                    onChangeText={setAddress}
                    value={address}
                />
                <View style={styles.rowRight}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={handleEditUser}
                    ><Text
                        style={styles.textWhite}
                    >Chỉnh sửa</Text></TouchableOpacity>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default AcountEdit;