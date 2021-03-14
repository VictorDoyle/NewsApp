import React from 'react';
import { StyleSheet} from 'react-native';
import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';


const styles = StyleSheet.create({
    
    navBar: {
        marginBottom: 0,
        
        marginTop: 750,
    }
  });


 const IntroButtons = () => {

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <>
    <BottomNavigation
      selectedIndex={selectedIndex}
      onSelect={index => setSelectedIndex(index)}
      style={styles.navBar}>
      <BottomNavigationTab  title='LEARN'/>
      <BottomNavigationTab  title='GROW'/>
      <BottomNavigationTab  title='READ MORE'/>
    </BottomNavigation>
    </>
  );
};

export default IntroButtons