import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles, MapHouse } from '../components/styles';
import
MapView from 'react-native-maps'
const DetailHouse = ({ route, navigation }) => {
    let { item } = route.params;
    let lat = parseFloat(item.lat);
    let lang = parseFloat(item.lang);


    return (

        <View
            style={styles.containerHouseDetail}
        >

            <View style={styles.imageHouseDetail}>
                <View style={styles.titleInfoHouseDetail}><Text style={styles.titleInfoHouseDetail}>{item.name}</Text></View>
                <Image
                    source={{
                        uri: item.image
                    }}
                    style={styles.imageHouse}
                />

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

                    />


                </MapView>
            </MapHouse>


        </View>



    )
}

export default DetailHouse;