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
import Ani from "./review_request";
import Create_review from "./create_review"
import Review_platform from "./view_platform";
import addPlatform from "./add_platform";
import editPlatform from "./edit_platform";
import changePassword from "./change_password";
import businessProfile from "./business_details"
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
          component={Create_review}
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
          name="QR_CODE"
          component={QR_CODE}
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
                source={require("./assets/icons/ICONS/2.png")}
              />
            ),
          }}
          name="Review_Platform"
          component={Review_platform}
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
                source={require("./assets/icons/ICONS/2.png")}
              />
            ),
          }}
          name="Review Edit Platform"
          component={editPlatform}
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
                source={require("./assets/icons/ICONS/2.png")}
              />
            ),
          }}
          name="Review Platforms"
          component={addPlatform}
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
          name="Requests_status"
          component={Ani}
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
          name="Change password"
          component={changePassword}
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
          name="Business Details"
          component={businessProfile}
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
              this.props.navigation.navigate("Requests_status");
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
          <TouchableOpacity style={{ right: -50 }} onPress ={()=> {this.props.navigation.navigate("Review_Platform")} }  >
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
          <TouchableOpacity style={{ right: -50 }} onPress={() => {
              this.props.navigation.navigate("Business Details");
            }}>
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
      }
      else{
        this.props.navigation.navigate("Requests_status");
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