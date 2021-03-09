import React from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Divider, Layout, TopNavigation } from '@ui-kitten/components';

export const Homepage = ({ navigation }) => {

  const navigateMainFeed = () => {
    navigation.navigate('MainFeed');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title='MyApp' alignment='center'/>
      <Divider/>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button onPress={navigateMainFeed}>OPEN MAIN FEED</Button>
      </Layout>
    </SafeAreaView>
  );
};

export default Homepage