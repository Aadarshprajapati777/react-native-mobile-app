import React from 'react'
import { View, Text,  } from 'react-native'
import { useState } from 'react'
import { useRouter } from 'expo-router'
import styles from './welcome.style'
import { icons,SIZES } from '../../../constants'
import { FlatList, TextInput } from 'react-native-gesture-handler'
import { TouchableOpacity } from 'react-native'
import { Image } from 'react-native'
const jobTypes=["part-time", "full-time", "contractor"]

const Welcome = () => {
  const router =useRouter();
const [activeJobType, setActiveJobType]=useState('full-time')

  return (
    <View>
      <View style={styles.container}>
      <Text style={styles.userName}> hello Aadarsh</Text>
      <Text style={styles.welcomeMessage}>Find your Perfect Job</Text>
      </View>
      <View style={styles.searchContainer}>
      <View style={styles.searchWrapper}>
        <TextInput style={styles.searchInput}
        placeholder='what are you looking for'
        value=''
        onChange={()=>{}}       
        />
      </View>

      <TouchableOpacity  style={styles.searchBtn} onPress={()=>{}}>
        <Image source={icons.search}
        resizeMode='contain'
        style={styles.searchBtnImage}
        />
      </TouchableOpacity>

</View>
      <View style={styles.tabsContainer}>
      <FlatList 
      data={jobTypes}
      renderItem={({item})=>(
      <TouchableOpacity
      style={styles.tab(activeJobType,item)}
      onPress={()=>{
        setActiveJobType(item)
        router.push(`/search/$(item)`)
      }}
      
      >
        <Text style={styles.tabText(activeJobType,item)}>{item} </Text>
      </TouchableOpacity>
  )}

  keyExtractor={item=>item}
  contentContainerStyle={{columnGap: SIZES.small}}
  horizontal
      />
      </View>
    </View>
  )
}

export default Welcome
