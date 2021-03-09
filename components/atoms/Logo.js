import React from 'react';
import { StyleSheet } from 'react-native';
import { Icon } from '@ui-kitten/components';

const Logo = () => (
  <Icon
    style={styles.icon}
    fill='#8F9BB3'
    name='book-open-outline'
  />
);

const styles = StyleSheet.create({
  icon: {
    width: 32,
    height: 32,
  },
});

export default Logo