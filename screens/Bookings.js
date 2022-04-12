import { View, Text, SafeAreaView, StatusBar } from 'react-native'
import { styles } from '../components/styles';
import { useState } from 'react';
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
            else obj.label = moment(new Date()).add(i, 'days').locale('en').format('dddd - DD/MM');
            obj.value = moment(new Date()).add(i, 'days').startOf('day').valueOf();
            allDays.push(obj);

        }

        return (
            allDays && allDays.length && allDays.map((item) => {
                return (
                    <View>
                        <Text>{item.label}</Text>
                    </View>
                )
            })

        )
    }
    return (

        <SafeAreaView
            style={styles.body}>
            <View
            >
                <Text style={styles.title}>Đặt lịch hẹn</Text>
                <Text>Tên nhà trọ: {item.name}</Text>
                <Text>Địa chỉ: {item.address}</Text>
                <Text>Sđt chủ trọ: {item.User.tel}</Text>
                <Text>Email: {item.User.email}</Text>

            </View>
            {setArrayTime()}

        </SafeAreaView>
    )
}
export default Bookings;