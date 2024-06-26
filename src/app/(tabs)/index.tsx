import ParallaxScrollView from '@/components/ParallaxScrollView'
import Ionicons from '@expo/vector-icons/Ionicons'
import React from 'react'
import { ThemedView } from '@/components/ThemedView'
import { Text, View } from 'react-native'

const TabIndex = () => {
	return (
		<ParallaxScrollView headerHeight={30}>
			<View>
				<Text>Tab Index</Text>
			</View>
		</ParallaxScrollView>
	)
}

export default TabIndex
