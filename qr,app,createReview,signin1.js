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

class createReview extends Component {
  render() {
    return (
      <Stack.Navigator initialRouteName="homePage">
        <Stack.Screen
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#00a9f4",
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
                source={require("./assets/icons/ICONS/1.png")}
              />
            ),
          }}
          name="reviewRequests"
          component={createReviewScreen}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#00a9f4",
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
                  width: 40,
                  height: 40,
                  right: 20,
                }}
                source={require("./assets/icons/Star/RTR_Star_36x36.png")}
              />
            ),
          }}
          name="homePage"
          component={homePage}
        />
      </Stack.Navigator>
    );
  }
}
// npm i react-native-paper
class homePage extends Component {
  render() {
    return (
      <View style={styles.homePageContainer}>
        <View style={{ marginTop: 1, flex: 1, flexDirection: "row" }}>
          <TouchableOpacity
            style={{ left: -50 }}
            onPress={() => {
              this.props.navigation.navigate("reviewRequests");
            }}
          >
            <Image
              style={{ height: 75, width: 75 }}
              source={require("./assets/icons/ICONS/1.png")}
            />
            <Text style={{ textAlign: "center" }}>
              {"\n"}REVIEW{"\n"}REQUESTS
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ right: -50 }}>
            <Image
              style={{ height: 75, width: 75 }}
              source={require("./assets/icons/ICONS/2.png")}
            />
            <Text style={{ textAlign: "center" }}>
              {"\n"}REVIEW{"\n"}PLATFORMS
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 16, flex: 1, flexDirection: "row" }}>
          <TouchableOpacity
            style={{ left: -50 }}
            onPress={() => {
              this.props.navigation.navigate("reviewRequests");
            }}
          >
            <Image
              style={{ height: 75, width: 75 }}
              source={require("./assets/icons/ICONS/3.png")}
            />
            <Text style={{ textAlign: "center" }}>
              {"\n"}MY{"\n"}REVIEW
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ right: -50 }}>
            <Image
              style={{ height: 75, width: 75 }}
              source={require("./assets/icons/ICONS/4.png")}
            />
            <Text style={{ textAlign: "center" }}>
              {"\n"}BUSINESS{"\n"}DETAILS
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 16, flex: 1, flexDirection: "row" }}>
          <TouchableOpacity
            style={{ left: -50 }}
            onPress={() => {
              this.props.navigation.navigate("reviewRequests");
            }}
          >
            <Image
              style={{ height: 75, width: 75 }}
              source={require("./assets/icons/ICONS/5.png")}
            />
            <Text style={{ textAlign: "center" }}>
              {"\n"}INVOICE{"\n"}DETAILS
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ right: -50 }}>
            <Image
              style={{ height: 75, width: 75 }}
              source={require("./assets/icons/ICONS/6.png")}
            />
            <Text style={{ textAlign: "center" }}>
              {"\n"}EDIT{"\n"}PROFILE
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rr}>
          <TouchableOpacity
            style={styles.signBtn}
            onPress={() => this.validate_form()}
          >
            <Text style={styles.loginText}>REVIEW REQUEST</Text>
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
      </View>
    );
  }
}
class createReviewScreen extends Component {
  constructor() {
    super();
    this.state = {
      Mail: "",
      Name: "",
      Phone: "",
      checked: false,
      isName: false,
      isPhone: false,
      isMail: false,
    };
  }
  updateInputval = (val, prop) => {
    const state = this.state;
    state[prop] = val;

    state["isName"] = false;
    state["isPhone"] = false;
    state["isMail"] = false;
    this.setState(state);
  };
  validate_form = () => {
    if (
      this.state.Mail === "" ||
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.Mail)
    ) {
      var correct = this.state;
      correct["isMail"] = true;
      this.setState(correct);
    }

    if (this.state.Name === "") {
      var correct = this.state;
      correct["isName"] = true;
      this.setState(correct);
    }

