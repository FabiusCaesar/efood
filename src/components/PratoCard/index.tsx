import { useState } from 'react'
import { Dish } from '../../models/Restaurant'
import Button from '../Button'
import { Card, CardContent, Descricao, Img, Titulo } from './styles'
import ModalAddToCart from '../ModalAddToCart'
import { AnimatePresence } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { closeModal, openModal } from '../../store/reducers/modal'

const PratoCard = ({ nome, descricao, foto, ...props }: Dish) => {
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null)
  const dispatch = useDispatch()
  const isModalVisible = useSelector((state: RootState) => state.modal.isOpen)

  const abrirModal = () => {
    setSelectedDish({ nome, descricao, foto, ...props })
    dispatch(openModal())
  }

  const fecharModal = () => {
    setSelectedDish(null)
    dispatch(closeModal())
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

      {/* Modal com Overlay */}
      <AnimatePresence>
        {isModalVisible && selectedDish && (
          <ModalAddToCart
            key="cart-modal"
            prato={selectedDish}
            onClose={fecharModal}
          />
        )}
      </AnimatePresence>
    </>
  )
}

export default PratoCard
