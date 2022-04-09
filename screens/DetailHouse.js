import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles, MapHouse } from '../components/styles';
const DetailHouse = ({ route, navigation }) => {
    let { item } = route.params;

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
            <MapHouse />


        </View>



    )
}

export default DetailHouse;