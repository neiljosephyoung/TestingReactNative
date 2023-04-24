import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity  } from 'react-native';
import {Picker} from '@react-native-picker/picker';

const App = () => {

  const [name, setName] = useState('');
  const [gender, setGender] = useState('');

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>User Information</Text>
      <TextInput
        placeholder="Enter name"
        value={name}
        onChangeText={text => setName(text)}
        style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, width: '80%', marginBottom: 20 }}
      />
      <Picker
        selectedValue={gender}
        onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
        style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, width: '80%', marginBottom: 20 }}
      >
        <Picker.Item label="Select Gender" value="" />
        <Picker.Item label="Male" value="male" />
        <Picker.Item label="Female" value="female" />
        <Picker.Item label="Other" value="other" />
      </Picker>
      <TouchableOpacity style={{ backgroundColor: '#007bff', padding: 10, borderRadius: 5 }}>
        <Text style={{ color: '#fff', fontSize: 18 }}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
