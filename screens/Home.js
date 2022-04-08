import { View, Text, Image, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { URL } from '../constants';
const Home = () => {
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
                    <View key={index}>
                        <Text >{item.name}</Text>
                        <Text >{item.price / 1000000}</Text>
                        <Image

                            source={{
                                uri: item.image


                            }}
                            style={{ height: 200, width: 250 }}
                        />
                    </View>


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
    container: {
        paddingTop: 50,
    },
    stretch: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
        borderColor: 'red',
        borderWidth: 1


    },
});
export default Home;