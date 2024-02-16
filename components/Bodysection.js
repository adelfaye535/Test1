import { View, Text, Image, ScrollView, TextInput } from 'react-native'
import React from 'react'

export default function Bodysection() {
  return (
    <ScrollView>
        <Text>Some Text</Text>
        <View>
            <Text>More Text</Text>
            <Image source={{uri:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.smithsonianmag.com%2Fsmart-news%2Fcats-react-to-baby-talk-from-their-owners-but-not-strangers-180981007%2F&psig=AOvVaw0fqoK_MFQvJCeDGoLYUa_k&ust=1707808209325000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCMiHrMKfpYQDFQAAAAAdAAAAABAD'}} style={{width:200, height:200}}></Image>
        </View>
        <TextInput style={{height: 40,
          borderColor: 'gray',
          borderWidth: 1,}} defaultValue="You can type in me"/>
    </ScrollView>
  )
}