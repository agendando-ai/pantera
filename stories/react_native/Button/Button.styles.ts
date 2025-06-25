import { StyleSheet } from 'react-native';
import theme from '@agendando_ai/tokens';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 15,
    // fontFamily: 'SpaceGrotesk-Bold',
    fontSize: 16,
    color: theme.colors.primary == '#2A7AE4' ? 'white' : 'black',
  },
  primary: {
    backgroundColor: theme.colors.primary,
  },
  secondary: {
    backgroundColor: theme.colors.secondary,
  },
  outline: {
    borderWidth: 1,
    borderColor: '#1D4ED8',
    backgroundColor: 'transparent',
  },
  text: {
    fontSize: 16,
    fontFamily: 'Space Grotesk',
    fontWeight: '600',
  },
  textPrimary: {
    color: '#FFFFFF',
  },
  textSecondary: {
    color: '#FFFFFF',
  },
  textOutline: {
    color: '#1D4ED8',
  },
  borderOne: {
    borderRadius: 8,
  },
  borderTwo: {
    borderRadius: 16,
  },
  borderThree: {
    borderRadius: 24,
  },
  borderFour: {
    borderRadius: 32,
  },
});
