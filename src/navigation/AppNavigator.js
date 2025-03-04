import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import BookingScreen from '../screens/BookingScreen';
import PaymentScreen from '../screens/PaymentScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Booking">
                <Stack.Screen name="Booking" component={BookingScreen} options={{ title: 'Book Movie Ticket' }} />
                <Stack.Screen name="Payment" component={PaymentScreen} options={{ title: 'Payment' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
