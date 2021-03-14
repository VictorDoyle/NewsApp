import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { Input, Layout } from '@ui-kitten/components';

const useInputState = (initialValue = '') => {
  const [value, setValue] = React.useState(initialValue);
  return { value, onChangeText: setValue };
};

const EmailLogin = () => {

  const nameInputState = useInputState();
  const emailInputState = useInputState();

  return (
    <>

        {/* if input wrong, status='warning' {...warningInputState} */}

        <Layout style={styles.rowContainer} level='1'>
        <Input
          style={styles.input}
          status='name'
          placeholder='First &amp; Last Name'
          {...nameInputState}
        />
          </Layout>
        <Layout style={styles.rowContainer} level='1'>
        <Input
          style={styles.input}
          status='email'
          placeholder='Email'
          {...emailInputState}
        />
          </Layout>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
    margin: 2,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  controlContainer: {
    borderRadius: 4,
    margin: 2,
    padding: 6,
    backgroundColor: '#3366FF',
  },
});


export default EmailLogin