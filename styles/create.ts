import { StyleSheet } from 'react-native'

import { FONTS } from './fonts'
import { SIZES } from './sizes'
import { COLORS } from './colors'

export function Styles<T extends StyleSheet.NamedStyles<T>>(
  fn: ({
    font, // fonts
    size, // sizes
    color, // colors
  }: {
    font: typeof FONTS
    size: typeof SIZES
    color: typeof COLORS
  }) => T,
) {
  const styles = fn({ font: FONTS, size: SIZES, color: COLORS })

  return styles
}
