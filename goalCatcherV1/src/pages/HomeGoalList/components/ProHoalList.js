import React, { useEffect, useRef, useState, useCallback } from 'react';
import { FlatList } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

const DEFAULT_PAGE_SIZE = 10;

const ProHoalList = ({ request, renderItem }) => {
  const currentPage = useRef(1);
  const isMounted = useRef(false);
  const [data, setData] = useState([]);

  useFocusEffect(
    useCallback(() => {
      request({
        current: currentPage.current,
        pageSize: DEFAULT_PAGE_SIZE,
      }).then(({ data }) => {
        setData(data);
      });
    }, []),
  );

  // useEffect(() => {
  //   isMounted.current = true;

  //   return () => {
  //     isMounted.current = false;
  //   };
  // }, []);

  const onEndReached = () => {};

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      onEndReachedThreshold={0.3}
      keyExtractor={(item, index) => `${item.id}${index}`}
      onEndReached={onEndReached}
    />
  );
};

export default ProHoalList;
