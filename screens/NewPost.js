import react, { useState, useEffect, } from 'react'
import { View, Text, Picker, Image, TextInput, SafeAreaView, Button, ScrollView, StatusBar, TouchableOpacity } from 'react-native'
import { styles, Colors } from '../components/styles';
const { teritary } = Colors;
import { URL } from '../constants'
import { useContext } from 'react';
import AppContext from './../components/AppContext';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as ImagePicker from 'expo-image-picker';
const NewPost = ({ navigation }) => {



    const [text, onChangeText] = useState();
    const [name, onChangeTextName] = useState();
    const [address, onChangeAddress] = useState();
    const [price, onChangePrice] = useState();
    const [area, onChangeArea] = useState();
    const [desc, onChangeDesc] = useState();
    const [descVi, onChangeDescVi] = useState();
    const [selectedValueCity, setSelectedValueCity] = useState();
    const [selectedValueTypeHouse, setSelectedValueTypeHouse] = useState(5);
    const [imageSending, setImageSending] = useState();
    const myContext = useContext(AppContext);
    const [imagePreview, setImagePreview] = useState(null);
    const userInfo = myContext.userInfo;
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
            // console.log(result.base64);
        }
    };
    const uploadImage = () => {
        alert("Ok");
    };
    const alertSuccess = () => {
        alert("Thành công");
    };
    const fetchAllCity = async () => {
        try {
            let data = await fetch(URL.LOCALHOST + '/api/getCity',
                {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                    }
                }
            )
            let res = await data.json();
            myContext.setCity(res.data);


        } catch (error) {
            console.log(error)
        }
    }
    const fetchAllTypeHouse = async () => {
        try {
            setTimeout(() => {
            }, 6000);
            fetch(URL.LOCALHOST + '/api/getTypeHouse')
                .then(async res => {
                    let data = await res.json();
                    myContext.setTypeHouseAll(data.data);
                })



        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {

        fetchAllTypeHouse();
        fetchAllCity();

    }, []);
    const checkinput = (data) => {
        let arr = ["name", "address", "price", "area", "userId", "cityId", "typeHouseId", "image", "descEn", "descVi"];

        if (!data[arr[0]] || !data[arr[1]] || !data[arr[2]] || !data[arr[3]] || !data[arr[4]] || !data[arr[5]] || !data[arr[6]]) {

            return false;

        }

        return true;
    }
    const handlePost = () => {

        let data = {};

        data.name = name;
        data.address = address;
        data.price = price;
        data.area = area;
        data.userId = userInfo.id;
        data.cityId = selectedValueCity;
        data.typeHouseId = selectedValueTypeHouse;
        data.image = "data:image/jpeg;base64," + imageSending;
        data.descEn = desc;
        data.descVi = descVi;
        let isCheck = checkinput(data);
        if (isCheck) {
            fetch(URL.LOCALHOST + '/api/create-new-post',

                {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',

                    },
                    body: JSON.stringify(data),
                }).then(async res => {
                    let data = await res.json();
                    if (data.errorCode === 0) {
                        alert(data.messageCode);

                    }
                    else {
                        alert(data.messageCode);
                    }
                })
                .catch(err => console.log(err));
        }
        else {
            alert("Vui lòng nhập đầy đủ thông tin");
        }
    }

    return (

        <SafeAreaView
            style={{
                top: StatusBar.currentHeight + 10,
                width: '100%',
                height: '100%'

            }}
        >
            <ScrollView>

                <View style={styles.row}>
                    <Text style={styles.titlePost}>Tìm bạn cùng phòng </Text>
                    <MaterialCommunityIcons
                        name="heart-circle"
                        color="red" size={30}

                    />
                </View>

                <View style={{
                    width: '100%',
                    height: '100%'
                }}>
                    <View style={styles.contentInput}>
                        <View style={styles.rowLeft}>
                            <Text style={styles.labelBlue}>  Tên nhà trọ  </Text>
                            <MaterialCommunityIcons
                                name="home-map-marker"
                                color="blue" size={30}

                            />
                        </View>


                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeTextName}
                            value={name}
                        ></TextInput>
                    </View>
                    <View style={styles.contentInput}>
                        <View style={styles.rowLeft}>
                            <Text style={styles.labelBlue}>  Địa chỉ  </Text>
                            <MaterialCommunityIcons
                                name="crosshairs-gps"
                                color="blue" size={30}

                            />
                        </View>


                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeAddress}
                            value={address}
                        ></TextInput>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.leftRow}>
                            <Text style={styles.labelBlue}>  Giá tiền</Text>
                            <TextInput
                                style={styles.inputPrice}
                                keyboardType="numeric"
                                onChangeText={onChangePrice}
                                value={price}
                            >

                            </TextInput>
                        </View>
                        <View style={styles.leftRow}>
                            <Text style={styles.labelBlue}>  Diện tích</Text>
                            <TextInput
                                style={styles.inputPrice}
                                keyboardType="numeric"
                                onChangeText={onChangeArea}
                                value={area}
                            >

                            </TextInput>
                        </View>

                    </View>
                    <View style={styles.rowWithLeftRight}>
                        <View style={styles.leftRow}>
                            <Text style={styles.labelBlue}>Thành phố</Text>
                            <Picker
                                selectedValue={selectedValueCity}
                                style={{ height: 50, width: '100%', alignItems: 'center' }}
                                onValueChange={(itemValue, itemIndex) => setSelectedValueCity(itemValue)}
                            >
                                {myContext.city && myContext.city.map((item, index) => {
                                    return (
                                        <Picker.Item key={index} value={item.id} label={item.name}></Picker.Item>
                                    )

                                })}

                            </Picker>
                        </View>

                    </View>
                    <View
                        style={styles.contentInput}>
                        <Text style={styles.labelBlue}> Mô tả tiếng Việt</Text>
                        <TextInput
                            style={styles.inputTextArea}
                            multiline={true}
                            numberOfLines={5}
                            onChangeText={onChangeDescVi}
                            value={descVi}
                        />
                    </View>
                    <View
                        style={styles.contentInput}>
                        <Text style={styles.labelBlue}> Mô tả tiếng Anh</Text>
                        <TextInput
                            style={styles.inputTextArea}
                            multiline={true}
                            numberOfLines={5}
                            onChangeText={onChangeDesc}
                            value={desc}
                        />
                    </View>
                    <View style={styles.rowRight}>
                        <View style={styles.rowLeft}>
                            {imageSending && <Image
                                source={{ uri: "data:image/jpeg;base64," + imageSending }}
                                style={{
                                    width: 50,
                                    height: 50,
                                    resizeMode: 'cover'
                                }}
                            />}
                        </View>

                        <View style={styles.rowRight}>


                            <TouchableOpacity

                                onPress={pickImage}
                                style={styles.button}
                            >
                                <Text style={styles.textWhite}>Tải ảnh</Text>
                            </TouchableOpacity>





                            <TouchableOpacity
                                style={styles.button}
                                onPress={handlePost}
                            >
                                <Text style={styles.textWhite}>Đăng bài</Text>
                            </TouchableOpacity>

                        </View>
                    </View>


                </View>
            </ScrollView>

        </SafeAreaView>

    )
}
export default NewPost;