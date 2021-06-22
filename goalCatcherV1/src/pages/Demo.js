import React, {useState,Component} from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const styles = StyleSheet.create({
  root: {flex: 1, padding: 20},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {marginTop: 20},
//   未选中单元格样式
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderBottomWidth: 2,
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

const CELL_COUNT = 6;
class App extends Component {
    state = { 
        vcodeText:""
    }
    onVodeChangeText=(vcodeText)=>{
        this.setState({vcodeText});
    }

    render() { 
        return (
              <CodeField
                // ref={ref}
                // {...props}
                // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                value={this.state.vcodeText}
                onChangeText={this.onVodeChangeText}
                cellCount={CELL_COUNT}
                rootStyle={styles.codeFieldRoot}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={({index, symbol, isFocused}) => (
                  <Text
                    key={index}
                    style={[styles.cell, isFocused && styles.focusCell]}>
                    {symbol || (isFocused ? <Cursor /> : null)}
                  </Text>
                )}
              />
          );
        
        
    }
}

export default App;