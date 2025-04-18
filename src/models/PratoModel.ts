class PratoModel {
  id: number
  nome: string
  descricao: string
  imagem?: string

  constructor({
    id,
    nome,
    descricao,
    imagem
  }: {
    id: number
    nome: string
    descricao: string
    imagem?: string
  }) {
    this.id = id
    this.nome = nome
    this.descricao = descricao
    this.imagem = imagem
  }
}

export default PratoModel
