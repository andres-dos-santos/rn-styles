/* eslint-disable camelcase */
import {
  DMSans_500Medium,
  useFonts as useExpoFonts,
} from '@expo-google-fonts/dm-sans'
import { useCallback } from 'react'
import * as SplashScreen from 'expo-splash-screen'

SplashScreen.preventAutoHideAsync()

export function useFonts() {
  const [fontsLoaded, fontError] = useExpoFonts({
    'sans-500': DMSans_500Medium,
  })

  const onLayout = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded, fontError])

  return {
    fontsLoaded,
    onLayout,
  }
}
