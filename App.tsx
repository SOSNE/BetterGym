// App.tsx
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import MainPage from './src/pages/main';
import SettingsPage from './src/pages/settings';

const Tab = createBottomTabNavigator();

function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color, size }) => {
                        let iconName;

                        if (route.name === 'Main') {
                            iconName = 'home-outline';
                        } else if (route.name === 'Settings') {
                            iconName = 'settings-outline';
                        }

                        // You can return any component that you like here!
                        return <Icon name={iconName} size={size} color={color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'gray',
                }}
            >
                <Tab.Screen name="Main" component={MainPage} />
                <Tab.Screen name="Settings" component={SettingsPage} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default App;
