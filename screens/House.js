import React, { useState } from 'react'
import { View, Text, SafeAreaView, Picker, ScrollView, StatusBar, TouchableOpacity, Image } from 'react-native'
import { styles } from '../components/styles';
import { URL } from './../constants';
import Slider from '@react-native-community/slider';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const House = () => {
    const [selectedValueCity, setSelectedValueCity] = useState();
    const [selectedValuePrice, setSelectedValuePrice] = useState(0);
    const [selectedValueTypeHouse, setSelectedValueTypeHouse] = useState();
    const [selectedValueArea, setSelectedValueArea] = useState(0);
    const [city, setCity] = useState();
    const [typeHouse, setTypeHouse] = useState();
    const [filterHouse, setFilterHouse] = useState([]);
    const heightStatus = StatusBar.currentHeight;
    if (!city) {
        fetch(URL.LOCALHOST + '/api/getCity')
            .then(async res => {
                let response = await res.json();
                let data = response.data
                setCity(data);
            }).catch(err => { console.log(err) });
    }
    if (!typeHouse) {
        fetch(URL.LOCALHOST + '/api/getTypeHouse')
            .then(async res => {

                let response = await res.json();
                let data = response.data;
                setTypeHouse(data);

            }).catch(err => { console.log(err) });
    }
    function getAllHouseSearch(cityId, typeHouseId, area, price) {


        fetch(URL.LOCALHOST + `/api/get-filter-house-from-home?idTypeHouse=${encodeURIComponent(typeHouseId)}&idCity=${encodeURIComponent(cityId)}&price=${encodeURIComponent(price)}&area=${encodeURIComponent(area)}`,
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
                console.log(filterHouse);


            }).catch(err => { console.log(err) });
    }

    return (

        <SafeAreaView
            style={{ flex: 1, alignItems: 'flex-start', top: heightStatus + 10 }}
        >
            <ScrollView>


                <View style={{ padding: 10, width: '100%' }}>

                    <View style={{ flexDirection: 'row', width: '100%' }}>
                        <View style={{ left: 0, width: '50%' }}>
                            <Text style={styles.label}>Thành phố</Text>
                            <Picker
                                selectedValue={selectedValueCity}
                                style={{ height: 50, width: '100%', alignItems: 'center' }}
                                onValueChange={(itemValue, itemIndex) => setSelectedValueCity(itemValue)}
                            >
                                {city && city.map((item, index) => {
                                    return (
                                        <Picker.Item key={index} value={item.id} label={item.name}></Picker.Item>
                                    )

                                })}

                            </Picker>
                        </View>
                        <View style={{ right: 0, width: '50%' }}>
                            <Text style={styles.label}>Loại nhà</Text>
                            <Picker
                                selectedValue={selectedValueTypeHouse}
                                style={{ height: 50, width: '100%', alignItems: 'center' }}
                                onValueChange={(itemValue, itemIndex) => setSelectedValueTypeHouse(itemValue)}
                            >
                                {typeHouse && typeHouse.map((item, index) => {
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
                        value={20}
                        step={1}
                        onValueChange={(value) => setSelectedValueArea(parseInt(value))}
                    />
                    <Text style={styles.litle}>{selectedValueArea}m2</Text>

                    <Text style={styles.label}>Chọn Giá</Text>


                    < Slider
                        style={{ width: 200, height: 40 }}
                        minimumValue={0}
                        maximumValue={10}
                        value={2}
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

                </View>
                <View>
                    <Text style={styles.title}>Hiển thị kết quả gợi ý </Text>
                </View>

                {filterHouse && filterHouse.map((item, index) => {
                    return (
                        <TouchableOpacity
                            style={{ width: 500, height: 500, borderBottomColor: 'red' }}
                            key={index}
                            onPress={() => { navigation.navigate('DetailHouse', { item }) }}
                        >
                            <View>
                                <View ><Text style={styles.titleInfoHouse}>Tên nhà trọ:{item.name}</Text></View>
                                <View ><Text style={styles.infoPriceText} >Giá: {item.price / 1000000} Triệu</Text></View>
                                <View ><Text style={styles.addressInfoHouse}>Địa chỉ: {item.address}</Text></View>
                                <View><Text style={styles.cityInfoHouse} >Thành phố: {item.City.name} </Text></View>
                            </View>
                            <Image

                                source={{
                                    uri: item.image


                                }}

                            />
                        </TouchableOpacity>

                    )
                })}


            </ScrollView>
        </SafeAreaView>

    )
}
export default House;