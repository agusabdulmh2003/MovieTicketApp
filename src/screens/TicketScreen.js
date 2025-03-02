import React from 'react';
import { View, Text } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const TicketScreen = ({ route }) => {
    const { ticket } = route.params;

    return (
        <View style={{ padding: 20, alignItems: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Your Ticket</Text>
            <QRCode value={ticket.qr_code} size={200} />
            <Text style={{ marginTop: 20 }}>Movie: {ticket.movie.title}</Text>
            <Text>Seats: {ticket.seats.join(', ')}</Text>
        </View>
    );
};

export default TicketScreen;