    if (
      this.state.Phone === "" ||
      isNaN(this.state.Phone) ||
      this.state.Phone.length != 10
    ) {
      var correct = this.state;
      correct["isPhone"] = true;
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
        <Text
          style={{
            marginLeft: 0,
            backgroundColor: "#d9d9d9",
            height: "10%",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 25,
            width: 1000,
            marginTop: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          CREATE REVIEW REQUEST
        </Text>
        <View style={{ alignItems: "center", marginTop: "10%", padding: 20 }}>
          <View
            style={this.state["isName"] ? styles.inputWrong : styles.inputView}
          >
            <TextInput
              style={styles.inputStyle}
              placeholder="Enter Patient Name"
              value={
                this.state["isName"]
                  ? ToastAndroid.show(
                      "please, Enter Patient Name",
                      ToastAndroid.SHORT
                    )
                  : this.state.name
              }
              onChangeText={(val) => this.updateInputval(val, "Name")}
            />
          </View>

          <View
            style={this.state["isMail"] ? styles.inputWrong : styles.inputView}
          >
            <TextInput
              style={styles.inputStyle}
              placeholder="Enter Patient Email Address"
              value={
                this.state["isMail"]
                  ? ToastAndroid.show(
                      "Please,Enter a valid Email Address",
                      ToastAndroid.SHORT
                    )
                  : this.state.email
              }
              onChangeText={(val) => this.updateInputval(val, "Mail")}
            />
          </View>
          <View
            style={this.state["isPhone"] ? styles.inputWrong : styles.inputView}
          >
            <TextInput
              style={styles.inputStyle}
              placeholder="Enter Patient Phone"
              value={
                this.state["isPhone"]
                  ? ToastAndroid.show(
                      "Please,Enter a valid phone number",
                      ToastAndroid.SHORT
                    )
                  : this.state.phone
              }
              onChangeText={(val) => this.updateInputval(val, "Phone")}
            />
          </View>
        </View>
        <View style={{ flexDirection: "row", paddingRight: 150 }}>
          <CheckBox
            value={this.state.checked}
            onValueChange={() =>
              this.setState({ checked: !this.state.checked })
            }
          />
          <Text style={{ paddingLeft: 5, marginTop: 5 }}>
            Send Request link via Email
          </Text>
        </View>
        <View style={{ alignItems: "center", padding: 20 }}>
          <TouchableOpacity
            style={styles.signupBtn}
            onPress={() => this.validate_form()}
          >
            <Text style={styles.loginText}>CREATE REVIEW REQUEST</Text>
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
});

export default createReview;






                                        ##########################################################################################app.js






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
import createReview from "./components/createReview";
import QR_CODE from "./components/QR_CODE";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
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
      source={require("./assets/icons/ICONS/1.png")}
      style={{ width: 50, height: 50, borderRadius: 40 / 2, marginRight: 10 }}
    />
  );
}

class MyStack extends Component {
  render() {
    return (
      <Drawer.Navigator
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#fff",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Drawer.Screen name="Change Password" component={createReview} />
        <Drawer.Screen name="Plan Details" component={createReview} />
        <Drawer.Screen name="Logout" component={createReview} />
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
});

export default App;



##QRCODE


import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  Button,
  Alert,
  ActivityIndicato,
  ToastAndroid,
} from "react-native";
import QRCode from "react-native-qrcode-svg";

//npm install react-native-qrcode --save

class QR_CODE extends Component {
  constructor() {
    super();
    this.state = {
      defaultValue: "NONE",
      // Default Value of the TextInput
      valueForQRCode: "www.google.com",
      // Default value for the QR Code
    };
  }
  getTextInputValue = () => {
    // Function to get the value from input
    // and Setting the value to the QRCode
    this.setState({ valueForQRCode: this.state.inputValue });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text
          style={{
            marginLeft: 0,
            backgroundColor: "#d9d9d9",
            height: "10%",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 18,
            padding: 20,
          }}
        >
          REQUEST REQUEST CODE
        </Text>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            padding: "10%",
          }}
        >
          <Text style={{ fontSize: 20, textAlign: "center" }}>
            {" "}
            Scan The Code To Submit Your Review
          </Text>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            padding: "0%",
          }}
        >
          <QRCode
            //QR code value
            value={
              this.state.valueForQRCode
                ? this.state.valueForQRCode
                : this.state.defaultValue
            }
            size={250}
            color="black"
            backgroundColor="white"
          />
        </View>

        <View
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "#1792D5",
            width: "100%",
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
    backgroundColor: "#fff",
  },
});

export default QR_CODE;



#######################################################################################sign in




import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  Button,
  Alert,
  ActivityIndicato,
  ToastAndroid,
} from "react-native";

