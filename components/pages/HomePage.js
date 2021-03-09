/* base */
import React from 'react';
import { SafeAreaView } from 'react-native';
import { Divider, Icon, Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';


/* atoms */

/* molecules */



const BackIcon = (props) => (
  <Icon {...props} name='arrow-back' />
);

export const HomePage = ({ navigation }) => {

  /* return button */
/*   const navigateBack = () => {
    navigation.goBack();
  }; */
/*   const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
  );
 */
  return (
    <SafeAreaView style={{ flex: 1 }}>
      
      <Divider/>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text category='h1'>DETAILS</Text>
      </Layout>
    </SafeAreaView>
  );
};

export default HomePage