import react, { useState, useEffect } from 'react'
import { View, Text, Picker, TextInput, SafeAreaView, ScrollView, StatusBar, TouchableOpacity } from 'react-native'
import { styles, Colors } from '../components/styles';
const { teritary } = Colors;
import { URL } from '../constants'
import { useContext } from 'react';
import AppContext from './../components/AppContext';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const NewPost = () => {
    const [text, onChangeText] = useState();
    const [selectedValueCity, setSelectedValueCity] = useState();
    const [selectedValueTypeHouse, setSelectedValueTypeHouse] = useState('Choose');
    const myContext = useContext(AppContext);
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

    return (

        <SafeAreaView
            style={{
                top: StatusBar.currentHeight + 10,
                width: '100%',
                height: '100%'
            }}
        >
            <View style={styles.row}>
                <Text style={styles.titlePost}>Đăng tin </Text>
                <MaterialCommunityIcons
                    name="newspaper-plus"
                    color={teritary} size={30}

                />
            </View>

            <View style={{
                width: '100%',
                height: '100%'
            }}>
                <View style={styles.contentInput}>
                    <View style={styles.rowLeft}>
                        <Text style={styles.label}>  Tên nhà trọ  </Text>
                        <MaterialCommunityIcons
                            name="home-map-marker"
                            color={teritary} size={30}

                        />
                    </View>


                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={text}
                    ></TextInput>
                </View>
                <View style={styles.contentInput}>
                    <View style={styles.rowLeft}>
                        <Text style={styles.label}>  Địa chỉ  </Text>
                        <MaterialCommunityIcons
                            name="crosshairs-gps"
                            color={teritary} size={30}

                        />
                    </View>


                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        value={text}
                    ></TextInput>
                </View>
                <View style={styles.row}>
                    <View style={styles.leftRow}>
                        <Text style={styles.label}>  Giá tiền</Text>
                        <TextInput
                            style={styles.inputPrice}
                            keyboardType="numeric"
                        >

                        </TextInput>
                    </View>
                    <View style={styles.leftRow}>
                        <Text style={styles.label}>  Diện tích</Text>
                        <TextInput
                            style={styles.inputPrice}
                            keyboardType="numeric"
                        >

                        </TextInput>
                    </View>

                </View>
                <View style={styles.rowWithLeftRight}>
                    <View style={styles.leftRow}>
                        <Text style={styles.label}>Thành phố</Text>
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
                    <View style={styles.rightRow}>
                        <Text style={styles.label}>  Loại nhà</Text>
                        <Picker
                            selectedValue={selectedValueTypeHouse}
                            style={{ height: 50, width: '100%', alignItems: 'center' }}
                            onValueChange={(itemValue, itemIndex) => setSelectedValueTypeHouse(itemValue)}
                        >
                            {myContext.typeHouseAll && myContext.typeHouseAll.map((item, index) => {
                                return (
                                    <Picker.Item key={index} value={item.id} label={item.nameVi}></Picker.Item>
                                )

                            })}

                        </Picker>
                    </View>
                </View>
                <View
                    style={styles.contentInput}>
                    <Text style={styles.label}> Mô tả tiếng Việt</Text>
                    <TextInput
                        style={styles.inputTextArea}
                        multiline={true}
                        numberOfLines={5}
                    />
                </View>
                <View
                    style={styles.contentInput}>
                    <Text style={styles.label}> Mô tả tiếng Anh</Text>
                    <TextInput
                        style={styles.inputTextArea}
                        multiline={true}
                        numberOfLines={5}
                    />
                </View>
                <View style={styles.rowRight}>
                    <TouchableOpacity
                        style={styles.buttonUpload}
                    ><View style={styles.row}>
                            <Text style={styles.textWhite}>Tải ảnh</Text>
                            <MaterialCommunityIcons
                                name="file-image"
                                color='white' size={15}

                            />
                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                    >
                        <Text style={styles.textWhite}>Đăng bài</Text>
                    </TouchableOpacity>

                </View>

            </View>


        </SafeAreaView>
    )
}
export default NewPost;