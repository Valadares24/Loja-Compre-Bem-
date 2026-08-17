export interface Produto{
    id: string;
    nome: string
    preco: number;
    descricao: string;
    categoria: string;
    imgUrl: string;
}

export type RootstackParamList = {
    Home: undefined;
    DetalheProduto: {produto: Produto};
}