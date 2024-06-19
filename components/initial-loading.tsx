import { ActivityIndicator, View } from 'react-native'

import { Styles } from '../styles'

export function InitialLoading() {
  return (
    <View style={s.container}>
      <ActivityIndicator size={16} color="#1c1c1c" />
    </View>
  )
}

const s = Styles(() => ({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
}))
