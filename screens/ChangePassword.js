import { NavigationContainer } from '@react-navigation/native';
import react from 'react-native'
import { StatusBar, View, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native'
import { styles } from './../components/styles'
const chieucao = StatusBar.currentHeight + 10;
const NewPost = ({ navigation }) => {
    return (
        <SafeAreaView

            style={{ top: chieucao }}>
            <View>
                <Text style={styles.title}>Đổi mật khẩu </Text>
                <Text style={styles.label}


                >   Nhập mật khẩu cũ </Text>

                <TextInput
                    style={styles.inputEdit}
                    secureTextEntry={true}
                />

                <Text style={styles.label}>   Mật Khẩu Mới </Text>
                <TextInput
                    style={styles.inputEdit}
                    secureTextEntry={true}

                />
                <Text style={styles.label}>   Nhập lại mật khẩu</Text>
                <TextInput
                    style={styles.inputEdit}
                    secureTextEntry={true}

                />
            </View>
            <View

                style={styles.rowRight}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => { navigation.navigate("HomePage") }}
                >
                    <Text style={styles.textWhite}>
                        Trở lại
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                >
                    <Text style={styles.textWhite}>
                        Đổi mật khẩu
                    </Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}
export default NewPost;