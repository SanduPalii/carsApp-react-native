import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { twMerge } from 'tailwind-merge'
import { ButtonProps } from '@/types/type'

const getBgVariantStyle = (variant: ButtonProps['bgVariant']) => {
  switch (variant) {
    case 'secondary':
      return 'bg-gray-500'
    case 'danger':
      return 'bg-red-500'
    case 'success':
      return 'bg-green-500'
    case 'outline':
      return 'bg-transparent border-neutral-300 border-[0.5px]'
    default:
      return 'bg-[#0286FF]'
  }
}

const getTextVariantStyle = (variant: ButtonProps['textVariant']) => {
  switch (variant) {
    case 'primary':
      return 'text-black'
    case 'secondary':
      return 'text-gray-100'
    case 'danger':
      return 'text-red-100'
    case 'success':
      return 'text-green-100'
    default:
      return 'text-white'
  }
}

const CustomButton = ({
  onPress,
  title,
  bgVariant = 'primary',
  textVariant = 'default',
  IconLeft,
  IconRight,
  className,
  ...props
}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={twMerge(
        `w-full rounded-full p-5 flex-row justify-center items-center shadow-md shadow-neutral-400/70  ${getBgVariantStyle(
          bgVariant
        )} `,
        className
      )}
    >
      {IconLeft ? <IconLeft /> : null}
      <Text
        className={twMerge(
          'text-lg font-bold',
          getTextVariantStyle(textVariant)
        )}
      >
        {title}
      </Text>
      {IconRight ? <IconRight /> : null}
    </TouchableOpacity>
  )
}

export default CustomButton
