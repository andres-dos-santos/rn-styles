import { useState } from 'react'
import { StyleProp, StyleSheet } from 'react-native'

import { FONTS } from '../styles/fonts'

function useTheme() {
  const [theme, setTheme] = useState('dark')

  return { theme, setTheme }
}

export function useStyles() {
  const theme = useTheme()

  function s<S>(styles: StyleProp<S>) {
    return styles
  }

  return { s, t: theme, font: FONTS }
}
