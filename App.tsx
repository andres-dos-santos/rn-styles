/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable camelcase */
import { useFonts, DMSans_500Medium } from '@expo-google-fonts/dm-sans'
import { StatusBar } from 'expo-status-bar'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import * as SplashScreen from 'expo-splash-screen'
import { useCallback } from 'react'

import { FONTS } from './styles/fonts'
import { SIZES } from './styles/sizes'
import { COLORS } from './styles/colors'

SplashScreen.preventAutoHideAsync()

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'sans-500': DMSans_500Medium,
  })

  const onLayout = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded, fontError])

  if (!fontsLoaded) {
    return (
      <View>
        <ActivityIndicator size={16} color="#1c1c1c" />
      </View>
    )
  }

  return (
    <View style={s.container} onLayout={onLayout}>
      <Text style={s.title}>This is a new way to stylying using React.</Text>
      <StatusBar style="auto" />
    </View>
  )
}

function Styles<T extends StyleSheet.NamedStyles<T>>(
  fn: ({
    f, // fonts
    s, // sizes
    c, // colors
  }: {
    f: typeof FONTS
    s: typeof SIZES
    c: typeof COLORS
  }) => T,
) {
  return fn({ f: FONTS, s: SIZES, c: COLORS })
}

const s = Styles(({ f, s, c }) => ({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    fontFamily: f['sans-500'],
    fontSize: s[4],
    color: c.primary,
  },
}))
