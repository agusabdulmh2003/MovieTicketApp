import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { WebView } from 'react-native-webview';

const BookingScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [movie, setMovie] = useState('1'); // Default film
    const [seats, setSeats] = useState('');

    const createOrder = async () => {
        const response = await fetch('http://127.0.0.1:8000/api/orders', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, movie_id: movie, seats: seats.split(','), total_price: 50000 })
        });
        const data = await response.json();

        if (data.id) {
            // Panggil API pembayaran Midtrans
            const paymentResponse = await fetch('http://127.0.0.1:8000/api/payment', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ order_id: data.id })
            });
            const paymentData = await paymentResponse.json();

            if (paymentData.snap_token) {
                navigation.navigate('Payment', { snapUrl: `https://app.sandbox.midtrans.com/snap/v2/vtweb/${paymentData.snap_token}` });
            } else {
                Alert.alert('Error', 'Gagal membuat transaksi pembayaran');
            }
        } else {
            Alert.alert('Error', 'Gagal membuat pesanan');
        }
    };

    return (
        <View style={{ padding: 20 }}>
            <Text>Email:</Text>
            <TextInput style={{ borderBottomWidth: 1, marginBottom: 10 }} value={email} onChangeText={setEmail} />
            
            <Text>Movie:</Text>
            <TextInput style={{ borderBottomWidth: 1, marginBottom: 10 }} value={movie} onChangeText={setMovie} />

            <Text>Seats (pisahkan dengan koma):</Text>
            <TextInput style={{ borderBottomWidth: 1, marginBottom: 10 }} value={seats} onChangeText={setSeats} />

            <Button title="Book Ticket" onPress={createOrder} />
        </View>
    );
};

export default BookingScreen;
