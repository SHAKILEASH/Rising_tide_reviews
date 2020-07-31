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
  ScrollView,
} from "react-native";
import QR_CODE from "./QR_CODE";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const SLIDER_WIDTH = Dimensions.get("window").width;


class businessProfile extends Component {
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
          <ScrollView>
            <View style={{ alignItems: "center", marginTop: 0, padding: 20 }}>
              <View
                style={
                  this.state["isName"] ? styles.inputWrong : styles.inputView
                }
              >
                <Text style={styles.businessDetailsText}>Business Name:</Text>
  
                <TextInput
                  style={{ width: "100%", height: 50, textAlignVertical: "top" }}
                  mode="outlined"
                  label="Full Name"
                  type="outlined"
                  value={this.state.name}
                  onChangeText={(name) => this.setState({ name })}
                />
              </View>
  
              <View
                style={
                  this.state["isbURL"] ? styles.inputWrong : styles.inputView
                }
              >
                <Text style={styles.businessDetailsText}>Business URL:</Text>
                <TextInput
                  style={{ width: "100%", height: 50, textAlignVertical: "top" }}
                  mode="outlined"
                  label="Full Name"
                  type="outlined"
                  value={this.state.name}
                  onChangeText={(name) => this.setState({ name })}
                />
              </View>
              <View
                style={
                  this.state["isbPhone"] ? styles.inputWrong : styles.inputView
                }
              >
                <Text style={styles.businessDetailsText}>Business Phone:</Text>
                <TextInput
                  style={{ width: "100%", height: 50, textAlignVertical: "top" }}
                  mode="outlined"
                  label="Full Name"
                  type="outlined"
                  value={this.state.name}
                  onChangeText={(name) => this.setState({ name })}
                />
              </View>
              <View
                style={
                  this.state["isbMail"] ? styles.inputWrong : styles.inputView
                }
              >
                <Text style={styles.businessDetailsText}>Business Email:</Text>
                <TextInput
                  style={{ width: "100%", height: 50, textAlignVertical: "top" }}
                  mode="outlined"
                  label="Full Name"
                  type="outlined"
                  value={this.state.name}
                  onChangeText={(name) => this.setState({ name })}
                />
              </View>
              <View style={styles.inputBusinessView}>
                <Text style={styles.businessProfileText}>Business Profile:</Text>
                <TextInput
                  style={{ width: "100%", height: 50, textAlignVertical: "top" }}
                  mode="outlined"
                  label="Full Name"
                  type="outlined"
                  value={this.state.name}
                  onChangeText={(name) => this.setState({ name })}
                />
              </View>
  
              <View
                style={{
                  marginTop: 100,
                  marginBottom: 0,
                  flex: 1,
                  flexDirection: "row",
                }}
              >
                <View style={styles.inputLogoView}>
                  <Text style={styles.businessDetailsText}>Business Logo:</Text>
  
                  <TextInput
                    style={{
                      width: "100%",
                      height: 50,
                      textAlignVertical: "top",
                    }}
                    mode="outlined"
                    label="Full Name"
                    type="outlined"
                    value={this.state.name}
                    onChangeText={(name) => this.setState({ name })}
                  />
  
                  <TouchableOpacity style={{ right: -220, bottom: 91 }}>
                    <TextInput
                      style={{
                        width: "45%",
                        backgroundColor: "#ced6ce",
                        marginTop: 20,
                        borderRadius: 5,
                        height: 10,
                        marginBottom: 10,
                        justifyContent: "center",
                        padding: 20,
                        borderWidth: 1,
                        borderColor: "#000000",
                        marginLeft: 30,
                      }}
                      placeholder="UPLOAD"
                      value={
                        this.state["isMail"]
                          ? ToastAndroid.show("", ToastAndroid.SHORT)
                          : this.state.email
                      }
                      onChangeText={(val) => this.updateInputval(val, "Mail")}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={{
                  marginTop: 100,
                  marginBottom: 300,
                  flex: 1,
                  flexDirection: "row",
                }}
              >
                <View style={styles.inputView}>
                  <Text style={styles.businessDetailsText}>Business Type:</Text>
                  <TextInput
                    style={{
                      width: "100%",
                      height: 50,
                      textAlignVertical: "top",
                    }}
                    mode="outlined"
                    label="Full Name"
                    type="outlined"
                    value={this.state.name}
                    onChangeText={(name) => this.setState({ name })}
                  />
                </View>
              </View>
              <TouchableOpacity
                style={{
                  width: "100%",
                  backgroundColor: "#39b54a",
                  //backgroundColor:"#1792D5",
                  //borderRadius:10,
                  height: 75,
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 100,
                  marginTop: -300,
                }}
                onPress={() => this.props.navigation.navigate("homePage")}
              >
                <Text style={styles.loginText}>UPDATE BUSINESS DETAILS</Text>
              </TouchableOpacity>
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
          </ScrollView>
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
      justifyContent: "center",
      alignItems: "center",
      padding: 0,
      backgroundColor: "#fff",
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
      width: "100%",
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
      width: 350,
      backgroundColor: "#39b54a",
      //backgroundColor:"#1792D5",
      //borderRadius:10,
      height: 75,
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
      width: "100%",
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
      marginBottom: 30,
      marginLeft: -20,
    },
    inputBusinessView: {
      width: "100%",
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
    inputLogoView: {
      width: "70%",
      backgroundColor: "white",
      marginTop: 40,
      marginLeft: -100,
      borderRadius: 5,
      height: 10,
      marginBottom: 10,
      justifyContent: "center",
      padding: 20,
      borderWidth: 1,
      borderColor: "#000000",
    },
  });
  
  export default businessProfile;
  