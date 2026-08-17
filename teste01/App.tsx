import { useState } from 'react';
import { View, Text, Image, Button, StyleSheet, RootStackParamList } from 'react-native';



export type Produto = {
  id: number;
  nome: string;
  preco: number;
  imagem: string;
  categoria: string;

}
//
// 
// 
//  Array de mock atualizado com a nova prop "categoria"
type Props = NavigationProp<RootStackParamList, 'TelaListaProdutos'>;

const produtosMock = [
  { 
    id: '1', 
    nome: 'Cadeira Confort Plus', 
    preco: 'R$ 349,90', 
    categoria: 'Móveis', 
    imagem: require('./assets/produto-cadeira.png') 
  },
  { 
    id: '2', 
    nome: 'Mesa para Escritório Compacta', 
    preco: 'R$ 589,00', 
    categoria: 'Móveis', 
    imagem: require('./assets/produto-mesa.png') 
  },
  { 
    id: '3', 
    nome: 'Luminária de Mesa LED', 
    preco: 'R$ 79,90', 
    categoria: 'Iluminação', 
    imagem: require('./assets/produto-luminaria.png') 
  },
  { 
    id: '4', 
    nome: 'Suporte para Notebook', 
    preco: 'R$ 129,90', 
    categoria: 'Acessórios', 
    imagem: require('./assets/produto-suporte.png') 
  },
];

function ProdutoItem({ produto }) {
  // Estado existente para o botão de favorito
  const [favorito, setFavorito] = useState(false);
  
  // NOVO ESTADO: Contador de quantidade para o item
  const [quantidade, setQuantidade] = useState(1);

  return (
    <View style={styles.item}>
      <Image source={produto.imagem} style={styles.imagem} />
      
      <View style={styles.info}>
        <Text style={styles.nome}>{produto.nome}</Text>
        {/* EXIBIÇÃO DA NOVA PROP: Categoria */}
        <Text style={styles.categoria}>{produto.categoria}</Text>
        <Text style={styles.preco}>{produto.preco}</Text>
      </View>

      {/* USO DO NOVO ESTADO: Controladores de Quantidade */}
      <View style={styles.contadorContainer}>
        <Button 
          title="-" 
          onPress={() => setQuantidade((prev) => Math.max(1, prev - 1))} 
        />
        <Text style={styles.quantidade}>{quantidade}</Text>
        <Button 
          title="+" 
          onPress={() => setQuantidade((prev) => prev + 1)} 
        />
      </View>

      <Button
        title={favorito ? '♥' : '♡'}
        onPress={() => setFavorito(!favorito)}
      />
    </View>
  );
}

export default function TelaListaProdutos() {
  return (
    <View style={styles.container}>
      {produtosMock.map((produto) => (
        <ProdutoItem key={produto.id} produto={produto} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  imagem: {
    width: 64,
    height: 64,
    borderRadius: 8,
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1B3A5C',
  },
  categoria: {
    fontSize: 12,
    color: '#757575',
    marginTop: 2,
  },
  preco: {
    fontSize: 15,
    fontWeight: '600',
    color: '#2E7D32',
    marginTop: 4,
  },
  contadorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 8,
  },
  quantidade: {
    marginHorizontal: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
});