import React from 'react'
import { Tabs } from 'expo-router'
import { Colors } from '@/constants/Colors'
import { useColorScheme } from '@/hooks/useColorScheme'
import Ionicons from '@expo/vector-icons/Ionicons'

const TabsLayout = () => {
	const colorScheme = useColorScheme()

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
				headerShown: false,
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: 'Home',
					tabBarIcon: ({ color, focused }) => (
						// <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
						<Ionicons name={focused ? 'home' : 'home-outline'} size={24} color={color} />
					),
				}}
			/>
		</Tabs>
	)
}

export default TabsLayout
