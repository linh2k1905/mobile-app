import react from 'react'
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import { useContext } from 'react';
import AppContext from './../components/AppContext';
import { styles } from './../components/styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { heightLine } from '../constants';
const User = ({ navigation }) => {
    const myContext = useContext(AppContext);
    let userInfo = myContext.userInfo;
    const Logout = async () => {
        myContext.goUser({});
        navigation.navigate('Login');
    }
    const handleChangePassword = () => {
        alert("Change Password");
        navigation.navigate("ChangePassword")
    }
    return (


        <SafeAreaView
            style={{ top: heightLine + 10 }}
        >

            {userInfo &&
                <View
                    style={{ justifyContent: 'center', alignItems: 'center', padding: 10 }}
                >
                    <Text style={styles.title}>Thông tin người dùng</Text>
                    <Image
                        source={{ uri: userInfo.image ? userInfo.image : 'https://icon-library.com/images/no-profile-pic-icon/no-profile-pic-icon-11.jpg ' }}
                        style={{ width: 150, height: 150, padding: 10 }}
                    />
                    <View
                        style={{ justifyContent: 'flex-end', padding: 10 }}
                    >

                        <Text style={styles.accountInfo}>Họ và tên: {userInfo.lastName + " " + userInfo.firstName}</Text>
                        <Text style={styles.accountInfo}>Số điện thoại: {userInfo.tel}</Text>
                        <Text style={styles.accountInfo}>Email: {userInfo.email}</Text>
                        <Text style={styles.accountInfo}>Địa chỉ: {userInfo.address}</Text>
                    </View>
                </View>
            }
            <View >
                <TouchableOpacity
                    onPress={() => navigation.navigate('AcountEdit')}
                >

                    <Text style={styles.acountFunction}> <MaterialCommunityIcons name="lead-pencil" size={16} />  Chỉnh sửa thông tin người dùng</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={handleChangePassword}


                >
                    <Text style={styles.acountFunction}><MaterialCommunityIcons name="onepassword" size={16} />  Đổi mật khẩu</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => Logout()}
                >
                    <Text style={styles.acountFunction}> <MaterialCommunityIcons name="logout" size={16} />  Đăng xuất</Text>
                </TouchableOpacity>


                <TouchableOpacity><Text style={styles.acountFunction}><MaterialCommunityIcons name="newspaper-variant-multiple" size={16} />  Xem bài đăng của bạn</Text></TouchableOpacity>
            </View>
        </SafeAreaView>

    )
}
export default User;