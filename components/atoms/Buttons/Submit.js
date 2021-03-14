import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Icon, Layout, Spinner } from '@ui-kitten/components';


const LoadingIndicator = (props) => (
  <View style={[props.style, styles.indicator]}>
    <Spinner size='small'/>
  </View>
);

const SubmitButton = () => (
  <Layout style={styles.container} level='1'>

    <Button style={styles.button} status='primary'>
      Submit
    </Button>
{/* on fetch, await and loader show */}
  {/*   <Button style={styles.button} appearance='outline' accessoryLeft={LoadingIndicator}>
      LOADING
    </Button> */}

  </Layout>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    margin: 2,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  indicator: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SubmitButton