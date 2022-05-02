import react, { useState } from 'react'
import { View, Text, TextInput, SafeAreaView, ScrollView, StatusBar } from 'react-native'
import { styles } from '../components/styles'
const NewPost = () => {
    const [text, onChangeText] = useState();

    return (

        <SafeAreaView
            style={{
                top: StatusBar.currentHeight + 10
            }}
        >
            <Text style={styles.titleBooking}>Bài đăng</Text>
            <View style={{ height: "30%", width: '100%', borderColor: 'red', borderWidth: 0.5 }}>
                <Text style={styles.label}>Tên nhà trọ</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                ></TextInput>
            </View>
        </SafeAreaView>
    )
}
export default NewPost;