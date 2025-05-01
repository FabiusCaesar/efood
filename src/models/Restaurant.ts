// Tipagem dos pratos do cardápio
export type Dish = {
  id: number
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
}

// Tipagem dos restaurantes
export type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Dish[]
}
