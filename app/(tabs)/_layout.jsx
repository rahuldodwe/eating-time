import React from 'react'
import { Tabs } from 'expo-router'
import { Colors } from '../../assets/Colors'
import { Ionicons } from '@expo/vector-icons'

const TabLayout = () => {
  return (
    <>
      <Tabs screenOptions={{ headerShown: false,
        tabBarActiveTintColor: Colors.PRIMARY,
        tabBarInactiveTintColor: Colors.dark.text,
        tabBarStyle: {
            backgroundColor: Colors.SECONDARY,
            paddingBottom: 14,
            height: 75,
        },
        tabBarLabelStyle: { fontSize: 12, fontWeight: "bold"}
      }} >
        <Tabs.Screen 
            name="home" 
            options={{
                title:"Home", 
                tabBarIcon: ({ color }) => (
                    <Ionicons size={24} name='home' color={color} />
                )  }} />
        <Tabs.Screen name="history" options={{title:"History",
            tabBarIcon: ({ color }) => (
                <Ionicons size={24} name='time' color={color} />
            )
        }} />
        <Tabs.Screen name="profile" options={{title:"Profile", 
            tabBarIcon: ({ color }) => (
                <Ionicons size={24} name='person-sharp' color={color} />
            )
        }} />
      </Tabs>
    </>
  )
}

export default TabLayout