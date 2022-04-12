import { View, Text, SafeAreaView, StatusBar } from 'react-native'
import { styles } from '../components/styles';


const Bookings = ({ route, navigation }) => {
    let { item } = route.params;
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
        </SafeAreaView>
    )
}
export default Bookings;