import { View, Text } from 'react-native'
import React from 'react'
import AppHeader from '../../../components/Header/AppHeader'

export default function LeaderBoardScreen() {
  return (
    <View>
       <AppHeader
        title={'Leader Board'}
        />
      <Text>LeaderBoardScreen</Text>
    </View>
  )
}