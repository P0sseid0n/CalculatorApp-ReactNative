import React from 'react'
import { StyleSheet, Text, Dimensions, TouchableHighlight } from 'react-native'

export default props => {
   const styles = [ style.button ]

   if([ '+', '-', '/', '*', '=' ].includes(props.children)) styles.push(style.especialButton)
   if(props.children == 'AC' || props.children == '=') styles.push({ width: (Dimensions.get('window').width / 4) * 2 })

   return (
      <TouchableHighlight onPress={ () => props.onClick(props.children) }>
         <Text style={ styles }>
            { props.children }
         </Text>
      </TouchableHighlight>
   )
}

const style = StyleSheet.create({
   button:{
      width: Dimensions.get('window').width / 4,
      height: Dimensions.get('window').width / 4,
      backgroundColor: 'rgb(70,70,70)',
      borderWidth: 1,
      borderColor: 'rgb(80,80,80)',
      color: 'rgb(200,200,200)',
      fontSize: 40,
      textAlign: 'center',
      textAlignVertical: 'center',
   },
   especialButton:{
      color: 'white',
      backgroundColor: 'rgb(100,100,240)'
   }
})