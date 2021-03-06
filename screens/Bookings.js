import { View, Text, SafeAreaView, Picker, TextInput, TouchableOpacity, Button } from 'react-native'
import { styles, Colors } from '../components/styles';
import { useState, useEffect } from 'react';
import { URL } from './../constants'
import moment from 'moment';
import { useContext } from 'react';
import AppContext from './../components/AppContext';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView } from 'react-native-gesture-handler';
const { teritary } = Colors
const Bookings = ({ route, navigation }) => {
    const { item } = route.params;
    const myContext = useContext(AppContext);
    let userInfo = myContext.userInfo;
    const [dateSelected, setDateSelected] = useState();
    const [timeSelected, setTimeSelected] = useState();
    const [mail, onChangeMailInput] = useState();
    const [time, setTime] = useState();
    const [password, setPassword] = useState();
    const [notice, setNotice] = useState();
    const owner = item.User;
    const [timeArr, setTimeArr] = useState([]);
    const getScheduleFromServer = async (date) => {

        let ownerId = owner.id;
        let url = URL.LOCALHOST + `/api/get-schedule-owner?id=${encodeURIComponent(ownerId)}&date=${encodeURIComponent(date)}`;
        console.log(url);
        await fetch(url,
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
                if (response.errorCode === 0) setTimeSelected(data);

            }).catch(err => { console.log(err) });
    }
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





        return (

            <Picker
                selectedValue={dateSelected}
                onValueChange={(itemValue, itemIndex) => {
                    handleChooseDate(itemValue);

                }}

            >
                {allDays.length > 0 && allDays.map((item, index) => {
                    return (
                        <Picker.Item key={index} value={item.value} label={item.label}></Picker.Item>
                    )

                })}

            </Picker>
        )
    }
    const handleChooseDate = async (value) => {
        await getScheduleFromServer(value);
        setDateSelected(value);
    }
    const checkInput = () => {


        if (!password || !mail) {
            alert("Vui l??ng ??i???n ????? th??ng tin ????? x??c th???c");
            return false;


        }
        else
            if (!dateSelected || !timeSelected) {
                alert("Vui l??ng ch???n ng??y gi???");
                return false;

            }


        return true
    }

    function postBooking() {
        let url = URL.LOCALHOST + "/api/user-booking";
        console.log(url);

        if (checkInput()) {
            let req = {};
            req.email = mail;
            req.password = password;
            req.date = dateSelected.toString();
            req.time = time;
            req.idHouse = item.id;
            req.desc = notice;
            req.nameOwner = item.User.firstName + " " + item.User.lastName;
            req.address = item.address;
            req.name = item.name;
            req.idHouse = item.id;
            req.firstName = userInfo.firstName;
            req.lastName = userInfo.lastName;
            fetch(url,
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'

                    },
                    body: JSON.stringify(

                        req
                    )
                }

            )
                .then(async res => {
                    let response = await res.json();
                    let data = response.data;
                    if (data.errorCode === 0) alert("?????t l???ch th??nh c??ng");
                    else {
                        alert(data.errorMessage);
                    }
                }).catch(err => { console.log(err) });
        }


    }
    return (

        <SafeAreaView
            style={styles.body}>
            <ScrollView>
                <View
                    style={{ width: "100%", padding: 10 }}
                >
                    <View
                        style={
                            styles.row
                        }
                    >
                        <MaterialCommunityIcons
                            name="calendar-heart"
                            color=
                            {teritary} size={30}

                        />
                        <Text style={styles.titleBooking}>?????t l???ch h???n</Text>
                    </View>
                    <Text style={styles.textBold}>T??n nh?? tr???: {item.name}</Text>
                    <Text style={styles.textBold}>?????a ch???: {item.address}</Text>
                    <Text style={styles.textBold}>Tel: {item.User.tel}</Text>
                    <Text style={styles.textBold}>Mail: {item.User.email}</Text>

                </View>
                <View>
                    <Text style={styles.label}> Ch???n ng??y</Text>
                    {setArrayTime()}
                </View>
                <Text style={styles.label}> Ch???n gi???</Text>

                <Picker
                    selectedValue={timeSelected}
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

                <View style={{ width: "100%" }}>
                    <View style={styles.rowLeft}>

                        <MaterialCommunityIcons
                            name="email"
                            color={teritary} size={25}

                        />
                        <Text style={styles.label}> Nh???p email ????? x??c nh???n </Text>
                    </View>


                    <TextInput

                        style={styles.input}
                        onChangeText={onChangeMailInput}
                        value={mail}
                    ></TextInput>
                </View>
                <View style={{ width: "100%" }}>
                    <View style={styles.rowLeft}>
                        <MaterialCommunityIcons
                            name="lock-open-alert"
                            color={teritary} size={25}

                        />
                        <Text style={styles.label}> Nh???p m???t kh???u </Text>
                    </View>

                    <TextInput

                        style={styles.input}
                        onChangeText={setPassword}
                        value={password}
                        secureTextEntry={true}
                    ></TextInput>
                </View>
                <View style={{ width: "100%" }}>
                    <View style={styles.rowLeft}>
                        <MaterialCommunityIcons
                            name="lead-pencil"
                            color={teritary} size={25}

                        />
                        <Text style={styles.label}> L???i nh???n</Text>
                    </View>

                    <TextInput

                        style={styles.input}
                        value={notice}
                        onChangeText={setNotice}

                    ></TextInput>
                </View>
                <View style={styles.rowRight}>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => postBooking()}
                    >
                        <Text style={styles.textWhite}>X??c nh???n</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('HomePage')}
                    >
                        <Text style={styles.textWhite}>????ng</Text>
                    </TouchableOpacity>
                </View>



            </ScrollView>
        </SafeAreaView >
    )
}
export default Bookings;