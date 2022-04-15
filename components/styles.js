import styled from 'styled-components';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { withTheme } from 'styled-components';

export const Colors = {
    primary: "#ffffff",
    secondary: "#E5E7EB",
    teritary: "#1F2973",
    brand: "#6D28D9",
    green: "#10B981",
    red: "#EF4444",
    darklight: '#F0FFFF'

}
const { primary, secondary, teritary, brand, red, green, darklight } = Colors;
export const StyleContainer = styled.View`
flex:1;
padding:25px;
padding-top:  10px;
background-color:${primary}

`
export const InnerContainer = styled.View`

flex:1;
width:100%;
justify-content:center;



`
export const PageLogo = styled.Image`
width:200px;
height:150px;
margin:40px 40px;
margin-left:70px


`
export const PageTitle = styled.Text`
font-size:30px;
text-align:center;
font-weight:bold;
color:${brand};
padding:10px
`
export const Subtitle = styled.Text`
font-size:10px;
margin-bottom:20px;
letter-spacing:1px;
color:${teritary}
text-align:center
`
export const StyledFormArea = styled.View`
width:90%;
`
export const StyleTextInput = styled.TextInput`
    padding:15px;
    padding-left:55px;
    padding-right:55px;
    border-radius:5px;
    font-size:20px;
    height:60px;
    margin-vertical:3px;
    border:1px solid ${primary}
    
`
export const StyleInputLabel = styled.Text`
color:${teritary}
font-size:13px;
text-align:left
`
export const StyleLeftIcon = styled.View`
left:15px;
top:38px;
position:absolute;
z-index:1

`
export const StyleRightIcon = styled.TouchableOpacity`
right:15px;
top:38px;
position:absolute;
font-size:10px;
z-index:1

`

export const StyleButton = styled.TouchableOpacity`
padding:10px;
border-radius:5px;
background-color:${brand};
font-size:16px
${(props) => props.google == true && `
background-color:${red}
justify-content:center;
flex-direction:row;
`}

`
export const ButtonText = styled.Text`

background-color:${brand};
justify-content:center;
border-radius:5px;
align-items:center;
text-align:center

${(props) => props.google == true && `
margin:10px
background-color:${red}
justify-content:center;
font-size:10px;
align-items:center;

`}
`;
export const MessageBox = styled.Text`
 text-align:center;
 font-size:13px;
`;
export const Line = styled.View`
height: 2px;
width:100%;
background-color: ${darklight}
`;
export const ExtraView = styled.View`
justify-content:center;
flex-direction:row;
align-items:center;
padding:10px;
`
export const ExtraText = styled.Text`
justify-content:center;
align-items:center;
font-size:15px;

`
export const TextLink = styled.TouchableOpacity`
justify-content:center;
align-items:center;
`

export const TextLinkContent = styled.Text`
color:${brand}
font-size:15px;

`
export const MapHouse = styled.View`
width:100%;
height:350px;
`
export const ContentImageAndGetBook = styled.View`
width:100%;
flex-direction:row
`
export const ContentGetBooking = styled.View`
width:50%;

`
export const styles = StyleSheet.create({
    containerHouse: {
        paddingTop: 10,
        flexDirection: 'row',
        width: '100%'
    },
    containerHouseDetail: {
        marginTop: 10,


    },
    infoHouse: {
        flexDirection: 'column'
    },
    titleInfoHouse: {
        color: 'red',
        fontWeight: 'bold',

    },
    titleInfoHouseDetail: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 30,
        paddingBottom: 10,
        alignItems: 'center'
    },
    priceInfoHouse: {
        color: 'blue',
        fontWeight: 'bold'
    },
    cityInfoHouse: {
        color: 'green',
        fontWeight: '400'

    },
    addressInfoHouse: {
        color: 'blue'
    },
    imageHouse: {
        width: '50%',
        height: 150,
        resizeMode: 'cover',



    },
    bookingbtn: {
        color: "white",
        backgroundColor: "blue",
        width: 80,
        marginLeft: 10

    },
    body: {
        margin: StatusBar.currentHeight + 10,
    },

    title: {
        color: teritary,
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '600'

    },
    label: {
        color: teritary,
        fontSize: 20,
        textAlign: 'left',
        fontWeight: '600'

    },
    accountInfo: {
        fontSize: 16,
        color: teritary,
        fontWeight: 'bold'
    },
    logout: {
        alignItems: 'flex-end',
        marginEnd: 20,

    },
    acountFunction: {
        fontSize: 20,
        color: teritary,
        fontStyle: 'italic',
        padding: 20,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5

    },
    input: {
        height: 40,
        width: '90%',
        margin: 12,
        color: teritary,
        borderWidth: 0.5,
        padding: 10,


    },
    button: {
        backgroundColor: 'blue',
        width: 100,
        borderRadius: 5,
        padding: 5,
        justifyContent: 'flex-end'
    }

});
