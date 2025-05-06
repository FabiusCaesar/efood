import { useDispatch, useSelector } from 'react-redux'

import Button from '../Button'

import { AppDispatch, RootState } from '../../store'
import { addToCart } from '../../store/reducers/cart'
import { Dish } from '../../models/Restaurant'
import { formatPrice } from '../../utils/priceUtils'

import * as S from './styles'
import { useEffect, useState } from 'react'
import { clearOverlay } from '../../store/reducers/overlay'
import { goToCart } from '../../store/reducers/ui'
import { AnimatePresence } from 'framer-motion'
import { closeModal } from '../../store/reducers/modal'

type Props = {
  dish: Dish
  onClose: () => void
}

const ModalAddToCart = ({ dish, onClose }: Props) => {
  const dispatch = useDispatch<AppDispatch>()
  const [visible, setVisible] = useState(true)

  const isRequestingClose = useSelector(
    (state: RootState) => state.modal.isRequestingClose
  )
  const context = useSelector((state: RootState) => state.overlay.context)

  const handleClose = () => {
    setVisible(false) // dispara animação de saída

    // Se o overlay ainda está no contexto do modal, inicia sua saída agora
    if (context === 'modal') {
      dispatch(clearOverlay())
    }
  }

  // Se o Redux sinalizou para fechar o modal (ex: clique no overlay)
  useEffect(() => {
    if (isRequestingClose) {
      handleClose()
    }
  }, [isRequestingClose])

  const handleExitComplete = () => {
    dispatch(closeModal())
  }

  return (
    <>
      <S.Container>
        <AnimatePresence onExitComplete={handleExitComplete}>
          {visible && (
            <S.MotionContent
              className="container"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <S.CloseButton
                onClick={handleClose}
                title="Clique aqui para fechar"
              />

              <img src={dish.foto} alt="" />
              <S.Info>
                <h3>{dish.nome}</h3>

                <p>{dish.descricao}</p>

                <p>
                  {dish.porcao.includes(' a ')
                    ? `Serve: de ${dish.porcao}`
                    : `Serve: ${dish.porcao}`}
                </p>

                <Button
                  title={`Adicionar ${dish.nome} ao carrinho por ${formatPrice(dish.preco)}`}
                  variant="dish"
                  onClick={() => {
                    dispatch(addToCart(dish))
                    dispatch(goToCart())
                    handleClose()
                  }}
                >
                  Adicionar ao carrinho - {formatPrice(dish.preco)}
                </Button>
              </S.Info>
            </S.MotionContent>
          )}
        </AnimatePresence>
      </S.Container>
    </>
  )
}

export default ModalAddToCart
