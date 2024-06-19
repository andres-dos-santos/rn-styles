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

  if (fontsLoaded) {
    return (
      <View>
        <ActivityIndicator size={16} color="#1c1c1c" />
      </View>
    )
  }

  return (
    <View style={s.container} onLayout={onLayout}>
      <Text style={{ fontFamily: FONTS['sans-500'] }}>
        This is a new way to stylying using React.
      </Text>
      <StatusBar style="auto" />
    </View>
  )
}

function Styles(
  fn: ({
    fonts,
    sizes,
    colors,
  }: {
    fonts: typeof FONTS
    sizes: typeof SIZES
    colors: typeof COLORS
  }) => StyleSheet.NamedStyles<any>,
) {
  return fn({ fonts: FONTS, sizes: SIZES, colors: COLORS })
}

const s = Styles(({ fonts, sizes, colors }) => ({
  container: {
    alignItems: 'center',
  },
  title: {
    fontFamily: fonts['sans-500'],
    fontSize: sizes.sm,
    color: colors.primary,
  },
}))
