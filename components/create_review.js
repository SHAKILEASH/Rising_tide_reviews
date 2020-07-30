import React,{Component} from 'react';
import {TouchableOpacity,CheckBox, StyleSheet, Text, Image, View, TextInput, Button, Alert, ActivityIndicato,ToastAndroid,Header} from 'react-native';




// npm i react-native-paper

class Create_review extends Component {
    constructor(){
        super();
        this.state = {
            Mail:"",
            Name:"",
            Phone:"",
            checked:false,
            isName: false,
            isPhone: false,
            isMail: false
            
        }
    }
    updateInputval = (val,prop)=>{
        const state = this.state;
        state[prop] = val;
        
        state['isName'] = false;
        state['isPhone'] = false;
        state['isMail'] = false;
        this.setState(state);
    }
    validate_form = ()=>{
        var flag = true;
        if(this.state.Mail === '' || !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.Mail))) {
            var correct = this.state;
            correct['isMail'] = true;
            flag = false;
            this.setState(correct);
            }

        if(this.state.Name === ''){
            var correct = this.state;
            correct['isName'] = true; 
            flag = false;
            this.setState(correct);
        }
        
        if(this.state.Phone === '' || isNaN(this.state.Phone) || this.state.Phone.length!=10 ) {
         var correct = this.state;
        correct['isPhone'] = true;
            flag = false;
        this.setState(correct);
        }
      if(flag == true){
        if(this.state.checked === false){
          this. props. navigation. navigate("QR_CODE")
          //Alert.alert("rberif");
        }
        else
        {
          this.props.navigation.navigate("REVIEW REQUESTS",{name:this.state.Name,mail:this.state.Mail,phone:this.state.Phone});
        }
      }
    }
    
    render(){
         return (
         <View style = {styles.container}> 
            
            <Text style = {{marginLeft:0,backgroundColor:"#d9d9d9",height:"10%",textAlign: 'center',fontWeight: 'bold',fontSize: 18,padding:20}}>CREATE REVIEW REQUEST</Text>
            <View style = {{ alignItems: 'center',marginTop:"30%",padding:20 }}>
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
             </View>  
             <View style = {{flexDirection: "row",paddingLeft:"10%"}}> 
                <CheckBox
                  value={this.state.checked}
                  onValueChange={() => this.setState({ checked: !this.state.checked })}
                />
                <Text style = {{paddingLeft:5,marginTop:"0%"}}>Send link via Email.</Text>
              </ View>
              <View style = {{ alignItems: 'center',padding:20}} >
                <TouchableOpacity style={styles.signupBtn} onPress = {() => this.validate_form()} >
                    <Text style={styles.loginText}>CREATE REVIEW REQUEST</Text>
                </TouchableOpacity>
              </View>  
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
      justifyContent: "flex-start",
      padding: 0,
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
      fontSize:20,
      textAlign:"center"
  
    },
    forgot:{
      color:"black",
      fontSize:12
    }    
  });

  export default Create_review;