import { Stack } from 'expo-router'
import React from 'react'

import ContextsWrapper from '@/contexts/ContextWrapper'

export default function Layout() {
  return (
    <ContextsWrapper>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignUp" />
      </Stack>
    </ContextsWrapper>
  )
}
