class RestauranteClass {
  id: number
  titulo: string
  tipo: string
  avaliacao: number
  descricao: string
  img: string
  destaque?: boolean

  constructor(
    id: number,
    titulo: string,
    tipo: string,
    avaliacao: number,
    descricao: string,
    img: string,
    destaque?: boolean
  ) {
    this.id = id
    this.titulo = titulo
    this.tipo = tipo
    this.avaliacao = avaliacao
    this.descricao = descricao
    this.img = img
    this.destaque = destaque
  }
}

export default RestauranteClass
