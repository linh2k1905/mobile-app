import { View, Text, ScrollView, Image, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { styles, MapHouse } from '../components/styles';
import MapView from 'react-native-maps';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors, ContentImageAndGetBook, ContentGetBooking } from '../components/styles';
const { teritary } = Colors;
import { heightLine } from './../constants'
const DetailHouse = ({ route, navigation }) => {
    let { item } = route.params;
    let lat = parseFloat(item.lat);
    let lang = parseFloat(item.lang);


    return (
        <SafeAreaView
            style={{ marginTop: heightLine + 10 }}
        >
            <ScrollView>
                <TouchableOpacity
                    style={
                        styles.comback}
                    onPress={() => { navigation.navigate('HomePage') }}
                >
                    <View style={styles.comback}>


                        <MaterialCommunityIcons
                            name="chevron-left"
                            color='white' size={30}

                        />
                        <Text style={styles.combackFont}>
                            Về trang chủ</Text></View>
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
                                <Text style={{
                                    fontWeight: '400',
                                    fontSize: 20
                                }}>Thông tin liên hệ</Text>
                                <Text>Chủ trọ: {item.User.lastName + " " + item.User.firstName}</Text>
                                <Text>Số điện thoại: {item.User.tel}</Text>

                                <Text>Email: {item.User.email}</Text>
                                <TouchableOpacity
                                    style={styles.bookingbtn}
                                    onPress={() => { navigation.navigate('Bookings', { item }) }}
                                ><Text
                                    style={{
                                        color: 'white',
                                        fontSize: 15

                                    }}>Đặt lịch hẹn</Text>

                                </TouchableOpacity>
                                <MaterialCommunityIcons
                                    name="cursor-pointer"
                                    color='gray' size={20}

                                />
                                <Text>Nhấn vào đây để đặt hẹn</Text>
                            </ContentGetBooking>
                        </ContentImageAndGetBook>
                        <Text
                            style={styles.textBold}
                        >Thông tin chi tiết</Text>

                        <View style={styles.infoHouse}><Text style={styles.cityInfoHouse} >Giá: {item.price / 1000000} Triệu</Text></View>
                        <View style={styles.infoHouse}><Text style={styles.cityInfoHouse}>Địa chỉ: {item.address}</Text></View>
                        <View style={styles.infoHouse}><Text style={styles.cityInfoHouse} >Thành phố: {item.City.name} </Text></View>
                        <View style={styles.infoHouse}><Text style={styles.cityInfoHouse} >Mô tả: </Text></View>
                        <View style={styles.infoHouse}><Text style={styles.cityInfoHouse} > {item.descriptionVi} </Text></View>

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
        </SafeAreaView>


    )
}

export default DetailHouse;