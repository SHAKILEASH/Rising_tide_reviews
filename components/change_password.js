import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  TouchableOpacity,
  CheckBox,
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  Button,
  Alert,
  ActivityIndicato,
  ToastAndroid,
  Header,
  Dimensions,
  Platform,
} from "react-native";
import QR_CODE from "./QR_CODE";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const SLIDER_WIDTH = Dimensions.get("window").width;

const Stack = createStackNavigator();

class changePassword extends Component {
  render() {
    return (
      <Stack.Navigator initialRouteName="homePage">
        <Stack.Screen
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#1792d5",
              shadowColor: "transparent",
              elevation: 0,
            },
            headerTintColor: "#fff",
            headerTitleAlign: "center",
            headerTitleStyle: {
              //paddingBottom: 10
            },
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => this.props.navigation.openDrawer()}
              >
                <MaterialCommunityIcons
                  name="menu"
                  style={{
                    /*paddingBottom: 50, */ paddingLeft: 30,
                    color: "#fff",
                  }}
                  size={30}
                />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <Image
                style={{
                  width: 50,
                  height: 50,
                  right: 10,
                }}
                source={require("./assets/icons/ICONS/5.png")}
              />
            ),
          }}
          name="Password"
          component={changePasswordFunc}
        />
      </Stack.Navigator>
    );
  }
}
class changePasswordFunc extends Component {
    constructor() {
      super();
      this.state = {
        bMail: "",
        bName: "",
        bPhone: "",
        bURL: "",
        checked: false,
        isbName: false,
        isbPhone: false,
        isbMail: false,
        isbURL: false,
      };
    }
    updateInputval = (val, prop) => {
      const state = this.state;
      state[prop] = val;
  
      state["isbName"] = false;
      state["isbPhone"] = false;
      state["isbMail"] = false;
      state["isbURL"] = false;
      this.setState(state);
    };
    validate_form = () => {
      if (
        this.state.bMail === "" ||
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.Mail)
      ) {
        var correct = this.state;
        correct["isbMail"] = true;
        this.setState(correct);
      }
  
      if (this.state.bName === "") {
        var correct = this.state;
        correct["isbName"] = true;
        this.setState(correct);
      }
  
      if (
        this.state.bPhone === "" ||
        isNaN(this.state.bPhone) ||
        this.state.bPhone.length != 10
      ) {
        var correct = this.state;
        correct["isbPhone"] = true;
        this.setState(correct);
      }
  
      if (this.state.checked === false) {
        this.props.navigation.navigate("QR_CODE");
        //Alert.alert("rberif");
      }
    };
  
    render() {
      return (
        <View style={styles.container}>
         <Text style = {{marginLeft:0,backgroundColor:"#d9d9d9",height:"10%",textAlign: 'center',fontWeight: 'bold',width:"100%",fontSize: 18,padding:20}}>
            CHANGE PASSWORD
          </Text>
          <View style={{ marginTop: 0, padding: "6%",marginLeft:"7%" }}>
            
          <Text style={{textAlign:"left",fontWeight:"bold",fontSize:20}}>Old Password:</Text>
              <View
              style={this.state["isName"] ? styles.inputWrong : styles.inputView} >
              <TextInput
                style={styles.inputStyle}
                value={
                  this.state["isbName"]
                    ? ToastAndroid.show(
                        "please, Enter Business Name",
                        ToastAndroid.SHORT
                      )
                    : this.state.bname
                }
                onChangeText={(val) => this.updateInputval(val, "bName")}
              />
            </View>
            <Text style={{textAlign:"left",fontWeight:"bold",fontSize:20}}>New Password:</Text>
              <View
              style={this.state["isName"] ? styles.inputWrong : styles.inputView} >
              <TextInput
                style={styles.inputStyle}
                value={
                  this.state["isbName"]
                    ? ToastAndroid.show(
                        "please, Enter Business Name",
                        ToastAndroid.SHORT
                      )
                    : this.state.bname
                }
                onChangeText={(val) => this.updateInputval(val, "bName")}
              />
            </View>
            <Text style={{textAlign:"left",fontWeight:"bold",fontSize:20}}>Confirm Password:</Text>
              <View
              style={this.state["isName"] ? styles.inputWrong : styles.inputView} >
              <TextInput
                style={styles.inputStyle}
                value={
                  this.state["isbName"]
                    ? ToastAndroid.show(
                        "please, Enter Business Name",
                        ToastAndroid.SHORT
                      )
                    : this.state.bname
                }
                onChangeText={(val) => this.updateInputval(val, "bName")}
              />
            </View>
  
            <View
              style={{
                
                paddingTop: 5,
                marginBottom: 10,
              }}
            >
              <TouchableOpacity
                style={styles.signupBtn}
                onPress={() => this.validate_form()}
              >
                <Text style={styles.loginText}>UPDATE PASSWORD</Text>
              </TouchableOpacity>
            </View>
          </View>
  
          <View
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "#1792D5",
              width: "100%",
              height: 30,
            }}
          >
            <Text> </Text>
          </View>
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
    homePageContainer: {
      fontFamily: "SourceSansPro-Bold",
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: 50,
      backgroundColor: "#fff",
    },
    inputStyle: {
      height: 50,
      width: 300,
      color: "black",
    },
    loginText: {
      color: "white",
      marginTop: 25,
      textAlign: "center",
      fontWeight: "bold",
    },
    preloader: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      position: "absolute",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#fff",
    },
    logo: {
      marginTop: -50,
      justifyContent: "center",
      marginBottom: 20,
      height: 150,
      width: 150,
    },
    inputWrong: {
      width: "90%",
      backgroundColor: "white",
  
      borderRadius: 5,
      height: 50,
      marginBottom: 20,
      justifyContent: "center",
      padding: 20,
      borderWidth: 1,
      borderColor: "orangered",
    },
    inputView: {
      width: "90%",
      backgroundColor: "white",
      marginTop: 20,
  
      borderRadius: 5,
      height: 50,
      marginBottom: 20,
      justifyContent: "center",
      padding: 20,
      borderWidth: 1,
      borderColor: "#000000",
    },
    signupBtn: {
      width: "90%",
      backgroundColor: "#39b54a",
      //backgroundColor:"#1792D5",
      //borderRadius:10,
      height: "25%",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 100,
      marginTop: 10,
    },
    loginBtn: {
      width: "80%",
      backgroundColor: "#306BAC",
      //backgroundColor:"#1792D5",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 20,
      marginBottom: 5,
    },
    loginText: {
      color: "white",
      fontSize: 20,
      fontWeight: "bold",
    },
    forgot: {
      color: "black",
      fontSize: 12,
    },
    rr: {
      width: 0,
      backgroundColor: "#39b54a",
      //backgroundColor:"#1792D5",
      //borderRadius:10,
      height: 15,
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 0,
      marginTop: 150,
    },
    signBtn: {
      width: 500,
      backgroundColor: "#39b54a",
      //backgroundColor:"#1792D5",
      //borderRadius:10,
      height: 75,
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 120,
      marginTop: 10,
    },
    businessDetailsText: {
      fontWeight: "bold",
      fontSize: 20,
      marginBottom: 30,
      marginLeft: -20,
    },
    inputBusinessView: {
      width: "90%",
      backgroundColor: "white",
  
      borderRadius: 5,
      height: 150,
      marginBottom: -100,
      justifyContent: "center",
      padding: 20,
      borderWidth: 1,
      borderColor: "#000000",
      marginTop: 20,
    },
    businessProfileText: {
      fontWeight: "bold",
      marginBottom: 130,
      marginLeft: -20,
    },
  });



export default changePassword;