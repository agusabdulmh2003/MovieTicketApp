import AsyncStorage from '@react-native-async-storage/async-storage';
export const saveTicket = async (ticket) => {
    try {
        await AsyncStorage.setItem(`ticket_${ticket.id}`, JSON.stringify(ticket));
    } catch (error) {
        console.error('Error saving ticket:', error);
    }
};
export const getTicket = async (ticketId) => {
    try {
        const ticket = await AsyncStorage.getItem(`ticket_${ticketId}`);
        return ticket ? JSON.parse(ticket) : null;
    } catch (error) {
        console.error('Error retrieving ticket:', error);
    }
};