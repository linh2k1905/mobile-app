import react from 'react-native'
import { View, Text, TextInput } from 'react-native'
import { styles } from '../components/styles';

const House = () => {
    return (

        <View
            style={{ flex: 1, alignItems: 'center' }}
        >
            <Text style={styles.title}>Đây là trang tìm kiếm của trọ 123</Text>
            <Text style={styles.title}>Bắt đầu tìm kiếm</Text>
            <TextInput
                style={styles.input}
                placeholder="useless placeholder"

            />
        </View>
    )
}
export default House;