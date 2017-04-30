// Import a library to help create a component
import React from 'react'
import { AppRegistry } from 'react-native'
import Header from './src/component/Header'
import AlbumList from './src/component/AlbumList'

// Create a component
const App = () => {
  return (
    <div>
      <Header headerText="Albums" />
      <AlbumList />
    </div>
  )
}

// Render that component

AppRegistry.registerComponent('albums', () => App)
