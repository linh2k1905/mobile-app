import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { URL } from '../constants';

const Home = ({ navigation }) => {

    const [home, setHome] = useState([]);
    function getAllHouseFromServer() {

        fetch(
            URL.LOCALHOST + '/api/get-all-home-to-mobile'
        ).then(async (res) => {
            let response = await res.json();
            let homes = response.data;
            setHome(homes);


        });



        return (<View>
            {home.length > 0 && home.map((item, index) => {
                return (
                    <TouchableOpacity
                        style={styles.containerHouse}
                        key={index}
                        onPress={() => { navigation.navigate('DetailHouse', { item }) }}
                    >
                        <View style={styles.imageHouse}>
                            <View style={styles.infoHouse}><Text style={styles.titleInfoHouse}>Tên nhà trọ:{item.name}</Text></View>
                            <View style={styles.infoHouse}><Text style={styles.priceInfoHouse} >Giá: {item.price / 1000000} Triệu</Text></View>
                            <View style={styles.infoHouse}><Text style={styles.addressInfoHouse}>Địa chỉ: {item.address}</Text></View>
                            <View style={styles.infoHouse}><Text style={styles.cityInfoHouse} >Thành phố: {item.City.name} </Text></View>
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
        </View>
        )
    }


    return (

        <View>

            {getAllHouseFromServer()}

        </View>
    )
}
const styles = StyleSheet.create({
    containerHouse: {
        paddingTop: 10,
        flexDirection: 'row',
        width: '100%'
    },
    infoHouse: {
        flexDirection: 'column'
    },
    titleInfoHouse: {
        color: 'red',
        fontWeight: 'bold'
    },
    priceInfoHouse: {
        color: 'blue',
        fontWeight: 'bold'
    },
    cityInfoHouse: {
        color: 'green',
        fontWeight: '400'

    },
    addressInfoHouse: {
        color: 'blue'
    },
    imageHouse: {
        width: '50%',
        height: 150,
        resizeMode: 'cover',



    },
});
export default Home;