import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Alert } from 'react-native';
import { fetchSeats, processPayment } from '../utils/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BookingScreen = ({ route, navigation }) => {
    const { movie } = route.params;
    const [seats, setSeats] = useState([]);
    const [selectedSeats, setSelectedSeats] = useState([]);

    useEffect(() => {
        fetchSeats(movie.id).then(setSeats).catch(console.error);
    }, []);

    const toggleSeatSelection = (seatId) => {
        setSelectedSeats(prev => prev.includes(seatId) ? prev.filter(id => id !== seatId) : [...prev, seatId]);
    };

    const handlePayment = async () => {
        if (selectedSeats.length === 0) return Alert.alert('Error', 'Please select at least one seat');

        try {
            const ticket = await processPayment(movie.id, selectedSeats);
            await AsyncStorage.setItem('ticket', JSON.stringify(ticket));
            navigation.navigate('TicketScreen', { ticket });
        } catch (error) {
            console.error('Payment error:', error);
        }
    };

    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{movie.title}</Text>
            <FlatList
                data={seats}
                keyExtractor={(item) => item.id.toString()}
                numColumns={5}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={{ padding: 10, margin: 5, backgroundColor: selectedSeats.includes(item.id) ? 'green' : 'gray', borderRadius: 10 }}
                        onPress={() => toggleSeatSelection(item.id)}
                    >
                        <Text style={{ color: '#fff' }}>{item.number}</Text>
                    </TouchableOpacity>
                )}
            />
            <TouchableOpacity
                style={{ padding: 15, backgroundColor: 'blue', marginTop: 20, borderRadius: 10 }}
                onPress={handlePayment}
            >
                <Text style={{ color: '#fff', textAlign: 'center' }}>Proceed to Payment</Text>
            </TouchableOpacity>
        </View>
    );
};

export default BookingScreen;

