import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './../screens/Login';
import Signup from './../screens/Signup';
import HomePage from '../screens/HomePage';
import DetailHouse from '../screens/DetailHouse';
import Home from '../screens/Home';
import { Colors } from '../components/styles';
import Bookings from '../screens/Bookings';
const { teritary } = Colors
const Stack = createNativeStackNavigator();

const RootStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgoundColor: 'transparent'
                    },
                    headerTintColor: teritary,
                    headerShown: false


                }}
                initialRouteName='Login'>


                <Stack.Screen name='Signup' component={Signup} />
                <Stack.Screen name='HomePage' component={HomePage} />
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='DetailHouse' component={DetailHouse} />
                <Stack.Screen name='Bookings' component={Bookings} />

            </Stack.Navigator>

        </NavigationContainer>)

}
export default RootStack;