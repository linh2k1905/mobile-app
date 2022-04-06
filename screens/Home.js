import react from 'react-native'
import { View, Text } from 'react-native'
import { URL } from '../constants'
const getAllHouseFromServer = () => {

    fetch(
        URL.LOCALHOST + '/api/get-all-home'
    ).then(async (res) => {
        let response = await res.json();
        return response;
    });



}
const Home = () => {


    return (

        <View>
            <Text>Home</Text>
        </View>
    )
}
export default Home;