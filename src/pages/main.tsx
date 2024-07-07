// components/MainPage.tsx
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MainPageProps } from '../components/types';

const MainPage: React.FC<MainPageProps> = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to the Main Page</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});

export default MainPage;
