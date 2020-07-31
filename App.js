
import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
    TouchableOpacity,
    StyleSheet,
    Text,
    Image,
    View,
    TextInput,
    Button,
    Alert,
    ActivityIndicator,
  } from "react-native";
import Signin from "./components/signin";
import createReview from "./components/Home_create";
import changePassword from "./components/change_password"
import QR_CODE from "./components/QR_CODE";
import request_status from "./components/Requests_status"

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function ReviewRequestIcon() {
    return (
      <Image
        source={require("./assets/icons/ICONS/1.png")}
        style={{ width: 50, height: 50, borderRadius: 40 / 2, marginRight: 10 }}
      />
    );
  }
  
  class MyStack extends Component {
    render() {
      return (
        <Drawer.Navigator
        drawerStyle={{ backgroundColor: "#1792d5" }}
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "white",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Drawer.Screen
          name=" "
          component={createReview}
          options={{
            drawerIcon: ({ focused, size }) => (
              <View style={styles.refreshButton}>
                <Image
                  source={require("./assets/icons/ICONS/6.png")}
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: 40 / 2,
                    marginRight: -70,
                  }}
                />
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "white",
                    alignContent: "center",
                    textAlign: "center",
                    paddingLeft: 70,
                    fontSize: 20,
                  }}
                >
                  {"\n"}WELCOME
                  {"\n"}Dr. ABC
                </Text>
              </View>
            ),
          }}
        />
        <Drawer.Screen
          name="."
          component={changePassword}
          options={{
            drawerIcon: ({ focused, size }) => (
              <View
                colors={["#17b850", "#19b749"]}
                style={styles.refreshButton}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "white",
                    fontSize: 20,
                  }}
                >
                  Change Password
                </Text>
              </View>
            ),
          }}
        />
        <Drawer.Screen
          name=","
          component={createReview}
          options={{
            drawerIcon: ({ focused, size }) => (
              <View
                colors={["#17b850", "#19b749"]}
                style={styles.refreshButton}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "white",
                    fontSize: 20,
                  }}
                >
                  Plan Details
                </Text>
              </View>
            ),
          }}
        />
        <Drawer.Screen
          name="'"
          component={createReview}
          options={{
            drawerIcon: ({ focused, size }) => (
              <View
                colors={["#17b850", "#19b749"]}
                style={styles.refreshButton}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "white",
                    fontSize: 20,
                  }}
                >
                  Logout
                </Text>
              </View>
            ),
          }}
        />
        <Drawer.Screen
          name="-"
          component={createReview}
          options={{
            drawerIcon: ({ focused, size }) => (
              <View style={styles.refreshButton}>
                <Image
                  source={require("./assets/icons/3.png")}
                  style={{
                    width: 150,
                    height: 150,
                    borderRadius: 40 / 2,
                    marginRight: -70,
                  }}
                />
              </View>
            ),
          }}
        />
      </Drawer.Navigator>

      );
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
      backgroundColor: "#fff",
    },
    inputStyle: {
      height: 50,
      color: "black",
    },
    loginText: {
      color: "#3740FE",
      marginTop: 25,
      textAlign: "center",
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
    inputView: {
      width: "90%",
      backgroundColor: "white",
  
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
      backgroundColor: "#1792D5",
      //backgroundColor:"#1792D5",
      borderRadius: 10,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 30,
      marginBottom: 5,
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
    },
    forgot: {
      color: "black",
      fontSize: 12,
    },
    refreshButton: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      alignItems: "center",
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      padding: 15,
      borderRadius: 30,
    }
  });
  
  export default App;