import { Text,View,SafeAreaView, ScrollView } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import {Stack} from "expo-router";

import {ScreenHeaderBtn,Nearbyjobs,Popularjobs,Welcome} from '../components'
import {images, icons, COLORS, FONT, SIZES} from '../constants'


const Home=()=>{
  const router=useRouter (); 
  return(
    <SafeAreaView style={{flex:1, backgroundColor: COLORS.gray2}}>
      <Stack.Screen 
      options={{
          headerStyle: {flex:1, backgroundColor:COLORS.primary},
          headerLeft: ()=>(
            <ScreenHeaderBtn  iconUrl={icons.menu}  dimension="60%" />
          ),
          headerRight: ()=>(
            <ScreenHeaderBtn  iconUrl={images.profile}  dimension="60%" />
          ),
          headerTitle: ""
      }}
      />
      <ScrollView>
        <Welcome />
        <Popularjobs />
        <Nearbyjobs />
      </ScrollView>
    </SafeAreaView>
  )
}
export default Home;