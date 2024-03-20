// App.js
import React, { useState } from 'react';
import { View, Button } from 'react-native';
import TextInputComponent from './components/TextInputComponent';
import UserDataComponent from './components/UserDataComponent';

const App = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userData, setUserData] = useState([]);

  const handleAddUser = () => {
    if (firstName && lastName) {
      setUserData([...userData, { firstName, lastName }]);
      setFirstName('');
      setLastName('');
    }
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TextInputComponent
        placeholder="Enter First Name"
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInputComponent
        placeholder="Enter Last Name"
        value={lastName}
        onChangeText={setLastName}
      />
      <Button title="Add User" onPress={handleAddUser} />
      <UserDataComponent userData={userData} />
    </View>
  );
};

export default App;