import React from 'react';
import { Label } from 'teaset';
import commonStyles from './styles';

const FormLabel = ({ title }) => {
  return (
    <Label
      text={title}
      size="lg"
      style={{
        marginBottom: commonStyles.LABEL_BOTTOM_SIZE,
      }}
    />
  );
};

export default FormLabel;
