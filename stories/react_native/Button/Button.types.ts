import { TouchableOpacityProps } from 'react-native';

export type ButtonVariant = 'primary' | 'secondary' | 'outline';
export type ButtonBorder = '8' | '16' | '24' | '32';

export interface ButtonProps extends TouchableOpacityProps {
  title: string;
  border?: ButtonBorder;
  variant?: ButtonVariant;
  loading?: boolean;
}
