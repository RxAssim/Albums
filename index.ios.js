// Import a library to help create a component
import React from 'react'
import {AppRegistry, View} from 'react-native'
import Header from './src/component/Header'
import AlbumList from './src/component/AlbumList'

// Create a component
const App = () => {
  return (
    <View style={{
      flex: 1
    }}>
      <Header headerText="Albums"/>
      <AlbumList/>
    </View>
  )
}

// Render that component

AppRegistry.registerComponent('albums', () => App)
