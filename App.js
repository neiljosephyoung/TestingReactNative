import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Button  } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { RNCamera } from 'react-native-camera';

export default function App() {
  const [url, setUrl] = useState('https://dog.ceo/api/breeds/image/random');
  const [method, setMethod] = useState('GET');
  const [response, setResponse] = useState('');

  const [showBarcodeScanner, setShowBarcodeScanner] = useState(false);

  const handleRequest = async () => {
    try {
      const options = {
        method: method
      }
      const res = await fetch(url, options);
      const json = await res.json();
      setResponse(JSON.stringify(json));
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Text style={styles.navbarText}>API Tester</Text>
      </View>
      <ScrollView>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>URL:</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setUrl(text)}
            value={url}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Method:</Text>
          <Picker
            selectedValue={method}
            onValueChange={(value) => setMethod(value)}
            style={styles.picker}
          >
            <Picker.Item label="GET" value="GET" />
            <Picker.Item label="POST" value="POST" />
            <Picker.Item label="PUT" value="PUT" />

          </Picker>
        </View>
       
        <TextInput
          style={styles.response}
          onChangeText={text => setResponse(text)}
          value={response}
          placeholder="Response"
          multiline={true}
          numberOfLines={10}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleRequest}
        >
          <Text style={styles.buttonText}>Send Request</Text>
        </TouchableOpacity>

        <View style={{ paddingBottom: 16 }}>
        <Button
          title="Barcode Scanner"
          onPress={() => setShowBarcodeScanner(!showBarcodeScanner)}
        />

        
      </View>
      {showBarcodeScanner && (
        <View style={{ flex: 1 }}>
          <RNCamera
            style={{ flex: 1 }}
            onBarCodeRead={(barcode) => console.log(barcode.data)}
          />
        </View>
      )}

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingTop: 50,
  },
  navbar: {
    backgroundColor: '#333',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navbarText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputContainer: {
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    marginRight: 10,
    marginTop: 40
  },
  input: {
    marginTop: 40,
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 5,
  },
  picker: {
    flex: 1,
  },
  button: {
    backgroundColor: '#007aff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginTop: 10,
    
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  response: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 5,
    marginTop: 10,
    height: 200,
  },
});
