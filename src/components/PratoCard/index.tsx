import { useState } from 'react'
import { PratoModel } from '../../models/RestauranteModel'
import Button from '../Button'
import { Card, CardContent, Descricao, Img, Titulo } from './styles'
import ModalAddCarrinho from '../ModalAddCarrinho'

const PratoCard = ({ nome, descricao, foto, ...props }: PratoModel) => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const abrirModal = () => {
    setIsModalVisible(true)
  }

  const fecharModal = () => {
    setIsModalVisible(false)
  }

  const getDescricao = (descricao: string) => {
    if (descricao.length > 140) {
      return descricao.slice(0, 137) + '...'
    }
    return descricao
  }

  return (
    <>
      <Card>
        <Img src={foto} alt={nome} />
        <Titulo>{nome}</Titulo>
        <CardContent>
          <Descricao>{getDescricao(descricao)}</Descricao>
          <Button
            title={`Adicionar ${nome} ao carrinho`}
            variant="prato"
            onClick={abrirModal}
          >
            Adicionar ao carrinho
          </Button>
        </CardContent>
      </Card>

      {isModalVisible && (
        <ModalAddCarrinho
          prato={{ nome, descricao, foto, ...props }}
          onClose={fecharModal}
        />
      )}
    </>
  )
}

export default PratoCard
