import React,{Component} from 'react';
import {View,Text,StatusBar,TextInput,Dimensions,StyleSheet,TouchableOpacity,Image,ImageBackground} from 'react-native';
import {pxToDp} from "../../../utils/stylesKits";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input,Button } from 'react-native-elements';
import validator from "../../../utils/validator";
import request from "../../../utils/request";
import Toast from "../../../utils/Toast";
import {ACCOUNT_LOGIN} from "../../../utils/pathMap";
import {ACCOUNT_VALIDATEVCODE} from "../../../utils/pathMap";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

// 类组件
class Index extends Component{

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
      showLogin:false,
      // 验证码输入框的值
      vcodeText:"",

      // 接口返回的验证码
      vTrueCode:"",
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
// 监听用户名文本变化
  usernameText=(username)=>{
    this.setState({username});
    console.log('username:',username);
  }

  emailText=(email)=>{
    this.setState({email});
    console.log('email:',email);
  }

  passwordText=(password)=>{
    this.setState({password});
    console.log('password:',password);
  }

  passwordVerificationText=(verificatedPassword)=>{
    this.setState({verificatedPassword});
    console.log('passwordVerification:',verificatedPassword);
  }
  // 键盘点击完成时触发
  usernameSubmit=()=>{
    var usernameValidate=true;
    if(this.state.username.length==0){
      usernameValidate=false;
    }
    this.setState({usernameValidate});
  }
// 点击完成时触发
  emailSubmit=()=>{
    const emailValidate=validator.validateEmail(this.state.email);
    // if(!emailValidate){
    //   this.setState({emailValidate});
    //   return;
    // }
    this.setState({emailValidate});
  }

  // 点击完成时触发
  passwordSubmit=()=>{
    var passwordValidate=true;
    if(this.state.password.length<8){
      passwordValidate=false;
    }
    this.setState({passwordValidate});
  }

  // 点击完成时触发
  confirmPasswordSubmit=()=>{
    var confirmPasswordValidate=false;
    if(this.state.verificatedPassword==this.state.password){
      confirmPasswordValidate=true;
    }
    this.setState({confirmPasswordValidate});
  }
  // 点击注册按钮切换验证码界面
  signup=()=>{
    if(this.state.emailValidate==true&&this.state.username.length!=0&&this.state.password.length>=8&&this.state.password==this.state.verificatedPassword){
      var showLogin=false;
      console.log(showLogin);
      this.setState({showLogin});
    }
    else{
      Toast.message("Please input valid user information",2000,"center");
    }
  }

// 按按钮开启验证码定时器获取验证码
  countDown=async()=>{
    if(this.state.isCountDown){
      return;
    }
    console.log("开启倒计时");
    this.setState({vTrueCode:"666666"});
    // 调用获取验证码接口
    // const res=await request.post(ACCOUNT_LOGIN,{phone:this.state.email});
    // console.log("code",res.data);
    // // 请求成功
    // if(res.code=="10000"){
    //   this.setState({vTrueCode:res.data});
    // }
    // else{
    //   return;
    // }

    let seconds=5;
    this.setState({isCountDown:true});
    this.setState({disabled:true});
    this.setState({ btnText:'Resend verification code('+seconds+'s)'  });
    console.log(seconds);
    let timeId=setInterval(
      ()=>{
        seconds--;
        this.setState({btnText:'Resend verification code('+seconds+'s)'  });
        if(seconds===0){
          clearInterval(timeId);
          this.setState({ btnText:'Send verification code'  });
          this.setState({isCountDown:false});
          this.setState({disabled:false});
        }
      },1000
    );
  }

  // 验证码输入框的值改变事件
  onVodeChangeText=(vcodeText)=>{
    this.setState({vcodeText});
  }
  // 验证码输入完毕事件
  onVcodeSubmitEditing=async()=>{
    // 对验证码做校验
    const {email,vcodeText,vTrueCode}=this.state;
    if(vcodeText.length!=6){
      Toast.message("Verification code has 6 digits",2000,"center");
      return;
    }
    if(vTrueCode.length!=6){
      Toast.message("Click the button to get verification code",2000,"center");
      return;
    }
    // 验证码是否一致
    // const res=await request.post(ACCOUNT_VALIDATEVCODE,{
    //   phone:email,
    //   vcode:vcodeText
    // });
    // console.log(res);
    if(vcodeText==vTrueCode){
      Toast.message("Sucessful registration",2000,"center");
      // 调用登录接口
    }
    else{
      Toast.message("Wrong verification code",2000,"center");
      return;
    }

  }

