import ParallaxScrollView from '@/components/ParallaxScrollView'
import React from 'react'
import { Text, View } from 'react-native'

const TabIndex = () => {
	return (
		<ParallaxScrollView headerHeight={30}>
			<View>
				<Text className="border p-4">Tab Home</Text>
			</View>
		</ParallaxScrollView>
	)
}

export default TabIndex
