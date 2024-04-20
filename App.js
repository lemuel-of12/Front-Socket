import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { io } from 'socket.io-client';
import { NavigationContainer } from '@react-navigation/native'; // Agrega esta importación
import HomeScreen from './screen/HomeScreen.js';
import SensorScreen from './screen/SensorScreen';
import GraficaScreen from './screen/GraficaScreen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const socket = io('http://192.168.1.107:3000');

export default function App() {
  const [isConnected, setIsConnected] = useState(false);
  const [nuevoMensaje, setNuevoMensaje] = useState('');
  const [mensajes, setMensajes] = useState([]);

  useEffect(() => {
    socket.on('connect', () => setIsConnected(true));

    socket.on('chat_message', (data) => {
      setMensajes((mensajes) => [...mensajes, data]);
    });

    return () => {
      socket.off('connect');
      socket.off('chat_message');
    };
  }, []);

  const enviarMensaje = () => {
    socket.emit('chat_message', {
      usuario: socket.id,
      mensaje: nuevoMensaje,
    });
  };

  const Tab = createMaterialTopTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
        name="Grafica" 
        component={GraficaScreen}
        options={{ tabBarLabelStyle: { color: '#000000', paddingTop: 30,  } }}
         />
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ tabBarLabelStyle: { color: '#000000', paddingTop: 30 } }} // Aplica estilos a la etiqueta de la pestaña
        />
        <Tab.Screen
        name="Sensor" 
        component={SensorScreen}
        options={{ tabBarLabelStyle: { color: '#000000', paddingTop: 30 } }}
         />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
