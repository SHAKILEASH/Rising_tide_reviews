import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {TouchableOpacity, StyleSheet, Text, Image, View, TextInput, Button, Alert, ActivityIndicato,ToastAndroid} from 'react-native';




class Signin extends Component {
    constructor(){
        super();
        this.state = {
            email:"",
            password:"",
            isEmail: false,
            isPassword:false
        }
    }
    updateInputval = (val,prop)=>{
        const state = this.state;
        state[prop] = val;
        
        state['isEmail'] = false;
        state['isPassword'] =false;
        this.setState(state);
    }
    loginUser = ()=>{
        if(this.state.email === '' ||!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.Mail))){
            correct = this.state;
            correct['isEmail'] = true;
            this.setState(correct);
           }
        if(this.state.password === '') {
            var correct = this.state;
            correct['isPassword'] = true;
            this.setState(correct);
        }
    }
    
    render(){
         return (
         <View style = {styles.container}>
            <View style = {{ alignItems: 'center', }}>
               <Image source={require('./assets/logo_login.png')} style = {styles.logo} />
            </View>

            <View style = {{paddingLeft:10}}>
                <Text style = {{textAlign:"left",color:"black",fontSize:30,fontWeight: "bold",marginBottom:20}}>Hello there!</Text>
            
                <Text style = {{textAlign:"left",fontSize:20,paddingBottom:10}}>Welcome</Text>
            
                <Text style = {{textAlign:"left",fontSize:13,paddingBottom:25,color:"grey"}}> Sign In to Enjoy our service!</Text>
            </View>

            <View style = {{ alignItems: 'center', }}>
                <View style={this.state['isEmail']?styles.inputWrong:styles.inputView} >
                    <TextInput style={styles.inputStyle} placeholder="Email"
                    value={this.state['isEmail']?ToastAndroid.show("Enter a valid Mail Id",ToastAndroid.SHORT):this.state.email} onChangeText={(val) => this.updateInputval(val, 'email')} />
                </View> 

                <View style={this.state['isPassword']?styles.inputWrong:styles.inputView} >
                    <TextInput style={styles.inputStyle} placeholder="Password"
                    value={this.state['isPassword']?ToastAndroid.show("Enter the correct Password",ToastAndroid.SHORT):this.state.password}
                    onChangeText={(val) => this.updateInputval(val, 'password')}
                    maxLength={15}
                    secureTextEntry={true} />  
                </View>  

                <TouchableOpacity style={styles.signupBtn} onPress = {() => this.loginUser()} >
                    <Text style={styles.loginText}>Sign In</Text>
                </TouchableOpacity>
              
            </ View>
            
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
      justifyContent: "center",
      padding: 0,
      backgroundColor: '#fff'
    },  
    inputStyle: {
     height:50,
      color:"black"
    },
    loginText: {
      color: '#3740FE',
      marginTop: 25,
      textAlign: 'center'
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
      backgroundColor:"#1792D5",
      //backgroundColor:"#1792D5",
      borderRadius:10,
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

  export default Signin;