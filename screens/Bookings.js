import { View, Text, SafeAreaView, Picker, StatusBar } from 'react-native'
import { styles } from '../components/styles';
import { useState, useEffect } from 'react';
import moment from 'moment';


const Bookings = ({ route, navigation }) => {
    let { item } = route.params;

    function setArrayTime() {
        const allDays = [];
        for (let i = 0; i <= 7; i++) {
            let obj = {};
            if (i === 0) {
                let ddMM = moment(new Date()).format('DD/MM');
                let today = `Today - ${ddMM}`;
                obj.label = today;
            }
            else obj.label = moment(new Date()).add(i, 'days').locale('vi').format('dddd - DD/MM');
            obj.value = moment(new Date()).add(i, 'days').startOf('day').valueOf();
            allDays.push(obj);

        }
        useEffect(() => {

        })

        return (

            <Picker

            >
                {allDays && allDays.map((item, index) => {
                    return (
                        <Picker.Item key={index} value={item.value} label={item.label}></Picker.Item>
                    )

                })}

            </Picker>
        )
    }
    return (

        <SafeAreaView
            style={styles.body}>
            <View
            >
                <Text style={styles.label}>Đặt lịch hẹn</Text>
                <Text style={styles.textBold}>Tên nhà trọ: {item.name}</Text>
                <Text style={styles.textBold}>Địa chỉ: {item.address}</Text>
                <Text style={styles.textBold}>Tel: {item.User.tel}</Text>
                <Text style={styles.textBold}>Mail: {item.User.email}</Text>

            </View>
            <View>
                <Text style={styles.label}> Chọn ngày</Text>
                {setArrayTime()}
            </View>


        </SafeAreaView>
    )
}
export default Bookings;