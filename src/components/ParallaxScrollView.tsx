import type { PropsWithChildren, ReactElement } from 'react'
import { StyleSheet, useColorScheme } from 'react-native'
import Animated, {
	interpolate,
	useAnimatedRef,
	useAnimatedStyle,
	useScrollViewOffset,
} from 'react-native-reanimated'

import { ThemedView } from '@/components/ThemedView'

const HEADER_HEIGHT = 250

type Props = PropsWithChildren<{
	headerImage?: ReactElement
	headerBackgroundColor?: { dark: string; light: string }
	headerHeight?: number
}>

export default function ParallaxScrollView({
	children,
	headerImage,
	headerBackgroundColor,
	headerHeight = HEADER_HEIGHT,
}: Props) {
	const colorScheme = useColorScheme() ?? 'light'
	const scrollRef = useAnimatedRef<Animated.ScrollView>()
	const scrollOffset = useScrollViewOffset(scrollRef)

	const headerAnimatedStyle = useAnimatedStyle(() => {
		return {
			transform: [
				{
					translateY: interpolate(
						scrollOffset.value,
						[-headerHeight, 0, headerHeight],
						[headerHeight / 2, 0, headerHeight * 0.75],
					),
				},
				{
					scale: interpolate(scrollOffset.value, [-headerHeight, 0, headerHeight], [2, 1, 1]),
				},
			],
		}
	})

	return (
		<ThemedView
			style={{
				flex: 1,
			}}
		>
			<Animated.ScrollView ref={scrollRef} scrollEventThrottle={16}>
				<Animated.View
					style={[
						{
							backgroundColor: headerBackgroundColor?.[colorScheme],
							height: headerHeight,
							overflow: 'hidden',
						},
						headerAnimatedStyle,
					]}
				>
					{headerImage && headerImage}
				</Animated.View>
				<ThemedView
					style={{
						flex: 1,
						padding: 32,
						gap: 16,
						overflow: 'hidden',
					}}
				>
					{children}
				</ThemedView>
			</Animated.ScrollView>
		</ThemedView>
	)
}
