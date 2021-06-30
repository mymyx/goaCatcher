import React,{Component} from 'react';
import {View,Text,StatusBar,TextInput,Dimensions,StyleSheet,TouchableOpacity,Image,ImageBackground} from 'react-native';
import {pxToDp} from "../../../utils/stylesKits";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input,Button } from 'react-native-elements';
import validator from "../../../utils/validator";
import request from "../../../utils/request";
import Toast from "../../../utils/Toast";
import {ACCOUNT_LOGIN} from "../../../utils/pathMap";
import SyncStorage from "../../../utils/SyncStorage";
import {ACCOUNT_VALIDATEVCODE} from "../../../utils/pathMap";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
// 类组件
class main extends Component{
  // 构造函数，用于组件初始化
  constructor(){
    super();
    console.log("1.constructor");

    // 类组件内部数据/状态
    this.state={
      // 用户名
      username:"",
      // 邮箱
      email:"",
      // 密码
      password:"",
      // 二次输入密码
      verificatedPassword:"",
      // 用户名是否合法
      usernameValidate:true,
      // 邮箱是否合法
      emailValidate:true,
      // 密码是否合法
      passwordValidate:true,
      // 两次密码是否一致
      confirmPasswordValidate:true,
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
      // 是否显示登录界面 true表示登录 false表示验证码界面
      showLogin:true,
      // 验证码输入框的值
      vcodeText:"",

      // 接口返回的验证码
      vTrueCode:"666666",
      // 倒计时按钮文本
      btnText:"Send verification code",
      // 是否在倒计时中
      isCountDown:false,
      // 控制验证码按钮
      disabled:false,

      // Sign up样式
      signUpStyle:{
        opacity:1,
        color:"#FD6D04",
        fontSize:50,
        textAlign:"center"}
    }
  }

  render(){
    console.log("2.render main page");
    console.log("3",SyncStorage.getValue("username/email"));
    return <View>
      {/* 设置透明状态栏 */}
      <StatusBar backgroundColor="transparent" translucent={true}/>
      {/* 背景 */}
      <ImageBackground source={require("../../../images/loginbackground.png")}
      style={{width: '100%', height: '100%'}}>
        
      </ImageBackground>
    </View>
  }
}

const styles = StyleSheet.create({
  root: {flex: 1, padding: 20},
  title: {textAlign: 'center', fontSize: 30},
  // codeFieldRoot: {marginTop: 20},
//   未选中单元格样式
  cell: {
    width: 37,
    height: 37,
    marginLeft:13,
    marginRight:13,
    lineHeight: 32,
    fontSize: 24,
    borderWidth: 2,
    borderColor: '#979797',
    textAlign: 'center',
    color:'#FD6D04'
  },
//   选中输入单元格样式
  focusCell: {
    borderColor: '#FD6D04',
    color:'#FD6D04'
  },
});

export default main;