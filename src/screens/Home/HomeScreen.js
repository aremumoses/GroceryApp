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
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image source={icons.avatar} style={styles.profileImage} />
          <View>
            <Text style={styles.greeting}>Good morning</Text>
            <Text style={styles.userName}>Amelia Barlow</Text>
          </View>
        </View>
        <View style={styles.headerRight}>
          <Text style={styles.location}>My Flat</Text>
        </View>
      </View>

      <TextInput style={styles.searchInput} placeholder="Search category" />

      <Image source={icons.banner} style={styles.offerImage} />

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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  header: {
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
  },
  headerRight: {
    alignItems: 'center',
  },
  location: {
    fontSize: 14,
    color: '#23AA49',
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  offerImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 20,
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
    fontSize: 14,
    color: '#23AA49',
  },
  categoriesList: {
    marginBottom: 20,
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
    backgroundColor: '#fff',
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
    fontSize: 14,
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
  }
});

export default HomeScreen;
