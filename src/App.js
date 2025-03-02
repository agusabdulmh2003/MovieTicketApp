// src/App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import BookingScreen from './screens/BookingScreen';
import TicketScreen from './screens/TicketScreen';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Movies' }} />
                <Stack.Screen name="BookingScreen" component={BookingScreen} options={{ title: 'Book Seats' }} />
                <Stack.Screen name="TicketScreen" component={TicketScreen} options={{ title: 'Your Ticket' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
