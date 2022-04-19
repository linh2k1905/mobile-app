import react, { useState } from 'react'
import { View, Text, SafeAreaView, Picker, StatusBar, TouchableOpacity } from 'react-native'
import { styles } from '../components/styles';
import { URL } from './../constants'
const House = () => {
    const [selectedValue, setSelectedValue] = useState("City");
    const [city, setCity] = useState();
    const heightStatus = StatusBar.currentHeight;
    fetch(URL.LOCALHOST + '/api/getCity')
        .then(async res => {
            let response = await res.json();
            let data = response.data
            setCity(data);
        });
    function CitySelection() {

        return (
            <Picker
                selectedValue={selectedValue}
                style={{ height: 50, width: '100%', alignItems: 'center' }}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                {city && city.map((item) => {
                    return (
                        <Picker.Item value={item.id} label={item.name}></Picker.Item>
                    )

                })}

            </Picker>
        )

    }
    return (

        <SafeAreaView
            style={{ flex: 1, alignItems: 'flex-start', top: heightStatus + 10 }}
        >

            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            </View>
            <View style={{ padding: 10, width: '100%' }}>
                <Text style={styles.label}>Chọn thành phố</Text>


                {CitySelection()}

                <Text style={styles.label}>Chọn giá</Text>
                <Picker
                    selectedValue={selectedValue}
                    style={{ height: 50, width: '100%' }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>
                <Text style={styles.label}>Chọn diện tích</Text>
                <Picker
                    selectedValue={selectedValue}
                    style={{ height: 50, width: '100%' }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>
                <Text style={styles.label}>Chọn loại phòng</Text>
                <Picker
                    selectedValue={selectedValue}
                    style={{ height: 60, width: '100%' }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>
                <TouchableOpacity
                    style={styles.button}>
                    <Text >Touch button</Text>
                </TouchableOpacity>

            </View>

        </SafeAreaView>
    )
}
export default House;