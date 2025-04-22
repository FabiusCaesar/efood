export type PratoModel = {
  id: number
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
}

export type RestauranteModel = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: PratoModel[]
}
