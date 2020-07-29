import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {TouchableOpacity, StyleSheet, Text, Image, View, TextInput, Button, Alert, ActivityIndicato} from 'react-native';
import Signin from './components/signin';
import Create_review from './components/create_review';
import QR_CODE from './components/QR_CODE';
import Review_platform from './components/Add_edit_platform';

const Stack = createStackNavigator();

/*
class ActionBarImage extends Component {

  render() {

    return (

      <View style={{flexDirection: 'row'}}>

        <Image
          source={require('./assets/logo_login.png')}
          style={{ width: 40, height: 40, borderRadius: 40/2, marginLeft: 15}}
        />

      </View>
    
    );
  
  
  }
}*/
function ReviewRequestIcon() {
  return (
    <Image
    source={require('./assets/icons/ICONS/1.png')}
    style={{ width: 50, height: 50, borderRadius: 40/2, marginRight : 10 }} />
  );
}
function ReviewPlatformIcon() {
  return (
    <Image
    source={require('./assets/icons/ICONS/2.png')}
    style={{ width: 50, height: 50, borderRadius: 40/2, marginRight : 10 }} />
  );
}

class MyStack extends Component {
    render(){
        return(
            <Stack.Navigator
                initialRouteName="REVIEW PLATFORMS"
                screenOptions={{
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#1792D5',
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
                name="QR_CODE" 
                component={QR_CODE} 
                options={
                    {title: 'QR_CODE'},
                    {headerLeft: null} 
                }
            />
            <Stack.Screen 
                name="Create_review" 
                component={Create_review} 
                options={
                    {title: 'REVIEW REQUESTS'},
                    {headerStyle: {
                    backgroundColor: '#f4511e',
                    }},
                    {headerRight: props => <ReviewRequestIcon {...props} /> } 
                }
            />
            <Stack.Screen 
                name="REVIEW PLATFORMS" 
                component={Review_platform} 
                options={
                    {title: 'REVIEW PLATFORMS'},
                    {headerStyle: {
                    backgroundColor: '#f4511e',
                    }},
                    {headerRight: props => <ReviewPlatformIcon {...props} /> } 
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