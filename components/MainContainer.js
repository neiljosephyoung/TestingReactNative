import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from '../components/HomeScreen';
import SettingsScreen from '../components/SettingsScreen';
import ApiTester from '../components/ApiTester';
import FlightScanner from '../components/FlightScanner';


const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer >
      <Tab.Navigator
        initialRouteName={"Home"}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === "Home") {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === "Settings") {
              iconName = focused ? 'settings' : 'settings-outline';
            } else if(rn === "Api Tester"){
                iconName = focused ? 'hammer' : 'hammer-outline';
            }else if(rn === "Flight Scanner"){
                iconName = focused ? 'airplane' : 'airplane-outline';
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        >

        <Tab.Screen name={"Home"} component={HomeScreen} />
        <Tab.Screen name={"Api Tester"} component={ApiTester} />
        <Tab.Screen name={"Flight Scanner"} component={FlightScanner} />
        <Tab.Screen name={"Settings"} component={SettingsScreen} />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;