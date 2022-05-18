import { StatusBar } from "react-native";
import { NetworkInfo } from 'react-native-network-info';
NetworkInfo.getIPAddress().then(ipAddress => {
    console.log(ipAddress);
});
export const URL = {
    LOCALHOST: "http://192.168.1.2:8080",
    GLOBALHOST: "https://nhatrovn2k.herokuapp.com"
}
export const heightLine = StatusBar.currentHeight;