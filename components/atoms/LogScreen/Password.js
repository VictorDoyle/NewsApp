import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { Icon, Input } from '@ui-kitten/components';

const AlertIcon = (props) => (
  <Icon {...props} name='alert-circle-outline'/>
);

const PasswordInput = () => {

  const [value, setValue] = React.useState('');
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = (props) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'}/>
    </TouchableWithoutFeedback>
  );

  return (
    <Input
      value={value}
      label='Password'
      placeholder='Your Password'
      caption='Click The Eye To View Your Input'
      accessoryRight={renderIcon}
      captionIcon={AlertIcon}
      secureTextEntry={secureTextEntry}
      onChangeText={nextValue => setValue(nextValue)}
    />
  );
};

export default PasswordInput