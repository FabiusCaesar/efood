import { useDispatch } from 'react-redux'

import Button from '../Button'

import { AppDispatch } from '../../store'
import { addToCart } from '../../store/reducers/cart'
import { Dish } from '../../models/Restaurant'
import { formatPrice } from '../../utils/priceUtils'

import * as S from './styles'
import Overlay from '../Overlay'
import { useEffect } from 'react'
import { setOverlayContext } from '../../store/reducers/overlay'
import { goToCart } from '../../store/reducers/ui'

type Props = {
  prato: Dish
  onClose: () => void
}

const ModalAddToCart = ({ prato, onClose }: Props) => {
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(setOverlayContext('modal'))
  }, [dispatch])

  return (
    <>
      <S.Container>
        <Overlay />
        <S.MotionContent
          className="container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
        >
          <S.CloseButton onClick={onClose} title="Clique aqui para fechar" />

          <img src={prato.foto} alt="" />
          <S.Info>
            <h3>{prato.nome}</h3>

            <p>{prato.descricao}</p>

            <p>
              {prato.porcao.includes(' a ')
                ? `Serve: de ${prato.porcao}`
                : `Serve: ${prato.porcao}`}
            </p>

            <Button
              title={`Adicionar ${prato.nome} ao carrinho por ${formatPrice(prato.preco)}`}
              variant="prato"
              onClick={() => {
                dispatch(addToCart(prato))
                dispatch(goToCart())
                onClose()
              }}
            >
              Adicionar ao carrinho - {formatPrice(prato.preco)}
            </Button>
          </S.Info>
        </S.MotionContent>
      </S.Container>
    </>
  )
}

export default ModalAddToCart
