import React, { Component } from 'react';
import {
  Animated,
  Dimensions,
  Image,
  LayoutAnimation,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  UIManager,
  View,
  Alert    
} from 'react-native';
import { withNavigation } from 'react-navigation';

const width = Dimensions.get('window').width;

class Animated_Item extends Component {

  constructor() {

    super();

    this.animatedValue = new Animated.Value(0);

    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.item.id !== this.props.item.id) {
      return true;
    }
    return false;
  }

  componentDidMount() {

    Animated.timing(
      this.animatedValue,
      {
        toValue: 0.5,
        duration: 510,
        useNativeDriver: true
      }
    ).start(() => {
      this.props.afterAnimationComplete();
    });

  }

  deleteItem = () => {
    Animated.timing(
      this.animatedValue,
      {
        toValue: 1,
        duration: 510,
        useNativeDriver: true
      }
    ).start(() => {
      this.props.deleteItem(this.props.item.id);
    });
  }

  render() {

    const translate_Animation_Object = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [-width, 0, width]
    });

    const opacity_Animation_Object = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 1, 0]
    });

    return (
      <Animated.View style={[
        styles.singleItemView, {
          transform: [{ translateX: translate_Animation_Object }],
          opacity: opacity_Animation_Object
        }]}>
        <View style={{flexDirection:"row",alignItems:"center",borderBottomColor: 'black',borderBottomWidth: 2,}} >
         <View style={{flexDirection:"column"}}   >
        <Text style={{color:"#1792D5",fontWeight:"bold",fontSize:15}}>{this.props.item.name}</Text>
        <Text style={{color:"black",fontSize:15}}>{this.props.item.email}</Text>
        <Text style={{color:"black",fontSize:15}}>{this.props.item.phone}</Text>
        </View>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end',left:35,bottom:25}}>
            <Image source={require('./assets/icons/ICONS/8.png') } style={{position: 'absolute', right: 0,width:30,height:30}} ></Image>
        </View>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end',marginRight:"10%",bottom:10 }}>
           <TouchableOpacity onPress={this.deleteItem}>
                <Image source={require('./assets/icons/ICONS/9.png') } style={{ right: 0,width:30,height:30}} ></Image>
          </TouchableOpacity> 
        </View>
        
        </View>

      </Animated.View>
    );
  }
}

class Ani extends Component { 

  constructor(props) {

    super(props);
    this.state = { valueArray: [], disabled: false,data:'' }
    this.addNewElement = false;
    this.index = 0;
    this.call = true;

    this.addNewElement = true;
   

    //const text = this.props.navigation.getParams('name');
    
  }
  
  componentDidMount(){
    
    this.name = "teri";
    this.mail = "teri@gmail.com";
    this.phone = "7010846219";
    const newlyAddedValue = { id: "id_" + this.index,name:this.name,email:this.mail,phone:this.phone };

    this.setState({
      disabled: true,
      valueArray: [...this.state.valueArray, newlyAddedValue]
    });      
  }
 
    update(){
        Alert.alert("back_HOME");
    }
    
    
  afterAnimationComplete = () => {
    this.index += 1;
    this.setState({ disabled: false });
  }

  add_New_View = () => {
    this.addNewElement = true;
       if(this.props.route.params){
         Alert.alert("working",this.props.route.params.name );
        this.name = "shaki";
    this.mail = "undefined";
    this.phone = "undefined";
    this.call = false;
    }   
    else{
    this.name = this.props.route.params.name || "Arvi";
    this.mail = this.props.route.params.mail || "undefined";
    this.phone = this.props.route.params.phone || "undefined";
    }    
    //Alert.alert(this.props.route.params);  
    
      //var text = this.props.navigation.getParams('name','teri');
    //text();  
    const newlyAddedValue = { id: "id_" + this.index,name:this.name,email:this.mail,phone:this.phone };

    this.setState({
      disabled: true,
      valueArray: [...this.state.valueArray, newlyAddedValue]
    });
  }

  remove_Selected_Item(id) {
    this.addNewElement = false;
    const newArray = [...this.state.valueArray];
    newArray.splice(newArray.findIndex(ele => ele.id === id), 1);

    this.setState(() => {
      return {
        valueArray: newArray
      }
    }, () => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    });
  }

  render() {
    return (

     
      
      <View style={styles.container}>
         
        <View style = {{borderBottomColor: 'black', flexDirection:"row" ,borderBottomWidth: 1,backgroundColor:"#edf0f5",height:"7%",alignItems:"center", justifyContent:"center"}}  >
                <Text style = {{fontWeight:"bold",fontSize:20}}>TOTAL REQUEST</Text>
                <Text style = {{color:"#1792D5",fontWeight:"bold",fontSize:20}}> 7</Text>
            </View>  
            <View style = {{borderBottomColor: 'black', flexDirection:"row" ,borderBottomWidth: 1,backgroundColor:"#edf0f5",height:"7%",alignItems:"center", justifyContent:"center"}}  >
                <Text style = {{fontWeight:"bold",fontSize:20}}>PENDING REQUEST</Text>
                <Text style = {{color:"#1792D5",fontWeight:"bold",fontSize:20}}> 4</Text>
            </View>  
        
        <ScrollView
          ref={scrollView => this.scrollView = scrollView}
          onContentSizeChange={() => {
            this.addNewElement && this.scrollView.scrollToEnd();
          }}>

          <View style={{ flex: 1, padding: 0 }}>

            {this.state.valueArray.map(ele => {
              return (
                <Animated_Item
                  key={ele.id}
                  item={ele}
                  deleteItem={(id) => this.remove_Selected_Item(id)}
                  afterAnimationComplete={this.afterAnimationComplete}
                />
              )
            })}

          </View>

        </ScrollView>

        <TouchableOpacity
          activeOpacity={0.8}
          
          disabled={this.state.disabled}
          onPress={() => { this.props.navigation. navigate("reviewRequests") }} >
         <Text style={{fontWeight:"bold",color:"white",backgroundColor:"#39b54a",width:"100%",paddingVertical:"5%",paddingBottom:"10%",textAlign:"center",fontSize:20}}>CREATE REQUEST</Text>

        </TouchableOpacity>
        <View style={{position: 'absolute', left: 0, right: 0, bottom: 0,backgroundColor:"#1792D5",width:"100%"}}><Text> </Text></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    justifyContent: 'center',
    paddingTop: (Platform.OS == 'ios') ? 20 : 0
  },

  singleItemView: {
    backgroundColor: 'white',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingLeft: 16,
    margin: 5,
    borderRadius: 8
  },

  singleItemText: {
    color: '#fff',
    fontSize: 23,
    paddingRight: 18
  },

  TouchableOpacityStyle: {

    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },

  FloatingButtonStyle: {

    resizeMode: 'contain',
    width: 50,
    height: 50,
  },

  deleteButton: {
    position: 'absolute',
    left: 70,
    width: 25,
    height: 25,
    borderRadius: 18,
    padding: 7,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },

  removeIcon: {
    width: '100%',
    fontSize: 20
  }
});

export default withNavigation(Ani);