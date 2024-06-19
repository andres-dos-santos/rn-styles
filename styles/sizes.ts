import { Dimensions } from 'react-native'

const { height, width } = Dimensions.get('window')

export const SIZES = {
  px: 1,
  '1': 4,
  '2': 8,
  '3': 12,
  '4': 16,
  '5': 20,
  '6': 24,
  '7': 28,
  '8': 32,
  '9': 36,
  '10': 40,

  '1/4': '25%',
  '1/2': '50%',
  '3/4': '75%',
  '4/4': '100%',

  width,
  height,
} as const
