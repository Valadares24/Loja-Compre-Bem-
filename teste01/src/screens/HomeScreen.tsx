import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList, Produto } from '../types';
import { ProdutosMock } from '../data/ProdutosMock';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({navigation}: Props){
    const renderItem = ({item: Produto}) => (
    <TouchableOpacity
        style = {styles.card}
        onPress={() => navigation.navigate('DetalheProduto',{ produto: item)}
        >
        <View style={styles.cardContent}>
            <Text style={styles.title}>{item.nome}</Text>
            <Text style={styles.category}>{item.categoria}</Text>
            <Text style={styles.price}>R$ {item.preco.toFixed(2)}</Text>
        </View>
    </TouchableOpacity>
    );
      
    return(
        <View style={styles.container}>
            <FlatList
            data={ProdutosMock}
            keyExtractor={(item => item.id)}
            renderItem={renderItem}
            contentContainerStyle={styles.list}
            />

        </View>
    );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  list: { padding: 16 },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  cardContent: { gap: 4 },
  title: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  category: { fontSize: 14, color: '#777' },
  price: { fontSize: 16, fontWeight: '600', color: '#2e7d32', marginTop: 4 },
});