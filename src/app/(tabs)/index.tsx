import ParallaxScrollView from '@/components/ParallaxScrollView'
import React from 'react'
import { Text, View } from 'react-native'
import { P } from '@expo/html-elements'

const TabIndex = () => {
	return (
		<ParallaxScrollView headerHeight={30}>
			<View>
				<P
					className="first-line:uppercase first-line:tracking-widest
  first-letter:text-7xl first-letter:font-bold first-letter:text-white
  first-letter:mr-3 first-letter:float-left text-pretty text-pink-600
"
				>
					Well, let me tell you something, funny boy. Y'know that little stamp, the one that says
					"New York Public Library"? Well that may not mean anything to you, but that means a lot to
					me. One whole hell of a lot.
				</P>
			</View>
		</ParallaxScrollView>
	)
}

export default TabIndex
