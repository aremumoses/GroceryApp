import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { icons } from '../../constants';

const ItemsScreen = () => {
  const navigation = useNavigation();
  const items = [
    { id: '1', name: 'Bell Pepper Red', price: '6$', image:icons.pepper },
    { id: '2', name: 'Arabic Ginger', price: '4$', image: icons.search},
    { id: '3', name: 'Fresh Lettuce', price: '2$', image: icons.pngkey },
    { id: '4', name: 'Butternut Squash', price: '8$', image: icons.pawpaw},
    { id: '5', name: 'Organic Carrots', price: '4$', image:icons.carrot },
    { id: '6', name: 'Fresh Broccoli', price: '2$', image: icons.broccoli},
  ];

  const renderItem = ({ item }) => (
    <View style={styles.itemCard}>
      <Image source={item.image} style={styles.itemImage} resizeMode='contain'/>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>1kg, {item.price}</Text>
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Image source={icons.backarrow} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Vegetables</Text>
        <TouchableOpacity style={styles.searchButton}>
          <Image source={icons.group} style={styles.searchIcon} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  backButton: {
    padding: 10,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  searchButton: {
    padding: 10,
  },
  searchIcon: {
    width: 24,
    height: 24,
  },
  listContent: {
    paddingBottom: 20,
  },
  row: {
    justifyContent: 'space-between',
  },
  itemCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  itemImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  itemPrice: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
    textAlign: 'center',
  },
  addButton: {
    backgroundColor: '#1abc9c',
    padding: 10,
    borderRadius: 5,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ItemsScreen;
