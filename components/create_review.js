import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {TouchableOpacity, StyleSheet, Text, Image, View, TextInput, Button, Alert, ActivityIndicato,ToastAndroid} from 'react-native';




class Create_review extends Component {
    constructor(){
        super();
        this.state = {
            Mail:"",
            Name:"",
            Phone:"",
            isName: false,
            isPhone: false,
            isMail: false
        }
    }
    updateInputval = (val,prop)=>{
        const state = this.state;
        state[prop] = val;
        
        state['is'+prop] = false;
        this.setState(state);
    }
    validate_form = ()=>{
        if(this.state.Mail === '') {
            correct = this.state;
            correct['isMail'] = true;
            this.setState(correct);
            }

        if(this.state.Name === ''){
            correct = this.state;
            correct['isName'] = true;    
            this.setState(correct);
        }
        
        if(this.state.Phone === '' || isNaN(this.state.Phone)) {
         correct = this.state;
        correct['isPhone'] = true;
        this.setState(correct);
        }
    }
    
    render(){
         return (
         <View style = {styles.container}>
            <View style = {{ alignItems: 'center', }}>
               <Image source={require('./assets/logo_login.png')} style = {styles.logo} />
             </View>
            

            <View style = {{ alignItems: 'center', }}>
                <View style={this.state['isName']?styles.inputWrong:styles.inputView} >
                    <TextInput style={styles.inputStyle} placeholder="Enter Patient Name"
                    value={this.state['isName']?ToastAndroid.show("please, Enter Patient Name",ToastAndroid.SHORT):this.state.name} onChangeText={(val) => this.updateInputval(val, 'Name')} />
                </View> 

                <View style={this.state['isMail']?styles.inputWrong:styles.inputView} >
                    <TextInput style={styles.inputStyle} placeholder="Enter Patient Email Address"
                    value={this.state['isMail']?ToastAndroid.show("Please,Enter a valid Email Address",ToastAndroid.SHORT):this.state.email} onChangeText={(val) => this.updateInputval(val, 'Mail')} />
                </View> 
                <View style={this.state['isPhone']?styles.inputWrong:styles.inputView} >
                    <TextInput style={styles.inputStyle} placeholder="Enter Patient Phone"
                    value={this.state['isPhone']?ToastAndroid.show("Please,Enter a valid phone number",ToastAndroid.SHORT):this.state.phone} onChangeText={(val) => this.updateInputval(val, 'Phone')} />
                </View> 
                
                <TouchableOpacity style={styles.signupBtn} onPress = {() => this.validate_form()} >
                    <Text style={styles.loginText}>CREATE REVIEW REQUEST</Text>
                </TouchableOpacity>
              
            </ View>
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
      padding: 20,
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
      backgroundColor:"orangered",
  
      borderRadius:5,
      height:50,
      marginBottom:20,
      justifyContent:"center",
      padding:20,
      borderWidth: 1,
      borderColor: "#000000"
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

  export default Create_review;