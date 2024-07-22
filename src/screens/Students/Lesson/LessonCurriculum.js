import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image, ScrollView } from 'react-native'
import React from 'react'
import AppHeader from '../../../components/Header/AppHeader'
import { COLORS,FONTS, SIZES, icons } from '../../../constants'
import Video from '../../../components/Video/Video';
import Videoo from '../../../components/Video/Video';
import { useNavigation } from '@react-navigation/native';

export default function LessonCurriculum() {
  const navigation = useNavigation();
    const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'Lesson Title',
          name:'Robertson Connie',
          time:'15 Mins',
          count:'1',
          icon:icons.play
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Lesson Title',
          name:'Robertson Connie',
          time:'15 Mins',
          count:'2',
          icon:icons.play
    
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Lesson Title',
          name:'Robertson Connie',
          time:'15 Mins',
          count:'3',
          icon:icons.play
        },
         {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad3abb28ba',
          title: 'Lesson Title',
          name:'Robertson Connie',
          time:'15 Mins',
          count:'4',
          icon:icons.play
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd1aa97f63',
          title: 'Lesson Title',
          name:'Robertson Connie',
          time:'15 Mins',
          count:'5',
          icon:icons.play
        },
        {
          id: '58694a0f-3da1-471f-bd96-15571e29d72',
          title: 'Lesson Title',
          name:'Robertson Connie',
          time:'15 Mins',
          count:'6',
          icon:icons.play
        },
      ];
    
      const Item = ({title,icon,name,time,count}) => (
       <TouchableOpacity 
       onPress={()=>navigation.navigate('StartLesson')}
       style={{ backgroundColor: COLORS.white,
        // borderRadius: SIZES.h3,
        // marginHorizontal: SIZES.h3,
        // marginVertical: SIZES.h5,
        padding: SIZES.h5,
        shadowColor: '#000',
        shadowOffset: {
          width: 1,
          height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor: COLORS.white,
        }}>
    <View style={{flexDirection:'row'}}>  
      <View style={{backgroundColor:COLORS.inputGray,borderRadius:SIZES.h1,marginRight:SIZES.base,borderWidth:0.7,borderColor:COLORS.Gray}}>
      <Text style={{padding:SIZES.h5,
                ...FONTS.body3,
                color:  COLORS.black 
              }}>{count}</Text>
              </View>
    <View style={{justifyContent:'center'}}>

  
    <Text style={{
                ...FONTS.body3,
                color:  COLORS.black 
              }}>{name}</Text>
    <Text style={{
              ...FONTS.body5,
              color:  COLORS.Gray 
              }}>{time}</Text>

    </View>
    
    </View>
        <View style={styles.pands}>
               <Image
              resizeMode='cover'
              source={icons.play}
              style={{
                height: SIZES.h3,
                width: SIZES.h3,
                marginRight:SIZES.h5
              }}
            />
        </View>
       </TouchableOpacity>
      );
  return (
    <View style={styles.container}>
     <AppHeader
     title={'ICAN Lesson Overview'}
     />
      <Image
          source={icons.backround}
          resizeMode='cover'
          style={{
            height: SIZES.height/4,
            width: SIZES.width
          }}
        />

        <View
         style={{borderRadius:SIZES.radius*4,backgroundColor:COLORS.white, shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
    marginHorizontal:SIZES.h1,
    bottom:20,
    marginBottom:SIZES.h1}}>
            <Text style={{
               ...FONTS.h4,
                color:  COLORS.black,
                marginTop:SIZES.h5,
                marginLeft:SIZES.h5,
                marginRight:SIZES.h5,
            }}>
           ICAN/ACCA
            </Text>

            <Text style={{
               ...FONTS.h4,
                color:  COLORS.darkpurple,
                marginTop:SIZES.h5,
                marginLeft:SIZES.h5,
                marginRight:SIZES.h5,
            }}>
           ICAN Professional Courses Practice
            </Text>

            <Text style={{
               ...FONTS.body5,
               lineHeight:SIZES.h4,
                color:  COLORS.textGray,
                marginTop:SIZES.h5,
                marginLeft:SIZES.h5,
                marginRight:SIZES.h5,
            }}>
           ICAN Professional Courses PracticeLorem ipsum dolor sit amet consectetur. Tincidunt a in elit molestie placerat sed mattis at </Text>
        
        <View style={{flexDirection:'row', alignItems:'center'}}>
            <TouchableOpacity style={{flexDirection:'row',alignItems:'center',  marginLeft:SIZES.h5,}}>
            <Image
          source={icons.handgraudation}
          resizeMode='cover'
          style={{
            height: SIZES.h3,
            width: SIZES.h3
          }}
        />
         <Text style={{
               ...FONTS.body5,
                color:  COLORS.black,
                marginLeft:SIZES.base/2,
            }}>
21 Lessons
            </Text>

            </TouchableOpacity>
           
            <TouchableOpacity style={{flexDirection:'row',alignItems:'center',}}>
            <Image
          source={icons.clock}
          resizeMode='cover'
          style={{
            height: SIZES.h3,
            width: SIZES.h3
          }}
        />
         <Text style={{
                ...FONTS.body5,
                color:  COLORS.black,
                marginLeft:SIZES.base/2,
            }}>
42 Hours
            </Text>

            </TouchableOpacity>

        </View>
{/* <Videoo/> */}
        <View  style={{flexDirection:'row', alignItems:'center',justifyContent:'space-between',margin:SIZES.h4,}}>
            <TouchableOpacity style={{backgroundColor:COLORS.textGray,padding:SIZES.h5,width:SIZES.width/2.8,justifyContent:'center',alignItems:'center',}}>
                <Text style={{
                    textAlign:'center',
               ...FONTS.h3,}}>
                About
               </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{backgroundColor:COLORS.inputGray,padding:SIZES.h5,width:SIZES.width/2.8,justifyContent:'center',alignItems:'center',}}>
                <Text style={{
               ...FONTS.h3,}}>
            Curricullum
               </Text>
            </TouchableOpacity>
        </View>


        <ScrollView >  
     <FlatList
        data={DATA}
        renderItem={({item}) => <Item count={item.count} name={item.name} onPress={item.onPress} title={item.title} icon={item.icon} time={item.time} />}
        keyExtractor={item => item.id}
       
      />
      </ScrollView>



     
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
     flex:1,
     backgroundColor:COLORS.white,
     },
  
})
   