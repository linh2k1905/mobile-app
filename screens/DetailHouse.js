import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { styles, MapHouse } from '../components/styles';
import MapView from 'react-native-maps';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors, ContentImageAndGetBook, ContentGetBooking } from '../components/styles';
const { red } = Colors;
const DetailHouse = ({ route, navigation }) => {
    let { item } = route.params;
    let lat = parseFloat(item.lat);
    let lang = parseFloat(item.lang);


    return (
        <ScrollView>
            <TouchableOpacity
                style={{ marginTop: 10 }}
                onPress={() => { navigation.navigate('Home'), item }}
            >
                <Text style={{ color: red }}> <MaterialCommunityIcons name="home" color={red} size={20} /> Về trang chủ</Text>
            </TouchableOpacity>
            <View
                style={styles.containerHouseDetail}
            >

                <View style={styles.imageHouseDetail}>
                    <View style={styles.titleInfoHouseDetail}><Text style={styles.titleInfoHouseDetail}>{item.name}</Text></View>
                    < ContentImageAndGetBook>
                        <Image
                            source={{
                                uri: item.image
                            }}
                            style={styles.imageHouse}
                        />
                        <ContentGetBooking>
                            <Text>Đặt lịch hẹn</Text>
                            <Text>Chủ trọ: {item.User.firstName + " " + item.User.lastName}</Text>
                            <Text>Số điện thoại: {item.User.tel}</Text>
                            <Text>Email: {item.User.email}</Text>
                            <TouchableOpacity
                                style={styles.bookingbtn}
                                onPress={() => { navigation.navigate('Bookings', { item }) }}
                            ><Text
                                style={{ color: 'white' }}>Đặt lịch hẹn</Text></TouchableOpacity>





                        </ContentGetBooking>
                    </ContentImageAndGetBook>

                    <View style={styles.infoHouse}><Text style={styles.priceInfoHouse} >Giá: {item.price / 1000000} Triệu</Text></View>
                    <View style={styles.infoHouse}><Text style={styles.addressInfoHouse}>Địa chỉ: {item.address}</Text></View>
                    <View style={styles.infoHouse}><Text style={styles.cityInfoHouse} >Thành phố: {item.City.name} </Text></View>
                    <View style={styles.infoHouse}><Text style={styles.cityInfoHouse} >Thành phố: {item.descriptionVi} </Text></View>
                    <View style={styles.infoHouse}><Text style={styles.cityInfoHouse} >Thành phố: {item.descriptionEn} </Text></View>
                </View>
                <View style={styles.titleInfoHouseDetail}><Text style={styles.titleInfoHouseDetail} >Xem bản đồ </Text></View>
                <MapHouse>
                    <MapView
                        style={{ height: 500, width: 500 }}
                        region={
                            {
                                latitude: lat,
                                longitude: lang,
                                latitudeDelta: 0.015,
                                longitudeDelta: 0.01
                            }

                        }

                    >
                        <MapView.Marker
                            coordinate={{
                                latitude: lat,
                                longitude: lang
                            }}
                            title={item.name}
                            description={item.address}

                        />


                    </MapView>
                </MapHouse>


            </View>
        </ScrollView>


    )
}

export default DetailHouse;