import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

type Props = NativeStackScreenProps<RootStackParamList, 'DetalheProduto'>;

export default function DetalheProdutoScreen({route,navigation}: Props) {
    const {produto} = route.params;

    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.categoryBadge}>{produto.categoria}</Text>
                <Text style={styles.title}>{produto.nome}</Text>
                <Text style={styles.price}>R@ {produto.preco.toFixed(2)}</Text>
                <Text style={styles.descriptionLabel}>Descrição:</Text>
                <Text style={styles.description}>{produto.descricao}</Text>F
            </View>
            <View style={styles.footer}>
                <Button title="Voltar" onPress={() => navigation.goBack()} color="#0288d1" />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20, justifyContent: 'space-between' },
  content: { gap: 12 },
  categoryBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#e0e0e0',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    fontSize: 12,
    color: '#555',
  },
  title: { fontSize: 24, fontWeight: 'bold', color: '#222' },
  price: { fontSize: 22, fontWeight: 'bold', color: '#2e7d32' },
  descriptionLabel: { fontSize: 16, fontWeight: '600', marginTop: 8, color: '#444' },
  description: { fontSize: 15, color: '#666', lineHeight: 22 },
  footer: { marginTop: 20 },
});