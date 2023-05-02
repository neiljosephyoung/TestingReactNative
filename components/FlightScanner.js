import * as React from 'react';
import { View, Text } from 'react-native';

export default function FlightScanner(){

    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => alert('Flight Scanner info')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Flight Scanner info</Text>
                
        </View>
    )
}