// components/SettingsPage.tsx
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SettingsPageProps } from '../components/types';

const SettingsPage: React.FC<SettingsPageProps> = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>This is the Settings Page</Text>
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

export default SettingsPage;
