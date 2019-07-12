import React from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';

import CategoryListItem from './components/CategoryListItem';


export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <CategoryListItem title="Dog"/>
        <CategoryListItem title="Cat"/>
        <CategoryListItem title="Turtle"/>

        <CategoryListItem title="Dog"/>
        <CategoryListItem title="Cat"/>
        <CategoryListItem title="Turtle"/>

        <CategoryListItem title="Dog"/>
        <CategoryListItem title="Cat"/>
        <CategoryListItem title="Turtle"/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingLeft:16,
    paddingRight:16,
  },
});
