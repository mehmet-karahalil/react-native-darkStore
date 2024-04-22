import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import itemsData from './news_data.json';
import NewsCard from './components/itemsCard';
import SearchBar from './components/searchBar';

function App(): React.JSX.Element {
  const [items, setItems] = React.useState(itemsData);
  const lastItemIndex = itemsData.length - 1;
  const handleSearch = (text: string) => {
    const filteredItems = itemsData.filter((item) => {
      return item.title.toLowerCase().includes(text.toLowerCase());
    });
    setItems(filteredItems);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title} >Dark Store</Text>
      </View>
      <SearchBar onChange={handleSearch} />
      <FlatList
        horizontal={false}
        numColumns={2}
        data={items}
        renderItem={({item, index}) => {
          if (index === lastItemIndex) {
            return <NewsCard items={item} style={{flex: 1, width: '100%'}} />
          }
          return <NewsCard items={item} />
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 2,
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    margin: 10,
    color: 'black',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    backgroundColor: '#ECEFF1',
    borderRadius: 10,
    color: 'black',
    padding: 10,
    fontSize: 14,
    fontWeight: 'bold',
  },

});

export default App;
