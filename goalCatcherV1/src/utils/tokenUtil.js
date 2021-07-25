import AsyncStorage from '@react-native-async-storage/async-storage';

export default class tokenUtil {
  static token = '';

  static async init() {
    const value = await AsyncStorage.getItem('goal_user_token');
    tokenUtil.token = value;
    return value;
  }

  static setToken(value) {
    AsyncStorage.setItem('goal_user_token', value);
    tokenUtil.token = value;
  }

  static clear() {
    AsyncStorage.removeItem('goal_user_token');
    tokenUtil.token = '';
  }
}
