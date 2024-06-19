/* eslint-disable @typescript-eslint/no-explicit-any */
import { StyleSheet } from 'react-native'

import { FONTS } from './fonts'
import { SIZES } from './sizes'
import { COLORS } from './colors'

export function Styles<
  T extends StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>,
>(
  fn: ({
    font, // fonts
    size, // sizes
    color, // colors
  }: {
    font: typeof FONTS
    size: typeof SIZES
    color: typeof COLORS
  }) => T & StyleSheet.NamedStyles<any>,
) {
  return fn({ font: FONTS, size: SIZES, color: COLORS })
}
