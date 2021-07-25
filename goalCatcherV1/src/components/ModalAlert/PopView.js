import React, { useRef } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Overlay, Label } from 'teaset';
import { pxToDp } from '../../utils/stylesKits';
import theme from '../../theme/default';

const PopView = ({
  onDisappearCompleted,
  content,
  onPressCancel,
  onPressOk,
}) => {
  const overlay = useRef(null);
  const onCancel = () => {
    // onDisappearCompleted && onDisappearCompleted();
    overlay.current?.close();
    onPressCancel && onPressCancel();
  };

  const onOk = () => {
    if (onPressOk) {
      onPressOk(onCancel);
    }
  };

  return (
    <Overlay.PopView
      ref={overlay}
      onDisappearCompleted={onDisappearCompleted}
      style={{ alignItems: 'center', justifyContent: 'center' }}>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Label size="md" text={content} numberOfLines={0} />
        </View>
        <View style={styles.actionContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.actionButton}
            onPress={onOk}>
            <Label text="Yes" size="lg" type="detail" />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.actionButton}
            onPress={onCancel}>
            <Label text="No" size="lg" style={{ color: theme.primaryColor }} />
          </TouchableOpacity>
        </View>
      </View>
    </Overlay.PopView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: 260,
    // minHeight: 180,
    borderRadius: 15,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  contentContainer: {
    padding: pxToDp(15),
  },
  actionContainer: {
    flexDirection: 'row',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: '#eee',
  },
  actionButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: pxToDp(40),
  },
});

export default PopView;
