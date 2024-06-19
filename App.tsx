/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable camelcase */
import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

import { InitialLoading } from './components/initial-loading'

import { useFonts } from './hooks/use-fonts'

import { Styles } from './styles'

export default function App() {
  const { fontsLoaded, onLayout } = useFonts()

  if (!fontsLoaded) {
    return <InitialLoading />
  }

  return (
    <View style={s.container} onLayout={onLayout}>
      <Text style={s.title}>This is a new way to stylying using React.</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const s = Styles(({ font, size, color }) => ({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    fontFamily: font['sans-500'],
    fontSize: size[4],
    color: color.primary,
  },
}))
