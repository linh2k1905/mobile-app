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
    const [selectedValuePrice, setSelectedValuePrice] = useState();
    const [selectedValueTypeHouse, setSelectedValueTypeHouse] = useState();
    const [selectedValueArea, setSelectedValueArea] = useState();
    const [filterHouse, setFilterHouse] = useState([]);
    const [isSearch, setIsSearch] = useState(false);
    const heightStatus = StatusBar.currentHeight;
    const checkSearch = () => {
        if (!selectedValueCity) {
            alert("Hãy chọn thành phố");
            return false;
        }
        return true;
    }
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
        setIsSearch(true);
        if (cityId) {
            if (!typeHouseId || !area || !price) {
                console.log(URL.LOCALHOST + `/api/get-all-home-by-city?idCity=${cityId}`);
                fetch(URL.LOCALHOST + `/api/get-all-home-by-city-from-mobile?idCity=${cityId}`,
                    {
                        method: 'GET',
                        headers: {
                            Accept: 'application/json',
                        }
                    }

                )
                    .then(async res => {
                        let response = await res.json();
                        if (response.errorCode === 0) {
                            let data = response.data;
                            setFilterHouse(data);
                        }
                        else {
                            alert("Có lỗi xảy ra. Hãy thử lại")
                        }




                    }).catch(err => { console.log(err) });

            }
            else {
                const url = URL.LOCALHOST + `/api/get-filter-house-from-home-mobile?idTypeHouse=${encodeURIComponent(typeHouseId)}&idCity=${encodeURIComponent(cityId)}&price=${encodeURIComponent(price)}&area=${encodeURIComponent(area)}`;
                console.log(url);
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
                        if (response.errorCode === 0) {
                            let data = response.data;
                            setFilterHouse(data);
                        }





                    }).catch(err => { console.log(err) });
            }
        }
    }





    return (


        <SafeAreaView
            style={{ flex: 1, alignItems: 'flex-start', top: heightStatus + 10 }}
        >
            <ScrollView>
                <TouchableOpacity
                    style={styles.comback}
                    onPress={() => { navigation.navigate('HomePage') }}
                >
                    <View style={styles.comback}>


                        <MaterialCommunityIcons
                            name="chevron-left"
                            color='white' size={30}

                        />
                        <Text style={styles.combackFont}>
                            Về trang chủ</Text></View>
                </TouchableOpacity>


                <View style={{ padding: 10, width: '100%' }}>

                    <View style={styles.rowWithLeftRight}>
                        <View style={styles.leftRow}>
                            <Text style={styles.labelBlue}>Thành phố</Text>
                            <Picker
                                selectedValue={selectedValueCity}
                                style={{ height: 50, width: '100%', alignItems: 'center' }}
                                onValueChange={(itemValue, itemIndex) => setSelectedValueCity(itemValue)}
                            >
                                <Picker.Item label="Chọn tên thành phố"></Picker.Item>
                                {myContext.city && myContext.city.map((item, index) => {
                                    return (
                                        <Picker.Item key={index} value={item.id} label={item.name}></Picker.Item>
                                    )

                                })}

                            </Picker>
                        </View>
                        <View style={styles.rightRow}>
                            <Text style={styles.labelBlue}>Loại nhà</Text>
                            <Picker
                                selectedValue={selectedValueTypeHouse}
                                style={{ height: 50, width: '100%', alignItems: 'center' }}
                                onValueChange={(itemValue, itemIndex) => setSelectedValueTypeHouse(itemValue)}
                            >
                                <Picker.Item label="Hình thức thuê"></Picker.Item>
                                {myContext.typeHouseAll && myContext.typeHouseAll.map((item, index) => {
                                    return (
                                        <Picker.Item key={index} value={item.id} label={item.nameVi}></Picker.Item>
                                    )

                                })}

                            </Picker>
                        </View>
                    </View>
                    <View style={styles.rowWithLeftRight}>
                        <View style={styles.leftRow}>
                            <Text style={styles.labelBlue}>Chọn diện tích</Text>
                            < Slider
                                style={{ width: 150, height: 40 }}
                                minimumValue={0}
                                maximumValue={60}
                                minimumTrackTintColor={teritary}
                                maximumTrackTintColor="blue"
                                value={0}
                                step={1}
                                onValueChange={(value) => setSelectedValueArea(parseInt(value))}
                            />
                            <Text style={styles.litle}>{selectedValueArea}m2</Text>
                        </View>
                        <View
                            style={styles.rightRow}
                        >
                            <Text style={styles.labelBlue}>Chọn Giá</Text>


                            < Slider
                                style={{ width: 150, height: 40 }}
                                minimumValue={0}
                                maximumValue={10}
                                value={0}
                                minimumTrackTintColor={teritary}
                                maximumTrackTintColor="blue"
                                onValueChange={(value) => setSelectedValuePrice(parseInt(value))}
                            />
                            <Text style={styles.litle}>{selectedValuePrice}Triệu</Text>
                        </View>

                    </View>


                    <View style={styles.rowRight}>
                        <TouchableOpacity
                            style={styles.buttonBlue}
                            onPress={() => getAllHouseSearch(selectedValueCity, selectedValueTypeHouse, selectedValueArea, selectedValuePrice)}>
                            <View
                                style={styles.row}
                            >
                                <Text style={styles.textWhite}>Tìm kiếm</Text>
                                <MaterialCommunityIcons name="home-search" color='white' size={20} />
                            </View>

                        </TouchableOpacity>
                    </View>


                </View >
                <View style={{ flexDirection: 'row', padding: 5 }}>
                    <Text style={styles.guess}>Hiển thị kết quả gợi ý </Text>
                </View>

                {filterHouse.length > 0 ? filterHouse.map((item, index) => {
                    return (

                        <TouchableOpacity
                            style={styles.filterHouse}
                            key={index}
                            onPress={() => { navigation.navigate('DetailHouse', { item }) }}
                        >
                            <View ><Text style={styles.cityInfoHouse}>Tên nhà trọ:{item.name}</Text></View>
                            <View ><Text style={styles.cityInfoHouse} >Giá: {item.price / 1000000} Triệu</Text></View>
                            <View ><Text style={styles.cityInfoHouse} >Diện tích: {item.area} m2</Text></View>
                            <View ><Text style={styles.cityInfoHouse}>Địa chỉ: {item.address}</Text></View>
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

                        </TouchableOpacity>


                    )
                }) :

                    isSearch ?
                        <Text
                            style={{
                                padding: 50,
                                color: 'black',
                                opacity: 0.5,
                                fontSize: 20,
                                textAlign: 'center'
                            }}
                        >Không tìm thấy kết quả phù hợp</Text>
                        : <Text
                            style={{
                                padding: 50,
                                color: 'black',
                                opacity: 0.5,
                                fontSize: 20,
                                textAlign: 'center'
                            }}
                        ></Text>}


            </ScrollView>
        </SafeAreaView>

    )
}
export default House;