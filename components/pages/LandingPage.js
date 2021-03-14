/* base */
import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Button, Divider, Layout, TopNavigation, Text} from '@ui-kitten/components';

/* atoms */

/* molecules */


const styles = StyleSheet.create({
    
  mainPageButtons: {
    marginBottom: 30,
  }
});




export const LandingPage = ({ navigation }) => {

  const navigateMainFeed = () => {
    navigation.navigate('Home');
  };

  const navigateLogin = () => {
    navigation.navigate('Login');
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
     
      <Divider/>
      <Layout style={{ flex: 4, justifyContent: 'center', alignItems: 'center' }}>
      <Text category='h2'>Welcome To Learnify</Text>
      </Layout>
      <Layout style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
      <Button style={styles.mainPageButtons} onPress={navigateMainFeed}>  Ready To Learn?</Button>
      <Button style={styles.mainPageButtons} onPress={navigateLogin}>  Login</Button>
      </Layout>

    
    </SafeAreaView>
  );
};

export default LandingPage