class Signin extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      isEmail: false,
      isPassword: false,
    };
  }
  updateInputval = (val, prop) => {
    const state = this.state;
    state[prop] = val;

    state["isEmail"] = false;
    state["isPassword"] = false;
    this.setState(state);
  };
  loginUser = () => {
    if (
      this.state.email === "" ||
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.Mail)
    ) {
      correct = this.state;
      correct["isEmail"] = true;
      this.setState(correct);
    }
    if (this.state.password === "") {
      var correct = this.state;
      correct["isPassword"] = true;
      this.setState(correct);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("./assets/logo_login.png")}
            style={styles.logo}
          />
        </View>
        <Text
          style={{
            textAlign: "left",
            color: "black",
            fontSize: 30,
            fontWeight: "bold",
            marginBottom: 30,
          }}
        >
          Hello there!
        </Text>
        <Text style={{ textAlign: "left", fontSize: 20, bottom: 25 }}>
          Welcome
        </Text>
        <Text
          style={{
            textAlign: "left",
            fontSize: 13,
            paddingBottom: 25,
            color: "grey",
          }}
        >
          {" "}
          Signin to continue with your email address
        </Text>

        <View style={{ alignItems: "center" }}>
          <View
            style={this.state["isEmail"] ? styles.inputWrong : styles.inputView}
          >
            <TextInput
              style={styles.inputStyle}
              placeholder="Enter your email address"
              value={
                this.state["isEmail"]
                  ? ToastAndroid.show(
                      "Enter a valid Mail Id",
                      ToastAndroid.SHORT
                    )
                  : this.state.email
              }
              onChangeText={(val) => this.updateInputval(val, "email")}
            />
          </View>
          <View
            style={
              this.state["isPassword"] ? styles.inputWrong : styles.inputView
            }
          >
            <TextInput
              style={styles.inputStyle}
              placeholder="Enter your password"
              value={
                this.state["isPassword"]
                  ? ToastAndroid.show(
                      "Enter the correct Password",
                      ToastAndroid.SHORT
                    )
                  : this.state.password
              }
              onChangeText={(val) => this.updateInputval(val, "password")}
              maxLength={15}
              secureTextEntry={true}
            />
          </View>
          <TouchableOpacity
            style={styles.signupBtn}
            onPress={() => this.loginUser()}
          >
            <Text style={styles.loginText}>Sign In</Text>
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
    marginTop: -70,
    justifyContent: "center",
    marginBottom: 20,
    height: 200,
    width: 200,
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
});

export default Signin;






                       




                                                        /////////////////////////////////////////////////////////////////////////change password 
                                                          
                                                          
                                                          
                                                          
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
              backgroundColor: "#00a9f4",
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
          name="reviewRequests"
          component={createReviewScreen}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#00a9f4",
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
                  width: 40,
                  height: 40,
                  right: 20,
                }}
                source={require("./assets/icons/Star/RTR_Star_36x36.png")}
              />
            ),
          }}
          name="homePage"
          component={homePage}
        />
      </Stack.Navigator>
    );
  }
}
// npm i react-native-paper
class homePage extends Component {
  render() {
    return (
      <View style={styles.homePageContainer}>
        <View style={{ marginTop: 1, flex: 1, flexDirection: "row" }}>
          <TouchableOpacity
            style={{ left: -50 }}
            onPress={() => {
              this.props.navigation.navigate("reviewRequests");
            }}
          >
            <Image
              style={{ height: 75, width: 75 }}
              source={require("./assets/icons/ICONS/1.png")}
            />
            <Text style={{ textAlign: "center" }}>
              {"\n"}REVIEW{"\n"}REQUESTS
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ right: -50 }}>
            <Image
              style={{ height: 75, width: 75 }}
              source={require("./assets/icons/ICONS/2.png")}
            />
            <Text style={{ textAlign: "center" }}>
              {"\n"}REVIEW{"\n"}PLATFORMS
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 16, flex: 1, flexDirection: "row" }}>
          <TouchableOpacity
            style={{ left: -50 }}
            onPress={() => {
              this.props.navigation.navigate("reviewRequests");
            }}
          >
            <Image
              style={{ height: 75, width: 75 }}
              source={require("./assets/icons/ICONS/3.png")}
            />
            <Text style={{ textAlign: "center" }}>
              {"\n"}MY{"\n"}REVIEW
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ right: -50 }}>
            <Image
              style={{ height: 75, width: 75 }}
              source={require("./assets/icons/ICONS/4.png")}
            />
            <Text style={{ textAlign: "center" }}>
              {"\n"}BUSINESS{"\n"}DETAILS
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 16, flex: 1, flexDirection: "row" }}>
          <TouchableOpacity
            style={{ left: -50 }}
            onPress={() => {
              this.props.navigation.navigate("reviewRequests");
            }}
          >
            <Image
              style={{ height: 75, width: 75 }}
              source={require("./assets/icons/ICONS/5.png")}
            />
            <Text style={{ textAlign: "center" }}>
              {"\n"}INVOICE{"\n"}DETAILS
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ right: -50 }}>
            <Image
              style={{ height: 75, width: 75 }}
              source={require("./assets/icons/ICONS/6.png")}
            />
            <Text style={{ textAlign: "center" }}>
              {"\n"}EDIT{"\n"}PROFILE
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            style={styles.signupBtn}
            onPress={() => this.validate_form()}
          >
            <Text style={styles.loginText}>REVIEW REQUEST</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
