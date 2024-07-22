import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native'
import React from 'react'
import AppHeader from '../../../components/Header/AppHeader'
import { COLORS,FONTS, SIZES, icons } from '../../../constants'
import { useNavigation } from '@react-navigation/native';

export default function MyInstitutionScreen() {
  const navigation = useNavigation();
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Institution Name',
      name:'Lorem ipsum',
      status:'06/06/2024',
      progress:'50% completed',
      icon:icons.learning
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Institution Name',
      name:'Lorem ipsum',
      status:'06/06/2024',
      progress:'50% completed',
      icon:icons.learning

    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Institution Name',
      name:'Lorem ipsum',
      status:'06/06/2024',
      progress:'50% completed',
      icon:icons.learning
    },
     {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad3abb28ba',
      title: 'Institution Name',
      name:'Lorem ipsum',
      status:'06/06/2024',
      progress:'50% completed',
      icon:icons.learning
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd1aa97f63',
      title: 'Institution Name',
      name:'Lorem ipsum',
      status:'06/06/2024',
      progress:'50% completed',
      icon:icons.learning
    },
    {
      id: '58694a0f-3da1-471f-bd96-15571e29d72',
      title: 'Institution Name',
      name:'Lorem ipsum',
      status:'06/06/2024',
      progress:'50% completed',
      icon:icons.learning
    },
  ];
  const Item = ({title,icon,name,status,progress}) => (
   <TouchableOpacity style={{ backgroundColor: COLORS.white,
    borderRadius: SIZES.h3,
    marginHorizontal: SIZES.h3,
    marginVertical: SIZES.h5,
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
    borderRadius: SIZES.h2,
    }}>
<View style={{flexDirection:'row'}}>
<Image
          resizeMode='cover'
          source={icons.learning}
          style={{
            height: SIZES.h1*2.5,
            width: SIZES.h1*2.5,
            marginRight:SIZES.h5
          }}
        />


<View style={{justifyContent:'space-between'}}>
<Text style={{
            ...FONTS.h4,
            color:  COLORS.darkpurple 
          }}>{title}</Text>
<Text style={{
          ...FONTS.body5,
          color:  COLORS.Gray 
          }}>{name}</Text>
<TouchableOpacity style={styles.details}>
            <Text  style={{
            ...FONTS.body5,
            color:  COLORS.darkpurple 
          }}>Joined - 06/06/2024</Text>
        </TouchableOpacity>
</View>

</View>
    <View style={styles.pands}>
      <Text style={{
          ...FONTS.body5,
          color:  COLORS.black 
          }}>Created</Text>
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
     title={'Institutions'}
     />

     {/* Header */}
     <View style={{flexDirection:'row',justifyContent:'space-between',margin:SIZES.h2}}>
      <Text style={{
      ...FONTS.h4,
            color:  COLORS.darkpurple,
          }}>My Institutions</Text>
      <TouchableOpacity onPress={()=>navigation.navigate('JoinInstitutionScreen')}>
        <Text style={{
      ...FONTS.body4,
            color:  COLORS.Gray,
            textDecorationLine:'underline'
          }}>Join an institution</Text>
      </TouchableOpacity>
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
bottom:20

},
details:{marginTop:SIZES.h3}})
