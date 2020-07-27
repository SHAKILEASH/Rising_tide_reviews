import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {TouchableOpacity, StyleSheet, Text, Image, View, TextInput, Button, Alert, ActivityIndicato} from 'react-native';

const Stack = createStackNavigator();

class MyStack extends Component {
    render(){
        return(
            <Stack.Navigator
                initialRouteName="Signup"
                screenOptions={{
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#3740FE',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}>
            
            <Stack.Screen 
                name="Signup" 
                component={Signup} 
                options={{ title: 'Signup' }}
            /> 
            <Stack.Screen 
                name="Login" 
                component={Login} 
                options={
                    {title: 'Login'},
                    {headerLeft: null} 
                }
            />
         
            </Stack.Navigator>    
        )
    }
}

class Signup extends Component {
    constructor(){
        super();
        this.state = {
            displayName: "",
            email:"",
            password:"",
            isLoading: false
        }
    }
    updateInputval = (val,prop)=>{
        const state = this.state;
        state[prop] = val;
        this.setState(state);
    }
    registerUser = ()=>{
        if(this.state.email === '' && this.state.password === '') {
         Alert.alert('Enter details to signup!') }
    }
    
    render(){
         return (
         <View style = {styles.container}>
            
            <Text style= {styles.logo}>RISING TIDE REVIEWS</Text>
            
            <Text style = {{textAlign:"left",color:"black",paddingBottom:5,fontSize:30}}>Hello there!</Text>
            <Text style = {{textAlign:"left",left:-5,fontSize:20,padding:5,bottom:15}}>Welcome, Signup to Enjoy our service!</Text>
             
            <View style = {{ alignItems: 'center', }}>
                <View style={styles.inputView} >
                    <TextInput style = {styles.inputStyle} placeholder = "Username" value =     {this.state.displayName} onChangeText={(val)=>this.updateInputval(val,"displayName")} />
                </View> 
                <View style={styles.inputView} >
                    <TextInput style={styles.inputStyle} placeholder="Email"
                    value={this.state.email} onChangeText={(val) => this.updateInputval(val, 'email')} />
                </View> 
                <View style={styles.inputView} >
                    <TextInput style={styles.inputStyle} placeholder="Password"
                    value={this.state.password}
                    onChangeText={(val) => this.updateInputval(val, 'password')}
                    maxLength={15}
                    secureTextEntry={true} />  
                </View>  
                <TouchableOpacity style={styles.signupBtn} onPress = {() => this.registerUser()} >
                    <Text style={styles.loginText}>SIGNUP</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.forgot}>Already signedUp? lets move to signup</Text>
                </TouchableOpacity>
            </ View>
        </ View>    
      )
    }
}

class Login extends Component {
    constructor(){
        super();
        this.state = {
            displayName: "",
            email:"",
            password:"",
            isLoading: false
        }
    }
    updateInputval = (val,prop)=>{
        const state = this.state;
        state[prop] = val;
        this.setState(state);
    }
    registerUser = ()=>{
        if(this.state.email === '' && this.state.password === '') {
         Alert.alert('Enter details to signup!') }
    }
    
    render(){
         return (
         <View style = {styles.container}>
            
            <Text style= {styles.logo}>RISING TIDE REVIEWS</Text>
            
            <Text style = {{textAlign:"left",paddingBottom:5,fontSize:2}}>Hello there!</Text>
            <Text style = {{textAlign:"left",left:-5,fontSize:20,padding:5,bottom:20}}>Welcome, Signup to Enjoy our service!</Text>
             
            <View style = {{ alignItems: 'center', }}>
                <View style={styles.inputView} >
                    <TextInput style = {styles.inputStyle} placeholder = "Username" value =     {this.state.displayName} onChangeText={(val)=>this.updateInputval(val,"displayName")} />
                </View> 
                <View style={styles.inputView} >
                    <TextInput style={styles.inputStyle} placeholder="Email"
                    value={this.state.email} onChangeText={(val) => this.updateInputval(val, 'email')} />
                </View> 
                <View style={styles.inputView} >
                    <TextInput style={styles.inputStyle} placeholder="Password"
                    value={this.state.password}
                    onChangeText={(val) => this.updateInputval(val, 'password')}
                    maxLength={15}
                    secureTextEntry={true} />  
                </View>  
                <TouchableOpacity style={styles.signupBtn} onPress = {() => this.registerUser()} >
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.forgot}>Already signedUp? lets move to signup</Text>
                </TouchableOpacity>
            </ View>
        </ View>    
      )
    }
}
                    
 function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}                    
                    

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column", 
    justifyContent: "center",
    padding: 20,
    backgroundColor: '#fff'
  },
  inputStyle: {
   height:50,
    color:"white"
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
    fontWeight:"bold",
    fontSize:30,
    color:"#2A7AD8",
    marginBottom:10
  },
  inputView:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  signupBtn:{
    width:"80%",
    backgroundColor:"#2A7AD8",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
 loginText:{
    color:"white"
  },
  forgot:{
    color:"black",
    fontSize:11
  }    
});


export default App;