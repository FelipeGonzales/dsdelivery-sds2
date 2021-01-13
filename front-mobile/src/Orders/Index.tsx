import React from 'react';
import { LogBox, StyleSheet, Text, ScrollView, Image } from 'react-native';
import Header from '../header';
import OrderCard from '../OrderCard';

export default function Orders() {
    return (
        <>
            <Header />
            <ScrollView style={styles.container}>
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingRight: '5%',
        paddingLeft: '5%'
    }
});