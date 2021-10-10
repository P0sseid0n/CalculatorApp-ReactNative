import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default props => {
   return (
      <View style={ style.display }>
         <Text numberOfLines={1} style={ style.memory }> { props.memory } </Text>
         <Text numberOfLines={1} style={ style.value }> { props.children } </Text>   
      </View>
   )
}

const style = StyleSheet.create({
   display:{
      flexGrow: 1,
      padding: 16,
      justifyContent: 'center',
      alignItems: 'flex-end',
      backgroundColor: 'rgb(90,90,90)'
   },
   value:{
      fontSize: 56,
      color: 'white'
   },
   memory: {
      fontSize: 16,
      color: 'rgb(200,200,200)',
      marginBottom: -8
   }
})