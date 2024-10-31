import {StyleSheet, View, Text} from 'react-native';



export default function SettingsScreen() {
    return (
        <View style={styles.mainContainer}>
            <Text>Hello settings</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#ff0000',
        justifyContent: 'flex-end',
    }
});
