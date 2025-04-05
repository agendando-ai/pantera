import { TouchableOpacityProps } from 'react-native';

export type ButtonVariant = 'primary' | 'secondary' | 'outline';

export interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: ButtonVariant;
  loading?: boolean;
}
