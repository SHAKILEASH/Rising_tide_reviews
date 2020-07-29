import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {TouchableOpacity, StyleSheet, Text, Image, View, TextInput, Button, Alert, ActivityIndicato,ToastAndroid} from 'react-native';
import QRCode from 'react-native-qrcode-svg';




//npm install react-native-qrcode --save

class QR_CODE extends Component {
    constructor() {
        super();
        this.state = {
          defaultValue: 'NONE',
          // Default Value of the TextInput
          valueForQRCode: 'www.google.com',
          // Default value for the QR Code
        };
      }
      getTextInputValue = () => {
        // Function to get the value from input
        // and Setting the value to the QRCode
        this.setState({ valueForQRCode: this.state.inputValue });
      };
    
    render() {
        return (
          <View style={styles.container}>
            <Text style = {{marginLeft:0,backgroundColor:"#d9d9d9",height:"10%",textAlign: 'center',fontWeight: 'bold',weight:"100%",fontSize: 18,padding:20}}>REQUEST REQUEST CODE</Text>  
            <View style = {{alignItems:"center",justifyContent: "center",padding:"10%"}}>
            <Text style = {{fontSize:20,textAlign: 'center'}}> Scan The Code To Submit Your Review</Text></View>
            <View style = {{alignItems:"center",justifyContent: "center",padding:"0%"}}>
            
             <QRCode
              //QR code value
                value={this.state.valueForQRCode ? this.state.valueForQRCode : this.state.defaultValue}
                size={250}
                color="black"
                backgroundColor="white"
            />
            </View>
            
            <View style={{position: 'absolute', left: 0, right: 0, bottom: 0,backgroundColor:"#1792D5",width:"100%"}}><Text> </Text></View>
          </View>
        );
      }
    }
    
    const styles = StyleSheet.create({
        container: {
            fontFamily: "SourceSansPro-Bold",
            flex: 1,
            display: "flex",
            flexDirection: "column", 
            justifyContent: "flex-start",
            padding: 0,
            backgroundColor: '#fff'
          },
      
    });
    
  export default QR_CODE;