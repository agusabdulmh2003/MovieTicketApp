
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { fetchMovies } from '../utils/api';

const HomeScreen = ({ navigation }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchMovies().then(setMovies).catch(console.error);
    }, []);

    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Now Showing</Text>
            <FlatList
                data={movies}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={{ padding: 10, marginVertical: 5, backgroundColor: '#ddd', borderRadius: 10 }}
                        onPress={() => navigation.navigate('BookingScreen', { movie: item })}
                    >
                        <Text style={{ fontSize: 18 }}>{item.title}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

export default HomeScreen;
