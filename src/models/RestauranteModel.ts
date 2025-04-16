class RestauranteModel {
  id: number
  titulo: string
  tipo: string
  avaliacao: number
  descricao: string
  slug: string
  destaque?: boolean

  constructor({
    id,
    titulo,
    tipo,
    avaliacao,
    descricao,
    slug,
    destaque
  }: {
    id: number
    titulo: string
    tipo: string
    avaliacao: number
    descricao: string
    slug: string
    destaque?: boolean
  }) {
    this.id = id
    this.titulo = titulo
    this.tipo = tipo
    this.avaliacao = avaliacao
    this.descricao = descricao
    this.slug = slug
    this.destaque = destaque
  }
}

export default RestauranteModel
