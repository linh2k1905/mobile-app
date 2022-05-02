import { View, Text, Image, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { URL, heightLine } from '../constants';
import usePrevious from '../constants/usePrevious'
import { styles } from './../components/styles';
import { useContext } from 'react';
import AppContext from './../components/AppContext';
const Home = ({ navigation }) => {
    const myContext = useContext(AppContext);
    const [home, setHome] = useState();
    function getAllHouseFromServer() {
        setTimeout(() => { }, 6000);

        fetch(
            URL.LOCALHOST + "/api/get-all-home-to-mobile"
        ).then(async (res) => {

            let response = await res.json();
            let homes = response.data;
            setHome(homes);

        }).catch((err) => {
            console.log(err);
        });




    }

    if (!home) getAllHouseFromServer();




    return (

        <View>
            <SafeAreaView
                style={{ top: heightLine + 10 }}
            >
                <ScrollView>
                    {home && home.map((item, index) => {
                        return (
                            <TouchableOpacity
                                style={styles.containerHouse}
                                key={index}
                                onPress={() => { navigation.navigate('DetailHouse', { item }) }}
                            >
                                <View style={styles.imageHouse}>
                                    <View style={styles.infoPrice}><Text style={styles.infoPriceText}>{item.name}</Text></View>

                                    <View style={styles.infoHouse}><Text style={styles.addressInfoHouse}>Địa chỉ: {item.address}</Text></View>
                                    <View style={styles.infoHouse}><Text style={styles.cityInfoHouse} >Thành phố: {item.City.name} </Text></View>
                                    <View style={styles.infoHouse}><Text style={styles.cityInfoHouse} >Điện thoại: {item.User.tel} </Text></View>
                                    <View style={styles.infoHouse}><Text style={styles.cityInfoHouse} >Diện tích: {item.area} m2</Text></View>
                                    <View style={styles.infoHouse}><Text style={styles.cityInfoHouse} >Giá: {item.price / 1000000} Triệu</Text></View>
                                </View>
                                <Image

                                    source={{
                                        uri: item.image


                                    }}
                                    style={styles.imageHouse}
                                />
                            </TouchableOpacity>


                        )
                    })}
                </ScrollView>
            </SafeAreaView>


        </View>
    )
}

export default Home;