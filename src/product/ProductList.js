import React, {useState} from 'react';

import {FlatList, View, Text, StatusBar,StyleSheet, TouchableOpacity} from 'react-native';



const data =[

  {name:"iPhone 7", price:12000},

  {name:"iPhone 8", price:10000},

  {name:"iPhone X", price:20000},

]



export default function ProductList() {

  

  const [selected, setSelected] = useState(null);

  

  const renderItem = ({ item, index }) => {

    const backgroundColor = index === selected ? "#f9c2ff" : "#00ffff";

    return(  

    <TouchableOpacity onPress = {()=>setSelected(index)} style={[styles.item, {backgroundColor}]}>

      <Text style={styles.title}>{item.name}</Text>

      <Text>{item.price}</Text>

      <Text>/{index}</Text>

    </TouchableOpacity>

    )

  };





 return (

   <View style={styles.container}>

   <FlatList 

    data={data} 

    renderItem = {renderItem}

    keyExtractor={item => item.name}

    >

   </FlatList>

   </View>

 );

}



const styles = StyleSheet.create({

  container: {

    //backgroundColor: '#00bfff',

    flex: 1,

    flexDirection: 'row',

    marginTop: StatusBar.currentHeight || 0,

  },

  item: {

    flex: 1,

    flexDirection: 'row',

    backgroundColor: '#00ffff',

    padding: 8,

    marginVertical: 8,

    marginHorizontal: 16,

  },

  title: {

    fontSize: 24,

  },

});