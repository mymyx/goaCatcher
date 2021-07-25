import React from 'react';
import { Overlay } from 'teaset';
import PopView from './PopView';

export default class ModalAlert {
  static show({ content, onPressOk, onPressCancel }) {
    Overlay.show(
      <PopView
        content={content}
        onPressOk={onPressOk}
        onPressCancel={onPressCancel}
      />,
    );
  }
}
