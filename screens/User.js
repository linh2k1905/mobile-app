import react from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useContext } from 'react';
import AppContext from './../components/AppContext';
import { styles } from './../components/styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ToastAndroid } from 'react-native-web';
const User = ({ navigation }) => {
    const myContext = useContext(AppContext);
    let userInfo = myContext.userInfo;
    const Logout = () => {
        myContext.userInfo = {};
        navigation.navigate('Login');
    }
    return (


        <View >
            <View style={styles.logout}>
                <TouchableOpacity
                    onPress={() => Logout()}

                >
                    <Text style={styles.accountInfo}> Đăng xuất <MaterialCommunityIcons name="logout" size={16} /></Text>


                </TouchableOpacity>
            </View>
            {userInfo &&
                <View
                    style={{ justifyContent: 'center', alignItems: 'center', padding: 10 }}
                >
                    <Text style={styles.title}>Thông tin người dùng</Text>
                    <Image
                        source={{ uri: userInfo.image || 'https://icon-library.com/images/no-profile-pic-icon/no-profile-pic-icon-11.jpg ' }}
                        style={{ width: 100, height: 100, padding: 10 }}
                    />
                    <View
                        style={{ justifyContent: 'flex-end', padding: 10 }}
                    >

                        <Text style={styles.accountInfo}>Họ và tên: {userInfo.firstName + " " + userInfo.lastName}</Text>
                        <Text style={styles.accountInfo}>Số điện thoại: {userInfo.tel}</Text>
                        <Text style={styles.accountInfo}>Email: {userInfo.email}</Text>
                        <Text style={styles.accountInfo}>Địa chỉ: {userInfo.address}</Text>
                    </View>
                </View>
            }
            <View >
                <TouchableOpacity
                >

                    <Text style={styles.acountFunction}> <MaterialCommunityIcons name="lead-pencil" size={16} />  Chỉnh sửa thông tin người dùng</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.acountFunction}><MaterialCommunityIcons name="onepassword" size={16} />  Đổi mật khẩu</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => Logout()}
                >
                    <Text style={styles.acountFunction}> <MaterialCommunityIcons name="logout" size={16} />  Đăng xuất</Text>
                </TouchableOpacity>


                <TouchableOpacity><Text style={styles.acountFunction}><MaterialCommunityIcons name="newspaper-variant-multiple" size={16} />  Xem bài đăng của bạn</Text></TouchableOpacity>
            </View>
        </View>

    )
}
export default User;