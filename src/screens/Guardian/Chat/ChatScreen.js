import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native'
import React from 'react'
import AppHeader from '../../../components/Header/AppHeader'
import { COLORS,FONTS, SIZES, icons } from '../../../constants'

export default function ChatScreen() {

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Adeola James',
      name:'Lorem ipsum',
      status:'14:59',
      progress:'50% completed',
      icon:icons.learning
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Adeola James',
      name:'Lorem ipsum',
      status:'14:59',
      progress:'50% completed',
      icon:icons.learning

    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Adeola James',
      name:'Lorem ipsum',
      status:'14:59',
      progress:'50% completed',
      icon:icons.learning
    },
     {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad3abb28ba',
      title: 'Adeola James',
      name:'Lorem ipsum',
      status:'14:59',
      progress:'50% completed',
      icon:icons.learning
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd1aa97f63',
      title: 'Adeola James',
      name:'Lorem ipsum',
      status:'14:59',
      progress:'50% completed',
      icon:icons.learning
    },
    {
      id: '58694a0f-3da1-471f-bd96-15571e29d72',
      title: 'Adeola James',
      name:'Lorem ipsum',
      status:'14:59',
      progress:'50% completed',
      icon:icons.learning
    },
  ];
  const Item = ({title,icon,name,status,progress}) => (
   <TouchableOpacity 
   style={{ 
    marginHorizontal: SIZES.h3,
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
    borderRadius: SIZES.base,
    }}>
<View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
<Image
          resizeMode='cover'
          source={icons.profile}
          style={{
            height: SIZES.h1*2,
            width: SIZES.h1*2,
            marginRight:SIZES.h5,
            borderRadius:SIZES.h1*2
          }}
        />


<View style={{}}>
<Text style={{
            ...FONTS.h4,
            color:  COLORS.darkpurple 
          }}>{title}</Text>
<Text style={{
          ...FONTS.body5,
          color:  COLORS.Gray 
          }}>{name}</Text>

</View>

</View>
    <View style={styles.pands}>
      <View style={{
        backgroundColor:COLORS.primary,
        borderRadius:SIZES.h2,
        height:SIZES.h2,
        width:SIZES.h2,
        justifyContent:'center',
        alignItems:'center'
      }}>
      <Text style={{
          ...FONTS.body5,
          color:  COLORS.white ,
          alignItems:'center'
          }}>03</Text>
          </View>
      <Text style={{
          ...FONTS.body5,
          color:  COLORS.black 
          }}>{status}</Text>
    </View>
   </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
     <AppHeader
     title={'Account Profile'}
     />

     {/* Header */}
     <View style={{margin:SIZES.h2}}>
      <Text style={{
      ...FONTS.h4,
            color:  COLORS.darkpurple,
          }}>All Chats</Text>
     
     </View>
     
     <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} icon={item.icon} name={item.name} status={item.status} progress={item.progress}/>}
        keyExtractor={item => item.id}
      />
    </View>
  )
}
const styles = StyleSheet.create({
 container:{
  flex:1,
  backgroundColor:COLORS.white,
  },
  pands:{
// bottom:20

},
details:{marginTop:SIZES.h3}})
