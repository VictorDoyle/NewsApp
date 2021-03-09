/* base */
import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Button, Divider, Layout, TopNavigation, Text} from '@ui-kitten/components';

/* atoms */

/* molecules */








export const LandingPage = ({ navigation }) => {

  const navigateMainFeed = () => {
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
     
      <Divider/>
      <Layout style={{ flex: 4, justifyContent: 'center', alignItems: 'center' }}>
      <Text category='h2'>Welcome To The Interactive Social Media Application: Learnify</Text>
      </Layout>
      <Layout style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
      <Button onPress={navigateMainFeed}>  Ready To Learn?</Button>
      </Layout>

    
    </SafeAreaView>
  );
};

export default LandingPage