import React from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useState } from 'react'
import { useRouter } from 'expo-router'
import styles from './popularjobs.style'
import {COLORS,SIZES} from '../../../constants';
import PopularJobCard from '../../common/cards/popular/PopularJobCard';
import useFetch from '../../../hook/useFetch';

const Popularjobs = () => {

  const{data,isloading,error} =useFetch('search',{
    query:'react-developer',
    num_pages:1,
    
  })
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {(isloading) ?
        <ActivityIndicator size={'large'} color={COLORS.primary} />
        : error ?
        <Text>Something went wrong</Text>
        : <FlatList
        
        data={[1,2,34,4,5]}
        renderItem={({item})=>(
          <PopularJobCard item={item} />
  )}    
        
        keyExtractor={item=>item?.Job_id}

        contentContainerStyle={{columnGap: SIZES.medium}}
        horizontal
        />
        }

      </View>
    </View>
  )
}

export default Popularjobs