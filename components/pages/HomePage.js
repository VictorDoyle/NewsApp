/* base */
import React from 'react';
import { SafeAreaView,  StyleSheet } from 'react-native';
import { Divider, Button, ButtonGroup, Icon, Layout, Text,BottomNavigation, BottomNavigationTab, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
/* atoms */

/* molecules */
import IntroButtons from "../molecules/Introduction"


/* const BackIcon = (props) => (
  <Icon {...props} name='arrow-back' />
);
 */
const HomePage = ({ navigation }) => {


          /* return button */
        /*   const navigateBack = () => {
            navigation.goBack();
          }; */
        /*   const BackAction = () => (
            <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
          );
        */


  return (
    <>
    <SafeAreaView style={{ flex: 1 }}>
      
      <Divider/>
              
    

            <IntroButtons />         
      

             
    </SafeAreaView>
    </>
  );
};

export default HomePage



