import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import ListShow from '../../core/component/ListShow';
import { useGetPostsQuery, useLazyGetPostsByPageQuery } from './api';

export default function Home() {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.card}>
        
        <Image
          source={{ uri: 'https://via.placeholder.com/80x80.png?text=Img' }}
          style={styles.thumbnail}
        />

        <View style={styles.cardContent}>
          <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
          <Text style={styles.body} numberOfLines={3}>{item.body}</Text>
          <View style={styles.footer}>
            <Text style={styles.tag}>#News</Text>
            <Text style={styles.timeText}>2h ago</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}> [ Infinite scroll + Pull-to-refresh + Manual pagination control + reusable ListShow Component ] with RTK query  </Text>
     
      <ListShow
        renderItem={renderItem}
        query1={useGetPostsQuery}
        query2={useLazyGetPostsByPageQuery}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F5F9',
  },
  headerText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1E293B',
    textAlign: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 12,
    lineHeight: 22,
  },
  
  
  screenTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1E293B',
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 10,
  },
  listContainer: {
    paddingBottom: 30,
    paddingHorizontal: 16,
    marginTop:20
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 14,
    marginBottom: 16,
    padding: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 4,
  },
  thumbnail: {
    width: 70,
    height: 70,
    borderRadius: 12,
    backgroundColor: '#E2E8F0',
    marginRight: 12,
  },
  cardContent: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 17,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 4,
  },
  body: {
    fontSize: 14,
    color: '#475569',
  },
  footer: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  tag: {
    backgroundColor: '#E0F2FE',
    color: '#0284C7',
    fontSize: 12,
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 12,
    marginRight: 8,
  },
  timeText: {
    fontSize: 12,
    color: '#64748B',
  },
});