class createReviewScreen extends Component {
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
        <Text
          style={{
            marginLeft: 0,
            backgroundColor: "#d9d9d9",
            height: "10%",
            alignContent: "center",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 28,
            width: 1000,
            marginTop: -30,
          }}
        >
          CHANGE PASSWORD
        </Text>
        <View style={{ alignItems: "center", marginTop: 0, padding: 20 }}>
          <View
            style={this.state["isName"] ? styles.inputWrong : styles.inputView}
          >
            <Text style={styles.businessDetailsText}>Old Password:</Text>

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
            style={this.state["isbURL"] ? styles.inputWrong : styles.inputView}
          >
            <Text style={styles.businessDetailsText}>New Password:</Text>
            <TextInput
              style={styles.inputStyle}
              value={
                this.state["isbURL"]
                  ? ToastAndroid.show(
                      "Please,Enter a valid URL",
                      ToastAndroid.SHORT
                    )
                  : this.state.bURL
              }
              onChangeText={(val) => this.updateInputval(val, "bURL")}
            />
          </View>
          <View
            style={
              this.state["isbPhone"] ? styles.inputWrong : styles.inputView
            }
          >
            <Text style={styles.businessDetailsText}>
              Confirm New Password:
            </Text>
            <TextInput
              style={styles.inputStyle}
              value={
                this.state["isbPhone"]
                  ? ToastAndroid.show(
                      "Please,Enter a valid phone number",
                      ToastAndroid.SHORT
                    )
                  : this.state.bphone
              }
              onChangeText={(val) => this.updateInputval(val, "bPhone")}
            />
          </View>
          <View
            style={{
              alignItems: "center",
              paddingTop: 10,
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
                                                                         
                                                                         
                                                                         
                                                                         
               //////////////////////////////////////////////////////////////////////////////////////////////////////business profile 
                                                                         
                                                                          
                                                                          
                                                                          
                                                                          
                                                                         
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

const Stack = createStackNavigator();

class businessProfile extends Component {
  render() {
    return (
      <Stack.Navigator initialRouteName="homePage">
        <Stack.Screen
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#00a9f4",
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
                source={require("./assets/icons/ICONS/4.png")}
              />
            ),
          }}
          name="reviewRequests"
          component={createReviewScreen}
        />
        <Stack.Screen
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#00a9f4",
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
                  width: 40,
                  height: 40,
                  right: 20,
                }}
                source={require("./assets/icons/Star/RTR_Star_36x36.png")}
              />
            ),
          }}
          name="homePage"
          component={homePage}
        />
      </Stack.Navigator>
    );
  }
}
// npm i react-native-paper
class homePage extends Component {
  render() {
    return (
      <View style={styles.homePageContainer}>
        <View style={{ marginTop: 1, flex: 1, flexDirection: "row" }}>
          <TouchableOpacity
            style={{ left: -50 }}
            onPress={() => {
              this.props.navigation.navigate("reviewRequests");
            }}
          >
            <Image
              style={{ height: 75, width: 75 }}
              source={require("./assets/icons/ICONS/1.png")}
            />
            <Text style={{ textAlign: "center" }}>
              {"\n"}REVIEW{"\n"}REQUESTS
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ right: -50 }}>
            <Image
              style={{ height: 75, width: 75 }}
              source={require("./assets/icons/ICONS/2.png")}
            />
            <Text style={{ textAlign: "center" }}>
              {"\n"}REVIEW{"\n"}PLATFORMS
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 16, flex: 1, flexDirection: "row" }}>
          <TouchableOpacity
            style={{ left: -50 }}
            onPress={() => {
              this.props.navigation.navigate("reviewRequests");
            }}
          >
            <Image
              style={{ height: 75, width: 75 }}
              source={require("./assets/icons/ICONS/3.png")}
            />
            <Text style={{ textAlign: "center" }}>
              {"\n"}MY{"\n"}REVIEW
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ right: -50 }}>
            <Image
              style={{ height: 75, width: 75 }}
              source={require("./assets/icons/ICONS/4.png")}
            />
            <Text style={{ textAlign: "center" }}>
              {"\n"}BUSINESS{"\n"}DETAILS
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 16, flex: 1, flexDirection: "row" }}>
          <TouchableOpacity
            style={{ left: -50 }}
            onPress={() => {
              this.props.navigation.navigate("reviewRequests");
            }}
          >
            <Image
              style={{ height: 75, width: 75 }}
              source={require("./assets/icons/ICONS/5.png")}
            />
            <Text style={{ textAlign: "center" }}>
              {"\n"}INVOICE{"\n"}DETAILS
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ right: -50 }}>
            <Image
              style={{ height: 75, width: 75 }}
              source={require("./assets/icons/ICONS/6.png")}
            />
            <Text style={{ textAlign: "center" }}>
              {"\n"}EDIT{"\n"}PROFILE
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            style={styles.signupBtn}
            onPress={() => this.validate_form()}
          >
            <Text style={styles.loginText}>REVIEW REQUEST</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
class createReviewScreen extends Component {
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
              onPress={() => this.loginUser()}
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
