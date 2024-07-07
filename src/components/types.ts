
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Main: undefined;
  Settings: undefined;
};

export type MainPageProps = NativeStackScreenProps<RootStackParamList, 'Main'>;
export type SettingsPageProps = NativeStackScreenProps<RootStackParamList, 'Settings'>;
