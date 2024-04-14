import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import itemsData from './news_data.json';
import NewsCard from './components/itemsCard';

function App(): React.JSX.Element {
  const [text, onChangeText] = React.useState('Search...');
  const lastItemIndex = itemsData.length - 1;

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title} >Dark Store</Text>
      </View>
      <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
      <FlatList
        horizontal={false}
        numColumns={2}
        data={itemsData}
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
