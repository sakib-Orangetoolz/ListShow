import React, { useState, useCallback } from 'react';
import { FlatList, ActivityIndicator, StyleSheet, Text, RefreshControl } from 'react-native';
import ScreenLoading from './ScreenLoading';

let page = 1;
const limit = 10;

export default function ListShow(props) {
  const { query1, query2, ...extra } = props;
  const [refreshing, setRefreshing] = useState(false);
  const { data, isLoading, isFetching, refetch } = query1(null);
  const [get, res] = query2();

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    page = 1;
    refetch()
      .then(() => {
        setRefreshing(false);
      })
      .catch(() => {
        setRefreshing(false);
      });
  }, [refetch]);

  const handleMore = async () => {
    if (
      isFetching ||
      isLoading ||
      res.isFetching ||
      res.isLoading ||
      !data ||
      (data && data.length < limit)
    )
      return;

    // if (res.data && !((res.data.length || 0) >= limit)) {
    //   return;
    // }

    page += 1;
    get({ page, limit });
  };

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      data={data || []}
      onEndReached={handleMore}
      keyExtractor={(item) => item.id.toString()}
      onEndReachedThreshold={0.5}
      contentContainerStyle={styles.container}
      ListEmptyComponent={
        isLoading || isFetching ? (
          <ScreenLoading style={styles.empty} />
        ) : (
          <Text style={styles.empty}>No data found</Text>
        )
      }
      ListFooterComponent={
        res.isLoading || res.isFetching ? (
          <ActivityIndicator size="small" color="#000" />
        ) : null
      }
      {...extra}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
    padding: 12,
  },
  empty: {
    paddingTop: 20,
    textAlign: 'center',
  },
});