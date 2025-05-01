import { useState } from 'react'
import { Dish } from '../../models/Restaurant'
import Button from '../Button'
import { Card, CardContent, Descricao, Img, Titulo } from './styles'
import ModalAddToCart from '../ModalAddToCart'
import { AnimatePresence } from 'framer-motion'

const PratoCard = ({ nome, descricao, foto, ...props }: Dish) => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  //const [isModalOpen, setIsModalOpen] = useState(false)

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

      <AnimatePresence>
        {isModalVisible && (
          <ModalAddToCart
            key="cart-modal"
            prato={{ nome, descricao, foto, ...props }}
            onClose={fecharModal}
          />
        )}
      </AnimatePresence>
    </>
  )
}

export default PratoCard
