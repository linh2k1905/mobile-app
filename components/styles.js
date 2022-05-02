import styled from 'styled-components';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { withTheme } from 'styled-components';
import { heightLine } from './../constants'
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
        paddingBottom: 20,
        flexDirection: 'row',
        width: '100%',
        alignContent: 'center',
        alignItems: 'center'

    },
    containerHouseDetail: {
        marginTop: 10,


    },
    infoHouse: {
        flexDirection: 'column'
    },
    titleInfoHouse: {
        color: teritary,
        fontWeight: 'bold',

    },
    infoPrice: {
        backgroundColor: 'blue'

    },
    infoPriceText: {
        color: 'white',
        fontWeight: 'bold'

    },
    titleInfoHouseDetail: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
        paddingBottom: 10,
        alignItems: 'center'
    },
    priceInfoHouse: {
        color: teritary,
        fontWeight: 'bold'
    },
    cityInfoHouse: {
        color: 'blue',
        fontWeight: 'bold'

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
        color: "gray",
        backgroundColor: "blue",
        width: '50%',
        padding: 5,



    },
    body: {
        marginTop: StatusBar.currentHeight + 10,
        width: "100%",
        height: "100%"
    },

    title: {
        color: teritary,
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '600'

    },
    titleBooking: {
        color: teritary,
        fontSize: 30,
        textAlign: 'center',
        fontWeight: '800',
        padding: 10

    },
    titlePost: {
        color: teritary,
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 10

    },
    label: {
        color: teritary,
        fontSize: 20,
        textAlign: 'left',
        fontWeight: 'bold'

    },
    labelBlue: {
        color: 'blue',
        fontSize: 20,
        textAlign: 'left',
        fontWeight: 'bold'

    },
    accountInfo: {
        fontSize: 16,
        color: teritary,
        fontWeight: 'bold'
    },
    logout: {
        marginTop: heightLine + 10


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
        height: 38,
        width: '90%',
        margin: 12,
        marginRight: 20,
        color: teritary,
        borderWidth: 0.5,
        borderRadius: 5,
        padding: 10,


    },
    inputTextArea: {
        height: 50,
        width: '90%',
        margin: 12,
        marginRight: 20,
        color: teritary,
        borderWidth: 0.5,
        borderRadius: 5,
        padding: 10,


    },
    inputPrice: {
        height: 38,
        width: '90%',
        margin: 12,
        marginRight: 20,
        color: teritary,
        borderWidth: 0.5,
        borderRadius: 5,
        padding: 10,


    },
    inputEdit: {

        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor: teritary

    },
    button: {
        backgroundColor: teritary,
        width: 100,
        height: 30,
        borderRadius: 5,
        padding: 5,
        margin: 5
    },
    buttonUpload: {
        backgroundColor: 'gray',
        width: 100,
        height: 30,
        borderRadius: 2,
        padding: 5,
        margin: 5
    },
    buttonBlue: {
        backgroundColor: 'blue',
        width: 100,
        height: 30,
        borderRadius: 5,
        padding: 5,
        margin: 5,
    },
    litle: {
        color: teritary,
        fontSize: 15,
        textAlign: 'left',
        fontWeight: '600'
    },
    textBold: {
        fontWeight: 'bold',
        color: teritary,
        fontSize: 15,
        padding: 3

    },
    comback: {
        width: '100%',
        height: 35,
        backgroundColor: 'blue',
        flexDirection: 'row',
        padding: 3
    }
    ,
    combackFont: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
    ,
    rowLeft: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    rowRight: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: 10
    },
    textWhite: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold'
    },
    rowWithLeftRight: {
        flexDirection: 'row',
        width: '100%'
    },
    leftRow: {
        left: 0,
        width: '50%',
        alignContent: 'center'
    },
    rightRow: {
        right: 0,
        width: '50%'
    },
    guess: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'blue'
    },
    filterHouse: {
        width: '100%',
        height: 250,
        borderColor: 'white',
        borderWidth: 0.5,
        padding: 5
    },
    contentInput: {
        height: "14%",
        width: '100%',

    }



});
