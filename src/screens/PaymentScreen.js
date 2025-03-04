import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const PaymentScreen = ({ route, navigation }) => {
    const { snapUrl } = route.params;

    return (
        <View style={styles.container}>
            <WebView source={{ uri: snapUrl }} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default PaymentScreen;
