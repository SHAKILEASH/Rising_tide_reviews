import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {TouchableOpacity, StyleSheet, Text, Image, View, TextInput, Button, Alert, ActivityIndicato} from 'react-native';
import Signin from './components/signin';
import Create_review from './components/create_review'



const Stack = createStackNavigator();

class MyStack extends Component {
    render(){
        return(
            <Stack.Navigator
                initialRouteName="Create_review"
                screenOptions={{
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#7AD7F0',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}>
            <Stack.Screen 
                name="Sign In" 
                component={Signin} 
                options={
                    {title: 'SIGN IN'},
                    {headerLeft: null} 
                }
            />
            <Stack.Screen 
                name="Create_review" 
                component={Create_review} 
                options={
                    {title: 'REVIEW REQUESTS'},
                    {headerLeft: null} 
                }
            />
         
            </Stack.Navigator>    
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
    fontFamily: "Source Sans Pro",
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


export default App;