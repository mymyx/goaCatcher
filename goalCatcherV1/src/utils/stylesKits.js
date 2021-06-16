import {Dimensions} from "react-native";
// 设计稿宽度/元素宽度=手机屏幕/手机中元素宽度
// 手机元素宽度=手机屏幕*元素宽度/设计稿宽度 376
// 屏幕宽度
export const screenWidth=Dimensions.get("window").width;
// 屏幕高度
export const screenHeight=Dimensions.get("window").height;
// elePx元素宽度或者高度
// 将像素转为dp
export const pxToDp=(elePx)=>screenWidth*elePx/376;