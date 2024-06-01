import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';

const DashboardScreen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://poetrydb.org/author,title/Shakespeare;Sonnet')
      .then(response => setData(response.data))
      .catch(error => console.error(error));
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subtitle}>{item.author}</Text>
      <Text style={styles.body}>{item.lines}</Text>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor:'#5B0F8F',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#F4D0FA',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#574E59'
  },
  body:{
    fontSize: 14,
    color: '#574E59'
  }
});

export default DashboardScreen;
