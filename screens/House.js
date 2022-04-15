import react, { useState } from 'react'
import { View, Text, SafeAreaView, Picker, StatusBar, TouchableOpacity } from 'react-native'
import { styles } from '../components/styles';
const House = () => {
    const [selectedValue, setSelectedValue] = useState("java");
    const [selectedLanguage, setSelectedLanguage] = useState();
    const heightStatus = StatusBar.currentHeight;
    return (

        <SafeAreaView
            style={{ flex: 1, alignItems: 'flex-start', top: heightStatus + 10 }}
        >

            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            </View>
            <View style={{ padding: 10, width: '100%' }}>
                <Text style={styles.label}>Chọn thành phố</Text>
                <Picker
                    selectedValue={selectedValue}
                    style={{ height: 50, width: '100%', alignItems: 'center' }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>
                <Text style={styles.label}>Chọn giá</Text>
                <Picker
                    selectedValue={selectedValue}
                    style={{ height: 50, width: '100%' }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>
                <Text style={styles.label}>Chọn diện tích</Text>
                <Picker
                    selectedValue={selectedValue}
                    style={{ height: 50, width: '100%' }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>
                <Text style={styles.label}>Chọn loại phòng</Text>
                <Picker
                    selectedValue={selectedValue}
                    style={{ height: 60, width: '100%' }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>
                <TouchableOpacity
                    style={styles.button}>
                    <Text >Touch button</Text>
                </TouchableOpacity>

            </View>

        </SafeAreaView>
    )
}
export default House;