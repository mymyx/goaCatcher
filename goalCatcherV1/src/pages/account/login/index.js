import React,{Component} from 'react';
import {View,Text,TextInput,Dimensions,Stylesheet,TouchableOpacity,Image,ImageBackground} from 'react-native';


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
      // 橙色
      textColor:"#FD6D04",
      // 灰色
      grey:"#979797",
      // 字体
      fonts:"ABeeZee-Regular",

      show:true
    }
  }

  render(){
    console.log("2.render");
    return <View>
        {/* 设置背景图片虚化 */}
        <ImageBackground source={require("./images/loginbackground.png")} 
        style={{width: '100%', height: '100%'}}
        // blurRadius={9}
        >
          <Text onPress={this.handlePress} style={{
             opacity:1,
            color:this.state.textColor,
            fontSize:this.state.topFontSize,
            textAlign:"center",transform:[{translateY:160}]}}>Sign up
          </Text>
        </ImageBackground>
    </View>
  }
}

export default Index;