import { View, Text, Image } from 'react-native'
import React from 'react'
import { GoogleInputProps } from '@/types/type'
import { twMerge } from 'tailwind-merge'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { icons } from '@/constants'

const googlePlacesApiKey = process.env.EXPO_PUBLIC_GOOGLE_API_KEY

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
      <GooglePlacesAutocomplete
        fetchDetails={true}
        placeholder="Where you want to go?"
        debounce={200}
        query={{ key: googlePlacesApiKey, language: 'en' }}
        styles={{
          textInputContainer: {
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 20,
            marginHorizontal: 20,
            position: 'relative',
            shadowColor: '#d4d4d4',
          },
          textInput: {
            backgroundColor: textInputBackgroundColor || 'white',
            fontSize: 16,
            fontWeight: '600',
            marginTop: 5,
            width: '100%',
            borderRadius: 200,
          },
          listView: {
            backgroundColor: textInputBackgroundColor || 'white',
            position: 'relative',
            top: 0,
            width: '100%',
            borderRadius: 10,
            shadowColor: '#d4d4d4',
            zIndex: 99,
          },
        }}
        onPress={(data, details = null) => {
          handlePress({
            latitude: details?.geometry.location.lat!,
            longitude: details?.geometry.location.lng!,
            address: data.description,
          })
        }}
        renderLeftButton={() => (
          <View>
            <Image
              source={icon ? icon : icons.search}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </View>
        )}
        textInputProps={{
          placeholderTextColor: 'gray',
          placeholder: initialLocation ?? 'Where do you want to go?',
        }}
      />
    </View>
  )
}

export default GoogleTextInput
