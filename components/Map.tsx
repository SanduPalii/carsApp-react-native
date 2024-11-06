import { View, Text } from 'react-native'
import React from 'react'
import MapView, { PROVIDER_DEFAULT } from 'react-native-maps'

const Map = () => {
  return (
    <MapView
      provider={PROVIDER_DEFAULT}
      tintColor="black"
      mapType="mutedStandard"
      showsPointsOfInterest={false}
    >
      <Text>Map</Text>
      <View className="w-[300px] h-[300px]"></View>
    </MapView>
  )
}

export default Map
