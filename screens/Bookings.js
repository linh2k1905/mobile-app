import { View, Text, SafeAreaView, Picker, TextInput, TouchableOpacity, Button } from 'react-native'
import { styles } from '../components/styles';
import { useState, useEffect } from 'react';
import { URL } from './../constants'
import moment from 'moment';
import { useContext } from 'react';
import AppContext from './../components/AppContext';
const Bookings = ({ route, navigation }) => {
    const { item } = route.params;
    const myContext = useContext(AppContext);
    let userInfo = myContext.userInfo;
    const [dateSelected, setDateSelected] = useState();
    const [timeSelected, setTimeSelected] = useState();
    const [mail, onChangeMailInput] = useState();
    const [time, setTime] = useState();
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
        function getScheduleFromServer(dateStr) {
            setDateSelected(dateStr);
            let owner = item.User.id;

            const url = URL.LOCALHOST + `/api/get-schedule-owner?id=${encodeURIComponent(owner)}&date=${encodeURIComponent(dateSelected)}`;
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
                    setTimeSelected(data);

                }).catch(err => { console.log(err) });
        }



        return (

            <Picker
                selectedValue={dateSelected}
                onValueChange={(itemValue, itemIndex) => getScheduleFromServer(itemValue)}

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
                style={{ width: "100%" }}
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
            <Text style={styles.label}> Chọn giờ</Text>

            <Picker
                selectedValue={time}
                onValueChange={(itemValue, itemIndex) => setTime(itemValue)}
                style={{
                    width: "50%",
                }}

            >
                {timeSelected && timeSelected.map((i, index) => {
                    return (

                        <Picker.Item key={index} value={i.time} label={i.time}></Picker.Item>
                    )
                })
                }

            </Picker>

            <View style={{ width: "70%" }}>
                <Text style={styles.label}>Nhập email để xác nhận</Text>
                <TextInput

                    style={styles.input}
                    onChangeText={onChangeMailInput}
                    value={mail}
                ></TextInput>
            </View>
            <View style={{ width: "70%" }}>
                <Text style={styles.label}>Nhập mật khẩu</Text>
                <TextInput

                    style={styles.input}
                    onChangeText={onChangeMailInput}
                    value={mail}
                ></TextInput>
            </View>
            <TouchableOpacity

                style={styles.button}>
                <Text>Xác nhận</Text>
            </TouchableOpacity>



        </SafeAreaView >
    )
}
export default Bookings;