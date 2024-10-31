import {Image, StyleSheet, Platform, View, Text} from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import {useThemeColor} from "@/hooks/useThemeColor";

export default function HomeScreen() {
    const color = useThemeColor({}, 'background');

    return (
    <View style={[styles.mainContainer, {backgroundColor: color}]}>
        <Text>Hello home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
      flex: 1,
      justifyContent: 'flex-end',
  }
});
