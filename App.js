import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
/* pages */
import HomePage from './components/pages/HomePage'
/* vendor modules css lib */
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, Layout, Text } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';



import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,

  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Homepage from './components/pages/HomePage';
import MainFeed from './components/pages/MainFeed';
const Stack = createStackNavigator();

const MyStack = ({ navigation }) => {
  return (

      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Homepage}
        />
        <Stack.Screen name="MainFeed" component={MainFeed} />
      </Stack.Navigator>

  );
};

const App = () => {
  return (
    <>
       <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
        <MyStack/>
      </NavigationContainer>
    </ApplicationProvider>
    </>
  );
};

export default App;