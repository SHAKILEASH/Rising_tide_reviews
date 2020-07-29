import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {TouchableOpacity,CheckBox, StyleSheet, Text, Image, View, TextInput, Button, Alert, ActivityIndicato,ToastAndroid,Header} from 'react-native';


class Review_platform extends Component {
    constructor(){
        super();
        this.state = {
            Mail:"",
            Name:"",
            Phone:"",
            checked:false,
            isName: false,
            isPhone: false,
            isMail: false
            
        }
    }
    updateInputval = (val,prop)=>{
        const state = this.state;
        state[prop] = val;
        
        state['isName'] = false;
        state['isPhone'] = false;
        state['isMail'] = false;
        this.setState(state);
    }
    render(){
         return (
         <View style = {styles.container}> 
            <Text style = {{marginLeft:0,backgroundColor:"#d9d9d9",height:"10%",textAlign: 'center',fontWeight: 'bold',fontSize: 18,padding:20}}>ADD/EDIT REVIEW PLATFORMS</Text>
            <View style = {{flexDirection:"row",padding:"20%"}}>
             <Image source={require('./assets/icons/ICONS/11.png')}
                style={{ width: 100, height: 100 ,marginRight:"10%" }} />
             <Image source={require('./assets/icons/ICONS/12.png')}
    style={{  width: 100, height: 100,marginLeft:"10%" }} />
            </View> 
            <View style={{position: 'absolute', left: 0, right: 0, bottom: 0,backgroundColor:"#1792D5",width:"100%"}}><Text> </Text></View> 
        </ View>    
      )
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
    inputStyle: {
     height:50,
      color:"black"
    },
    loginText: {
      color: 'white',
      marginTop: 25,
      textAlign: 'center',
      fontWeight:"bold"

    },
    preloader: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff'
    },
    logo:{
      marginTop:-50,
      justifyContent:"center",
      marginBottom:20,
      height:150,
      width:150
    },
    inputWrong:{
      width:"90%",
      backgroundColor:"white",
  
      borderRadius:5,
      height:50,
      marginBottom:20,
      justifyContent:"center",
      padding:20,
      borderWidth: 1,
      borderColor: "orangered"
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
      //borderRadius:10,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      marginTop:30,
      marginBottom:5
    },
    loginBtn:{
      width:"80%",
     backgroundColor:"#306BAC",
     //backgroundColor:"#1792D5",
      borderRadius:25,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      marginTop:20,
      marginBottom:5
    },
   loginText:{
      color:"white",
      fontSize:20
  
    },
    forgot:{
      color:"black",
      fontSize:12
    }    
  });

  export default Review_platform;