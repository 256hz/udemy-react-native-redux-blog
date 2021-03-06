import React, { useContext } from 'react'
import { View, Text, StyleSheet, FlatList, Button } from 'react-native'

import BlogContext from '../context/BlogContext'

const IndexScreen = () => {
  const { data, addBlogPost } = useContext(BlogContext)

  return <View>
    <Text style={styles.text}>Some text</Text>
    <Button 
      title='Add Post'
      onPress={addBlogPost}
    />
    <FlatList 
      data={ data }
      keyExtractor={ data => data.title }
      renderItem={ ({ item }) => {
        return <Text>{item.title}</Text>
      }}
    />
  </View>
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20
  }
})

export default IndexScreen