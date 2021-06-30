import React,{Component,useState} from 'react';
import {View,Text,StatusBar,TextInput,Dimensions,Stylesheet,TouchableOpacity,Image,ImageBackground} from 'react-native';
import {pxToDp} from "../../../utils/stylesKits";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input,Button,CheckBox } from 'react-native-elements';
import validator from "../../../utils/validator";
import request from "../../../utils/request";
import SyncStorage from "../../../utils/SyncStorage";
import Toast from '../../../utils/Toast';
import { ACCOUNT_LOGIN } from '../../../utils/pathMap';
// 类组件
class accountLogin extends Component{

// 构造函数，用于组件初始化
  constructor(){
    super();
    console.log("1.constructor");

    // 类组件内部数据/状态
    this.state={
      width:Dimensions
      .get('window').width,
      height:Dimensions
      .get('window').height,
      // 邮箱或用户名
      emailOrUsername:SyncStorage.getValue("username/email"),
      // 密码
      password:SyncStorage.getValue("password"),
      // 密码是否合法
      passwordValidate:true,
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
      // 是否点击checkbox
      isSelected:true,
      // 字体
      fonts:"ABeeZee-Regular",

      token:"",
      // Sign up样式
      signUpStyle:{
        opacity:1,
        color:"#FD6D04",
        fontSize:50,
        textAlign:"center"}
    }
  }
  // 用户输入框获得焦点时文本清空
  focus=()=>{
    const emailOrUsername="";
    this.setState({emailOrUsername});
  }
  passwordFocus=()=>{
    const password="";
    this.setState({password});
  }

  emailOrUsernameText=(emailOrUsername)=>{
    this.setState({emailOrUsername})
    console.log('user name or email:',emailOrUsername);
  }


  passwordText=(password)=>{
    this.setState({password});
    console.log('password:',password);
  }

  resetPassword=()=>{
    this.props.navigation.navigate("Reset");
  }
  // 点击完成时触发验证密码合法性
  passwordSubmit=()=>{
    var passwordValidate=true;
    if(this.state.password.length<8){
      passwordValidate=false;
    }
    this.setState({passwordValidate});
  }
  //勾选框
  select=()=>{
    console.log("check");
    var isSelected=!this.state.isSelected;
    this.setState({isSelected});
  }
  // 按钮事件
  rememberMe=async()=>{
    // 跳转到主界面
    if(this.state.emailOrUsername.length!=0&&this.state.password.length>=8){
      if (this.state.isSelected==true){
        SyncStorage.setValue("password",this.state.password);
      }
      else{
        SyncStorage.setValue("password","");
      }

      // 登录接口
      var queryString=require('querystring');
      const res=await request.post(ACCOUNT_LOGIN,queryString.stringify({
        'password':this.state.password,
        'email':this.state.emailOrUsername,
      }));
      console.log(res);

      if (res.status==true){
        var token=res.token;
        this.setState({token});
        console.log(this.state.token);
      }
      else{
        Toast.message("Something went wrong, please check your network",2000,"center");
      }
      // 跳转
      this.props.navigation.navigate("Main");
      SyncStorage.setValue("username/email",this.state.emailOrUsername);
    }
    else{
      Toast.message("Wrong username/email or password!",2000,"center");
    }
  }


  render(){
    console.log("2.render");
    console.log(SyncStorage.getValue("username/email"));
    return <View>
      {/* 设置透明状态栏 */}
      <StatusBar backgroundColor="transparent" translucent={true}/>
      {/* 背景 */}
      <ImageBackground source={require("../../../images/loginbackground.png")} 
      style={{width: '100%', height: '100%'}}>
        <View style={{flex:1/6,transform:[{translateY:pxToDp(135)}]}}>
        <Text style={this.state.signUpStyle}>Login
          </Text>
        </View>
        
        {/* 输入框 */}
        <View style={{flex:1/13,transform:[{translateY:pxToDp(100)}]}}>
          <Input
            placeholder={"username/email"}
            maxLength={64}
            onFocus={this.focus}
            value={this.state.emailOrUsername}
            onChangeText={this.emailOrUsernameText}
            // errorMessage={this.state.emailValidate?"":"Please input a valid email/username"}
            leftIcon={{ type: 'font-awesome', name: 'envelope' ,color:"#979797",size:pxToDp(16)}}
          />
        </View>
        <View style={{flex:1/13,transform:[{translateY:pxToDp(100)}]}}>
          <Input
            secureTextEntry={true}
            maxLength={256}
            value={this.state.password}
            onChangeText={this.passwordText}
            onFocus={this.passwordFocus}
            onSubmitEditing={this.passwordSubmit}
            placeholder='Password'
            errorMessage={this.state.passwordValidate?"":"Password must have at leat 8 characters"}
            leftIcon={{ type: 'font-awesome', name: 'lock',color:"#979797" ,size:pxToDp(16)}}
          />
        </View>
        {/* check box */}
        <View style={{width:this.state.width,
                flexDirection:"row",
                position:'absolute',
                transform:[{translateY:pxToDp(350)}]}}>
          <View style={{marginLeft:35,alignItems:'flex-end',flex:1/7}}>
            <CheckBox
              checked={this.state.isSelected}
              onPress={this.select}
            />
          </View>
          <View style={{alignItems:'flex-start',flex:5/14}}>
            <Text style={{
              color:this.state.grey,
              transform:[{translateY:17},{translateX:-15}]
            }}>
              Remember me
            </Text>
          </View>
          <View style={{marginRight:35,alignItems:'flex-end',flex:1/2}}>
            <Text onPress={this.resetPassword}
            style={{
              color:this.state.textColor,
              transform:[{translateY:17}]
            }}>
              Forgot your password?
            </Text>
          </View>
        </View>
        
      {/* 按钮 */}
        <View style={{width:this.state.width,
          alignItems:'center',
          position:'absolute',
          justifyContent:'center',
          transform:[{translateY:pxToDp(400)}]}}>
          <Button title="Login"
                  buttonStyle={{borderRadius:100,backgroundColor:"#FD6D04",width:200}}
                  onPress={this.rememberMe}
                 />
        </View>
        
      </ImageBackground>
    </View>
  }
}

export default accountLogin;