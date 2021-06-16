import React,{Component} from 'react';
import {View,Text,StatusBar,TextInput,Dimensions,Stylesheet,TouchableOpacity,Image,ImageBackground, Button} from 'react-native';
import {pxToDp} from "../../../utils/stylesKits";

// 类组件
class Index extends Component{

// 构造函数，用于组件初始化
  constructor(){
    super();
    console.log("1.constructor");

    // 类组件内部数据/状态
    this.state={
      // sign up字体大小
      topFontSize:50,
      // 输入框字体大小
      inputFontSize:16,
      // 橙色
      textColor:"#FD6D04",
      // 灰色
      grey:"#979797",
      // 边框颜色
      white:'#fff',
      // 字体
      fonts:"ABeeZee-Regular",
      // 输入框样式
      edit:{
        // 输入栏边框
        borderRadius:10,
        borderColor:'#BFBFBF',
        borderWidth:1,
        // 输入栏间距
        marginTop:pxToDp(10),
        marginLeft:pxToDp(45),
        marginRight:pxToDp(45),
        // 透明度
        opacity:1,
        color:"#979797",
        fontSize:16,
        height: pxToDp(40),
        // width: 40,
        // textAlign:"center",
        backgroundColor:'#fff',
        transform:[{translateY:pxToDp(160)}]},
      // Sign up样式
      signUpStyle:{
        opacity:1,
        color:"#FD6D04",
        fontSize:50,
        textAlign:"center",transform:[{translateY:pxToDp(135)}]},
      // 按钮样式
      buttonStyle:{
        width:pxToDp(164),
        fontSize:16,
        textAlign:"center",transform:[{translateY:pxToDp(180)}]},
      show:true
    }
  }

  render(){
    console.log("2.render");
    return <View>
      {/* 设置透明状态栏 */}
      <StatusBar backgroundColor="transparent" translucent={true}/>
      {/* 背景 */}
      <ImageBackground source={require("../../../images/loginbackground.png")} 
      style={{width: '100%', height: '100%'}}>
        <Text style={this.state.signUpStyle}>Sign up
        </Text>
        {/* 输入框 */}
        <View>
          {/* 用户名 */}
          <TextInput style={this.state.edit}
            underlineColorAndroid='transparent'
            placeholder='Username'
            clearButtonMode="while-editing"/>

          {/* 邮箱 */}
          <TextInput style={this.state.edit}
            underlineColorAndroid='transparent'
            placeholder='Email'
            clearButtonMode="while-editing"/>

          {/* 密码 */}
          <TextInput style={this.state.edit}
            underlineColorAndroid='transparent'
            placeholder='Password'
            password={true}
            clearButtonMode="while-editing"/>

          {/* 确认密码 */}
          <TextInput style={this.state.edit}
            underlineColorAndroid='transparent'
            placeholder='Confirm Password'
            password={true}
            clearButtonMode="while-editing"/>
          {/* 注册按钮 */}
        </View>
      </ImageBackground>
    </View>
  }
}

export default Index;