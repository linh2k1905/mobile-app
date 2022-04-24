import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, Picker, ScrollView, StatusBar, TouchableOpacity, Image } from 'react-native'
import { styles, Colors } from '../components/styles';
import { URL } from './../constants';
import Slider from '@react-native-community/slider';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useContext } from 'react';
import AppContext from './../components/AppContext';
const { teritary } = Colors;
import { heightLine } from './../constants'
const House = ({ navigation }) => {

    const myContext = useContext(AppContext);
    const [selectedValueCity, setSelectedValueCity] = useState();
    const [selectedValuePrice, setSelectedValuePrice] = useState(0);
    const [selectedValueTypeHouse, setSelectedValueTypeHouse] = useState('Choose');
    const [selectedValueArea, setSelectedValueArea] = useState(0);
    const [filterHouse, setFilterHouse] = useState([]);

    const heightStatus = StatusBar.currentHeight;

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
    }

    useEffect(() => {

        fetchAllTypeHouse();
        fetchAllCity();

    }, []);

    function getAllHouseSearch(cityId, typeHouseId, area, price) {

        const url = URL.LOCALHOST + `/api/get-filter-house-from-home-mobile?idTypeHouse=${encodeURIComponent(typeHouseId)}&idCity=${encodeURIComponent(cityId)}&price=${encodeURIComponent(price)}&area=${encodeURIComponent(area)}`;
        fetch(url,
            {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                }
            }

        )
            .then(async res => {
                let response = await res.json();
                let data = response.data;
                setFilterHouse(data);



            }).catch(err => { console.log(err) });
    }


    return (


        <SafeAreaView
            style={{ flex: 1, alignItems: 'flex-start', top: heightStatus + 10 }}
        >
            <ScrollView>
                <TouchableOpacity
                    style={{

                        width: '100%',
                        height: 20
                    }}
                    onPress={() => { navigation.navigate('HomePage') }}
                >
                    <View style={{ width: '100%', height: 30, backgroundColor: teritary, flexDirection: 'row' }}>


                        <MaterialCommunityIcons
                            name="chevron-left"
                            color='white' size={30}

                        />
                        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>
                            Về trang chủ</Text></View>
                </TouchableOpacity>


                <View style={{ padding: 10, width: '100%' }}>

                    <View style={{ flexDirection: 'row', width: '100%' }}>
                        <View style={{ left: 0, width: '50%' }}>
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
                        <View style={{ width: '50%' }}>
                            <Text style={styles.label}>Loại nhà</Text>
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

                    <Text style={styles.label}>Chọn diện tích</Text>
                    < Slider
                        style={{ width: 200, height: 40 }}
                        minimumValue={0}
                        maximumValue={40}
                        minimumTrackTintColor='red'
                        maximumTrackTintColor="#000000"
                        value={0}
                        step={1}
                        onValueChange={(value) => setSelectedValueArea(parseInt(value))}
                    />
                    <Text style={styles.litle}>{selectedValueArea}m2</Text>

                    <Text style={styles.label}>Chọn Giá</Text>


                    < Slider
                        style={{ width: 200, height: 40 }}
                        minimumValue={0}
                        maximumValue={10}
                        value={0}
                        minimumTrackTintColor='red'
                        maximumTrackTintColor="#000000"
                        onValueChange={(value) => setSelectedValuePrice(parseInt(value))}
                    />
                    <Text style={styles.litle}>{selectedValuePrice}Triệu</Text>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => getAllHouseSearch(selectedValueCity, selectedValueTypeHouse, selectedValueArea, selectedValuePrice)}>
                        <Text >Tìm kiếm   <MaterialCommunityIcons name="home-search" color={'#00008B'} size={20} /></Text>
                    </TouchableOpacity>

                </View >
                <View style={{ flexDirection: 'row', padding: 10 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'red' }}>Hiển thị kết quả gợi ý </Text>
                </View>

                {filterHouse.length > 0 && filterHouse.map((item, index) => {
                    return (

                        <View
                            style={{ width: '100%', height: 250, borderColor: teritary, borderWidth: 0.5, padding: 5 }}
                            key={index}
                        >
                            <View ><Text style={styles.titleInfoHouse}>Tên nhà trọ:{item.name}</Text></View>
                            <View ><Text style={styles.infoPriceText} >Giá: {item.price / 1000000} Triệu</Text></View>
                            <View ><Text style={styles.addressInfoHouse}>Địa chỉ: {item.address}</Text></View>
                            <View><Text style={styles.cityInfoHouse} >Thành phố: {item.City.name} </Text></View>
                            <Image
                                source={{
                                    uri: item.image
                                }}
                                style={{
                                    width: 200,
                                    height: 150,
                                    resizeMode: 'cover',
                                }
                                }
                            />

                        </View>


                    )
                })}


            </ScrollView>
        </SafeAreaView>

    )
}
export default House;