  // 渲染登录界面
  renderLogin=()=>{
    return <View>
      <ImageBackground source={require("../../../images/loginbackground.png")}
      style={{width: '100%', height: '100%'}}>
        <View style={{flex:1/6,transform:[{translateY:pxToDp(135)}]}}>
          <Text style={this.state.signUpStyle}>Sign up
            </Text>
        </View>  
        {/* 输入框 */}
        <View style={{flex:1/13,transform:[{translateY:pxToDp(100)}]}}>
          <Input
            placeholder='Username'
            // 最大长度11
            maxLength={11}
            value={this.state.username}
            onChangeText={this.usernameText}
            onSubmitEditing={this.usernameSubmit}
            errorMessage={this.state.usernameValidate?"":"Please input a valid username"}
            leftIcon={{ type: 'font-awesome', name: 'user',color:"#979797",size:pxToDp(16)}}
          />
        </View>
        <View style={{flex:1/13,transform:[{translateY:pxToDp(100)}]}}>
          <Input
            placeholder='Email'
            maxLength={64}
            value={this.state.email}
            onChangeText={this.emailText}
            onSubmitEditing={this.emailSubmit}
            errorMessage={this.state.emailValidate?"":"Please input a valid email"}
            leftIcon={{ type: 'font-awesome', name: 'envelope' ,color:"#979797",size:pxToDp(16)}}
          />
        </View>
        <View style={{flex:1/13,transform:[{translateY:pxToDp(100)}]}}>
          <Input
            secureTextEntry={true}
            maxLength={256}
            value={this.state.password}
            onChangeText={this.passwordText}
            onSubmitEditing={this.passwordSubmit}
            placeholder='Password'
            errorMessage={this.state.passwordValidate?"":"Password must have at leat 8 characters"}
            leftIcon={{ type: 'font-awesome', name: 'lock',color:"#979797" ,size:pxToDp(16)}}
          />
        </View>
        <View style={{flex:1/13,transform:[{translateY:pxToDp(100)}]}}>
          <Input
            secureTextEntry={true}
            maxLength={256}
            value={this.state.verificatedPassword}
            onChangeText={this.passwordVerificationText}
            placeholder='Confirm password'
            onSubmitEditing={this.confirmPasswordSubmit}
            errorMessage={this.state.confirmPasswordValidate?"":"Your confirmed password and new password do not match"}
            leftIcon={{ type: 'font-awesome', name: 'lock' ,color:"#979797",size:pxToDp(16)}}
          />
        </View>
        {/* 注册按钮 */}
        <View style={{width:Dimensions
          .get('window').width,
          alignItems:'center',
          position:'absolute',
          justifyContent:'center',
          transform:[{translateY:pxToDp(480)}]}}>
          <Button title="Register"
                  onPress={this.signup}
                  buttonStyle={{borderRadius:100,backgroundColor:"#FD6D04",width:200}}
                />
        </View>
      </ImageBackground>
    </View>
  }

  // 渲染验证码界面
  renderVcode=()=>{
    return <View>
      <ImageBackground source={require("../../../images/loginbackground.png")}
      style={{width: '100%', height: '100%'}}>
        <View style={{alignItems:'center',flex:1/6,transform:[{translateY:pxToDp(135)}]}}>
          <Text style={{
                opacity:1,
                color:"#FD6D04",
                fontSize:50,
                textAlign:"center",
                marginLeft:20,
                marginRight:20}}>Check your mailbox!
          </Text>
        </View>
        <View style={{alignItems:'center',flex:1/6,transform:[{translateY:pxToDp(150)}]}}>
          <Text style={{opacity:1,
                        color:"#979797",
                        fontSize:18,
                        textAlign:"justify",
                        marginLeft:30,
                        marginRight:30
                        }}>Once you click the button please input the verification code sent to your mailbox: {this.state.email} to finish registration
          </Text>
        </View>
        {/* 验证码输入框 */}
        <View style={{transform:[{translateY:Dimensions
            .get('window').height/6}]}}>
          <CodeField
            // ref={ref}
            // {...props}
            // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
            value={this.state.vcodeText}
            onChangeText={this.onVodeChangeText}
            onSubmitEditing={this.onVcodeSubmitEditing}
            cellCount={6}
            rootStyle={styles.codeFieldRoot}
            keyboardType="default"
            textContentType="oneTimeCode"
            renderCell={({index, symbol, isFocused}) => (
              <Text
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}/>
        </View>
        
        {/* 重发验证码按钮 */}
        <View style={{
          width:Dimensions
          .get('window').width,
          alignItems:'center',
          position:'absolute',
          justifyContent:'center',
          transform:[{translateY:Dimensions
            .get('window').height/1.7}]}}>
          <Button title={this.state.btnText}
                  onPress={this.countDown}
                  disabled={this.state.disabled}
                  buttonStyle={{borderRadius:100,backgroundColor:"#FD6D04",width:250}}
                />
        </View>
      </ImageBackground>
    </View>
  }
  render(){
    console.log("2.render");
    return <View>
      {/* 设置透明状态栏 */}
      <StatusBar backgroundColor="transparent" translucent={true}/>
      
      {this.state.showLogin?this.renderLogin():this.renderVcode()}
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

export default Index;