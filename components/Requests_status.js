import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
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
    View
  } from 'react-native';
 
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

class request_status extends Component {
    constructor() {
        super();
        this.state = { valueArray: [], disabled: false,total_request:6,pending_request:4 }
        this.addNewElement = false;
        this.index = 0;
      }
      afterAnimationComplete = () => {
        this.index += 1;
        this.setState({ disabled: false });
      }
    
      add_New_View = () => {
        this.addNewElement = true;
        const newlyAddedValue = { id: "id_" + this.index, text: this.index + 1,name:"teriboi",email:"teriboi@gmail.com",phone:9787076757 };
    
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
            <View style = {{borderBottomColor: 'black', flexDirection:"row"  ,borderBottomWidth: 1,backgroundColor:"#edf0f5",height:"7%",justifyContent: "center",alignItems:"center",paddingBottom:"7%"}}  >
                <Text style = {{marginLeft:0,backgroundColor:"#edf0f5",height:"10%",textAlign: 'center',fontWeight: 'bold',weight:"100%",fontSize: 18}}>TOTAL REQUEST</Text>
                <Text style = {{marginLeft:0,backgroundColor:"#edf0f5",height:"10%",textAlign: 'center',color:"#1792D5",fontWeight: 'bold',weight:"100%",fontSize: 20}}> {this.state.total_request}</Text>
            </View>
            <View style = {{borderBottomColor: 'black',  flexDirection:"row",borderBottomWidth: 1,backgroundColor:"#edf0f5",height:"7%",justifyContent: "center",alignItems:"center",paddingBottom:"7%"}}  >
                <Text style = {{marginLeft:0,backgroundColor:"#edf0f5",height:"10%",textAlign: 'center',fontWeight: 'bold',weight:"100%",fontSize: 18}}>PENDING REQUEST </Text> 
                <Text style = {{marginLeft:0,backgroundColor:"#edf0f5",height:"10%",textAlign: 'center',color:"#1792D5",fontWeight: 'bold',weight:"100%",fontSize: 20}}> {this.state.pending_request}</Text> 
            </View>
            <View style = {{alignItems:"center",justifyContent: "center",padding:"10%"}}>
            <Text style = {{fontSize:20,textAlign: 'center'}}> Scan The Code To Submit Your Review</Text></View>
            
            <View style={{position: 'absolute', left: 0, right: 0, bottom: 0,backgroundColor:"#1792D5",width:"100%"}}><Text> </Text></View>
            
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
          style={styles.TouchableOpacityStyle}
          disabled={this.state.disabled}
          onPress={this.add_New_View}>

          <Image
            source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2017/11/Floating_Button.png' }}
            style={styles.FloatingButtonStyle}
          />

        </TouchableOpacity>
         
         
         
         
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
      
    });
    
  export default request_status;