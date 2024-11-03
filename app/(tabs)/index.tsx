import {Image, StyleSheet, Platform, View, Text} from 'react-native';

import {useThemeColor} from "@/hooks/useThemeColor";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {ThemedText} from "@/components/ThemedText";


export default function HomeScreen() {
    const backgroundColor = useThemeColor({}, 'background');
    const secondaryBackgroundColor = useThemeColor({}, 'secondaryBackground');
    const altGreenColor = useThemeColor({}, 'altGreenColor');
    const textColor = useThemeColor({}, 'text');

    const insets = useSafeAreaInsets();

    return (
    <View style={[styles.mainContainer, {backgroundColor: backgroundColor, paddingTop: insets.top}]}>
        <View style={[styles.topSlidingMenu, {backgroundColor: secondaryBackgroundColor}]}>
            <Text style={[{color: textColor}]}>Friends sliding menu</Text>
        </View>
        <View style={[styles.gymSessionsMenu, {borderColor: secondaryBackgroundColor}]} >
            <ThemedText
                style={[{marginTop: 10}]}
                type="default"
            >
                Previous Gym sessions:
            </ThemedText>
            {/*<Text style={[{color: textColor}]}>Previous Gym sessions:</Text>*/}
            <View
                style={{
                    width: '80%',
                    height: 1.6,
                    backgroundColor: altGreenColor,
                    borderRadius: 100,
                    marginVertical: 20,
                }}
            />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
      flex: 1,
      alignItems: 'center',
  },
  topSlidingMenu: {
      height: 100,
      width: '84%',
      borderRadius: 10,
      alignItems: 'center',
  },
  gymSessionsMenu:{
      marginTop: 20,
      marginBottom: 20,
      flex: 1,
      width: '84%',
      borderRadius: 10,
      alignItems: 'center',
      borderStyle: 'solid',
      borderWidth: 2,
  }
});
