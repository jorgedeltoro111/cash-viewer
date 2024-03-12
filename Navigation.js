import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; 
import { NavigationContainer } from "@react-navigation/native"; 
import Icon from 'react-native-vector-icons/FontAwesome5';
//screens
import HomeScreen from './screens/HomeScreen';
import FinanceScreen from './screens/FinanceScreen';
import SettingsScreen from './screens/SettingsScreen';
import RegistroScreen from './screens/RegistroScreen';


const Tab = createBottomTabNavigator();

function MyTabs(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Detector" component={HomeScreen} options={{
            tabBarIcon: ({color, size}) => <Icon name="camera" color={color} size={size}/>,
            }}/>
            <Tab.Screen name="Finanzas" component={FinanceScreen} options={{
                tabBarIcon: ({color, size}) => <Icon name="money-check-alt" color={color} size={size}/>,
            }}/>
            <Tab.Screen name="Configuración" component={SettingsScreen} options={{
                tabBarIcon: ({color, size}) => <Icon name="user-cog" color={color} size={size}/>,
            }}/>
        </Tab.Navigator>
    );
}

export default function Navigation(){
    return(
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    );
}