import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; 
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native"; 
import Icon from 'react-native-vector-icons/FontAwesome5';
//screens
import HomeScreen from './screens/HomeScreen';
import FinanceScreen from './screens/FinanceScreen';
import SettingsScreen from './screens/SettingsScreen';
import IngresarDinero from './components/IngresarDinero';
import RetirarDinero from "./components/RetirarDinero";


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Atrás" component={MyTabs} options={{headerShown: false}}/>
            <Stack.Screen name="IngresarDinero" component={IngresarDinero}/>
            <Stack.Screen name="RetirarDinero" component={RetirarDinero}/>
        </Stack.Navigator>
    )
}

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
            <MainStack/>
        </NavigationContainer>
    );
}