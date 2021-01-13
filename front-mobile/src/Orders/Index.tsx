import { useIsFocused, useNavigation } from '@react-navigation/native';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { LogBox, StyleSheet, Text, ScrollView, Image } from 'react-native';
import Header from '../header';
import OrderCard from '../OrderCard';
import {fetchOrders} from '../api';
import { Alert } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Order } from '../types';

export default function Orders() {
    const [orders, setOrders] = useState<Order[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const navigation = useNavigation()
    const isFocused = useIsFocused()
  
    const fetchData = () => {
      setIsLoading(true)
      fetchOrders()
        .then(response => setOrders(response.data))
        .catch(() => Alert.alert('Houve um erro ao buscar os pedidos!'))
        .finally(() => setIsLoading(false))
    }
  
    useEffect(() => {
      if (isFocused) {
        setIsLoading(true)
        fetchOrders()
          .then(response => setOrders(response.data))
          .catch(() => Alert.alert('Houve um erro ao buscar os pedidos!'))
          .finally(() => setIsLoading(false))
      }
    }, [isFocused])
  
  
    const handleOnPress = (order: Order) => {
      navigation.navigate("OrderDetails", {
        order
      })
    }
  
    return (
      <>
        <Header />
        <ScrollView style={styles.container}>
          {isLoading ? (
            <Text>Buscando pedidos...</Text>
          ) : (
              orders.map(order => (
                <TouchableWithoutFeedback 
                  key={order.id} 
                  onPress={() => handleOnPress(order)}
                >
                  <OrderCard order={order} />
                </TouchableWithoutFeedback>
              ))
            )}
        </ScrollView>
      </>
    )
  
  }
  
  const styles = StyleSheet.create({
    container: {
      paddingRight: '5%',
      paddingLeft: '5%'
    }
  });