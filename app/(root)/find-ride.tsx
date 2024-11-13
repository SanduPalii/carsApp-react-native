import { View, Text } from 'react-native'
import React from 'react'
import { useLocationStore } from '@/store'

const FindRide = () => {
  const {
    userAddress,
    destinationAddress,
    setDestinationLocation,
    setUserLocation,
  } = useLocationStore()

  return (
    <View>
      <Text>You are here:{userAddress}</Text>
      <Text>You are going to:{destinationAddress}</Text>
    </View>
  )
}

export default FindRide
