import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import SensorItem from './SensorItem';
import { RefreshControl } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SensorList = () => {
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    setRefreshing(false);
  }, []);

  const data = [
    // Aquí deberías proporcionar tus datos ficticios de sensores
    { id: 1, description: '' },

  ];

  const renderItem = ({ item }) => {
    return <SensorItem item={item} navigation={navigation} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 40,
    marginTop: 1,
  },
});

export default SensorList;
