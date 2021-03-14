/* base */
import React from 'react';
import { SafeAreaView,  StyleSheet } from 'react-native';
import { Divider, Button, ButtonGroup, Icon, Layout, Text,BottomNavigation, BottomNavigationTab, TopNavigation, TopNavigationAction } from '@ui-kitten/components';

/* atoms */
import EmailLogin from "../atoms/LogScreen/EmailLogin";
import PasswordInput from "../atoms/LogScreen/Password";
import SubmitButton from '../atoms/Buttons/Submit';
/* molecules */


const Login = ({ navigation }) => {


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

    <EmailLogin />
    <PasswordInput />
      <SubmitButton />
      

             
    </SafeAreaView>
    </>
  );
};

export default Login



