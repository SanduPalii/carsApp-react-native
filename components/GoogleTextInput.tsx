import { View, Text } from 'react-native'
import React from 'react'
import { GoogleInputProps } from '@/types/type'
import { twMerge } from 'tailwind-merge'

const GoogleTextInput = ({
  icon,
  initialLocation,
  className,
  textInputBackgroundColor,
  handlePress,
}: GoogleInputProps) => {
  return (
    <View
      className={twMerge(
        'flex flex-row items-center justify-center relative z-50 rounded-xl mb-5',
        className
      )}
    >
      <Text>Search</Text>
    </View>
  )
}

export default GoogleTextInput
