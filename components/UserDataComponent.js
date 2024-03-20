// UserDataComponent.js
import React from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';

const UserDataComponent = ({ userData }) => {
  return (
    <ScrollView style={styles.container}>
      {userData.map((user, index) => (
        <View key={index} style={styles.userContainer}>
          <Text>{`${user.firstName} ${user.lastName}`}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  userContainer: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'lightgray',
  },
});

export default UserDataComponent;
