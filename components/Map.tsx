import { View, Text } from 'react-native'
import React from 'react'
import MapView, { PROVIDER_DEFAULT } from 'react-native-maps'
import { useDriverStore, useLocationStore } from '@/store'
import { calculateRegion } from '@/lib/map'

const Map = () => {
  const {
    userLongitude,
    userLatitude,
    destinationLatitude,
    destinationLongitude,
  } = useLocationStore()
  const { selectedDriver, setDrivers } = useDriverStore()

  const region = calculateRegion({
    userLatitude,
    userLongitude,
    destinationLatitude,
    destinationLongitude,
  })

  return (
    <MapView
      provider={PROVIDER_DEFAULT}
      tintColor="black"
      mapType="mutedStandard"
      showsPointsOfInterest={false}
      initialRegion={region}
      showsUserLocation={true}
      userInterfaceStyle="light"
    >
      <Text>Map</Text>
      <View className="w-[300px] h-[300px]"></View>
    </MapView>
  )
}

export default Map
