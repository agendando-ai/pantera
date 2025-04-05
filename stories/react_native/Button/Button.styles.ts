import { StyleSheet } from 'react-native';
import theme from '@agendando_ai/tokens';

export const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
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
});
