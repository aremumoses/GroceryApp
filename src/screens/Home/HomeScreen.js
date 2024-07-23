import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { icons } from '../../constants';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const categories = [
    { id: '1', name: 'Fruits', icon: icons.apple },
    { id: '2', name: 'Vegetables', icon: icons.broccoli },
    { id: '3', name: 'Diary', icon: icons.bread },
    { id: '4', name: 'Meat', icon: icons.meat },
  ];

  const bestSelling = [
    { id: '1', name: 'Bell Pepper Red', price: '4$', image: icons.pepper },
    { id: '2', name: 'Lamb Meat', price: '45$', image: icons.rawmeat },
  ];

  const banners = [
    { id: '1', image: icons.banner},
    { id: '2', image: icons.banner},
    { id: '3', image: icons.banner},
  
  ];

  const renderBannerItem = ({ item }) => (
    <Image source={item.image} style={styles.offerImage} resizeMode='contain'/>
  );

  const renderCategoryItem = ({ item }) => (
    <View style={styles.categoryItem}>
      <View style={styles.ct}>
      <Image source={item.icon} style={styles.categoryIcon} resizeMode='contain'/>
      </View>
      <Text style={styles.categoryName}>{item.name}</Text>
    </View>
  );

  const renderBestSellingItem = ({ item }) => (
    <TouchableOpacity style={styles.bestSellingItem} onPress={()=>navigation.navigate("Items")}>
      <Image source={item.image} style={styles.bestSellingImage} resizeMode='contain'/>
      <Text style={styles.bestSellingName}>{item.name}</Text>
      <View style={styles.row}>
        <Text style={styles.bestSellingPrice}>{item.price}</Text>
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
      </View>

    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={{backgroundColor:'#F3F5F7'}}>

    <View style={{    marginHorizontal: 20,}}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image source={icons.avatar} style={styles.profileImage} />
          <View>
            <Text style={styles.greeting}>Good morning</Text>
            <Text style={styles.userName}>Amelia Barlow</Text>
          </View>
        </View>
        <View style={styles.headerRight}>
          <Image source={icons.location} style={styles.himage} resizeMode='contain' />
          <Text style={styles.location}>My Flat</Text>
          <Image source={icons.down} style={styles.himage} resizeMode='contain'/>
        </View>
      </View>

      {/* <TextInput style={styles.searchInput} placeholder="Search category" /> */}


      <View style={styles.searchContainer}>
        <Image source={icons.group} style={styles.searchIcon} />
        <TextInput style={styles.searchInput} placeholder="Search category" />
      </View>

      <FlatList
        data={banners}
        renderItem={renderBannerItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        // style={styles.bannersList}
      />
</View>
      </View>
    
    <View style={{padding: 20,}}>
      <View style={styles.categoriesHeader}>
        <Text style={styles.categoriesTitle}>Categories</Text>
        <Text style={styles.seeAll}>See all</Text>
      </View>
  
      <FlatList
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoriesList}
      />
 </View>
 <View style={{padding: 20,}}>

      <View style={styles.bestSellingHeader}>
        <Text style={styles.bestSellingTitle}>Best selling 🔥</Text>
        <Text style={styles.seeAll}>See all</Text>
      </View>

      <FlatList
        data={bestSelling}
        renderItem={renderBestSellingItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.bestSellingList}
      />
      </View>
      </View>
 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    backgroundColor: '#ffffff',
  },
  header: {
    backgroundColor: '#F3F5F7',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ct:{
    backgroundColor: '#F3F5F7',
    padding: 10,
    borderRadius: 25,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  greeting: {
    fontSize: 14,
    color: '#666',
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
 
  headerRight: {
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'row',
    elevation:1,
    padding:10,
    borderRadius: 25,

  },
  himage: {
    height: 15, 
    width: 15, 
    marginHorizontal: 5
  },

  location: {
    fontSize: 14,
    color: '#23AA49',
  },
  searchInput: {
    height: 50,
    // borderColor: '#ccc',
    // borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
    fontWeight:'bold ',
    fontSize: 18,
    borderRadius: 25,
  },
  offerImage: {
height: 150,
width: 350,
  // padding: 10,
    borderRadius: 10,
    // marginBottom: 20,
  },
  categoriesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  categoriesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAll: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#23AA49',
  },
  categoriesList: {
    // marginBottom: 20,
  },
  categoryItem: {
    alignItems: 'center',
    marginHorizontal: 15,
   
  },
  categoryIcon: { 
 
    width: 30,
    height: 30,
    marginBottom: 5,
  },
  categoryName: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#666',
  },
  bestSellingHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  bestSellingTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  bestSellingList: {
    marginBottom: 20,
  },
  bestSellingItem: {
    width: 150,
    backgroundColor: '#F3F5F7',
    borderRadius: 10,
    padding: 10,
    marginRight: 20,
    alignItems: 'center',
  },
  bestSellingImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  bestSellingName: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  bestSellingPrice: {
    fontSize: 16,marginRight:10,
    color: '#FF324B',
fontWeight:'bold'  },
  addButton: {
    alignItems:'center',justifyContent:'center',
    backgroundColor: '#23AA49',
    width:25,height:25,
    borderRadius: 20,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  row:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  }, 
   searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  searchIcon: {
    width: 18,
    height: 18,
    marginRight: 10,
  },
  searchInput: {
    height: 50,
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    borderRadius: 25,
  },
});

export default HomeScreen;
