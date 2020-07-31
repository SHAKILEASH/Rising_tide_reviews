import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {TouchableOpacity, StyleSheet, Text, Image, View, TextInput, Button, Alert, ActivityIndicato,ToastAndroid} from 'react-native';
import QRCode from 'react-native-qrcode-svg';




//npm install react-native-qrcode --save

class editPlatform extends Component {
    constructor(props) {
        super(props);
        this.state = {
          defaultValue: 'NONE',
        };
        this.name = this.props.route.params.platform.slice(6);
       
        if (this.name == "Google")
        {
            this.url = require("./assets/icons/ICONS/11.png");
        }
        else if(this.name == "Fb")
        { 
            this.name = "Facebook";
            this.url = require("./assets/icons/ICONS/12.png");
        }
        else if(this.name = "Bui")
        {
            this.name = "HealthGrades";
            this.url = require("./assets/icons/ICONS/13.png");
        }
       
      }
      getTextInputValue = () => {
        // Function to get the value from input
        // and Setting the value to the QRCode
        this.setState({ valueForQRCode: this.state.inputValue });
      };
    
    render() {
        return (
          <View style={styles.container}>
            <Text style = {{marginLeft:0,backgroundColor:"#d9d9d9",height:"10%",textAlign: 'center',fontWeight: 'bold',width:"100%",fontSize: 18,padding:20}}>EDIT Review Platform</Text>  
            <View style = {{alignItems:"center",justifyContent: "center",padding:"10%"}}>
            <Text style = {{fontSize:20,textAlign: 'center',color:"#1792d5",fontWeight: 'bold'}}>{this.name} Profile</Text></View>
            <View style = {{alignItems:"center",justifyContent: "center",padding:"0%"}}>
            <View style = {{ alignItems: 'center',padding:"7%" }}>
               <Image source={this.url} style = {styles.logo} />
            </View>
            <View style={this.state['isEmail']?styles.inputWrong:styles.inputView} >
                    <TextInput style={styles.inputStyle} placeholder="Enter Business Location"
                    //value={this.state['isEmail']?ToastAndroid.show("Enter a valid Mail Id",ToastAndroid.SHORT):this.state.email} onChangeText={(val) => this.updateInputval(val, 'email')} 
                    />
            </View>
            <TouchableOpacity style={styles.signupBtn} onPress = {() => this.props.navigation.navigate('homePage')} >
                    <Text style={{fontWeight:"bold",color:"white"}}>SET {this.name} PLATFORM</Text>
                </TouchableOpacity> 

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
          logo:{
            marginTop:-50,
            justifyContent:"center",
            marginBottom:20,
            height:150,
            width:150
          },  
          inputStyle: {
           height:50,
            color:"black"
          },
          inputView:{
            width:"90%",
            backgroundColor:"white",
        
            borderRadius:5,
            height:50,
            marginBottom:20,
            justifyContent:"center",
            padding:20,
            borderWidth: 1,
            borderColor: "#000000"
          },
          signupBtn:{
            width:"90%",
            backgroundColor:"#39b54a",
            //backgroundColor:"#1792D5",
            borderRadius:10,
            height:50,
            alignItems:"center",
            justifyContent:"center",
            marginTop:10,
            marginBottom:5
          }
      
    });
    
  export default editPlatform;