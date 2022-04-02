import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './../screens/Login';
import Signup from './../screens/Signup';
import HomePage from '../screens/HomePage';
import { Colors } from '../components/styles';
const { primary, secondary, teritary } = Colors
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
                    headerTitle: '',


                }}
                initialRouteName='Login'>


                <Stack.Screen name='Signup' component={Signup} />
                <Stack.Screen name='HomePage' component={HomePage} />
                <Stack.Screen name='Login' component={Login} />

            </Stack.Navigator>

        </NavigationContainer>)

}
export default RootStack;