import React from 'react';
import { Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { ButtonProps } from './Button.types';
import { styles } from './Button.styles';

export const Button: React.FC<ButtonProps> = ({
  title,
  variant = 'primary',
  loading = false,
  style,
  ...rest
}) => {
  const containerStyle = [
    styles.container,
    variant === 'primary' && styles.primary,
    variant === 'secondary' && styles.secondary,
    variant === 'outline' && styles.outline,
    style,
  ];

  const textStyle = [
    styles.text,
    variant === 'primary' && styles.textPrimary,
    variant === 'secondary' && styles.textSecondary,
    variant === 'outline' && styles.textOutline,
  ];

  return (
    <TouchableOpacity style={containerStyle} disabled={loading} {...rest}>
      {loading ? <ActivityIndicator color="#fff" /> : <Text style={textStyle}>{title}</Text>}
    </TouchableOpacity>
  );
};
