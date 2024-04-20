import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importa el conjunto de iconos que desees utilizar
import Slider from '@react-native-community/slider';
import { useEffect, useState } from 'react';


const SensorItem = ({ item, navigation }) => {


  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.description}>Sensor DHT11{item.description}</Text>
        </View>
        <View style={styles.cardBody}>
          <View style={styles.dataContainer}>
            <Icon name="thermometer" size={25} color="#FFFFFF" />
            <Text style={styles.textItem}>Temperatura</Text>
          </View>
          <View style={styles.dataContainer}>
            <Icon name="tint" size={25} color="#FFFFFF" />
            <Text style={styles.textItem}>Humedad</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.SaveData}
            onPress={() => {
              navigation.navigate('SaveData', { item: item });
            }}
          >
            <Text style={styles.buttonText}>Guardar</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.description}>Sensor de Gas {item.description}</Text>
        </View>
        <View style={styles.cardBody}>
          <View style={styles.dataContainer}>
            <Icon name="fire" size={25} color="#FFFFFF" />
            <Text style={styles.textItem}>Concentracion de Gas</Text>
          </View>
          <View style={styles.dataContainer}>
            <Icon name="eye" size={25} color="#FFFFFF" />
            <Text style={styles.textItem}>Estado de Alarma</Text>
        </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.SaveData}
            onPress={() => {
              navigation.navigate('SaveData', { item: item });
            }}
          >
            <Text style={styles.buttonText}>Guardar</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.description}>Sensor PIR {item.description}</Text>
        </View>
        <View style={styles.cardBody}>
        <View style={styles.dataContainer}>
            <Icon name="signal" size={25} color="#FFFFFF" />
            <Text style={styles.textItem}>Datos Persisivos</Text>
        </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.SaveData}
            onPress={() => {
              navigation.navigate('SaveData', { item: item });
            }}
          >
            <Text style={styles.buttonText}>Guardar</Text>
          </TouchableOpacity>
        </View>
      </View>

      
      <View style={styles.sliderContainer}>
      <Text style={styles.buttonText}>Angulo Servomotor</Text>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={100}
        minimumTrackTintColor="#1bb0ce"
        maximumTrackTintColor="#000000"
        thumbTintColor="#1bb0ce"
                
        
      />
      </View>
   
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#1bb0ce',
    borderRadius: 10,
    padding: 10,
    marginBottom: 30,
  },
  cardHeader: {
    borderBottomWidth: 2,
    borderBottomColor: '#F2F2F2',
    paddingBottom: 5,
    marginBottom: 5,
  },
  description: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardBody: {
    marginBottom: 5,
  },
  dataContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textItem: {
    fontSize: 20,
    marginLeft: 5,
    padding: 5
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  SaveData: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
    width: '30%',
  },
  buttonText: {
    color: '#000000',
    fontWeight: 'bold',
  },
  slider: {
    width: '100%',
    height: 30,
    marginTop: 10,
    

  },
  sliderContainer: {
    alignItems: 'center',
    marginTop: 50,
    
  }
});

export default SensorItem;
