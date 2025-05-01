import { useDispatch } from 'react-redux'

import Button from '../Button'

import { AppDispatch } from '../../store'
import { addToCart } from '../../store/reducers/cart'
import { Dish } from '../../models/Restaurant'
import { formatPrice } from '../../utils/priceUtils'

import * as S from './styles'

type Props = {
  prato: Dish
  onClose: () => void
}

const ModalAddToCart = ({ prato, onClose }: Props) => {
  const dispatch = useDispatch<AppDispatch>()

  return (
    <>
      <S.Container>
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
            <S.TitleAndDescriptionWrapper>
              <h3>{prato.nome}</h3>
              <p>{prato.descricao}</p>
            </S.TitleAndDescriptionWrapper>
            <S.PortionAndButtonWrapper>
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
                  onClose()
                }}
              >
                Adicionar ao carrinho - {formatPrice(prato.preco)}
              </Button>
            </S.PortionAndButtonWrapper>
          </S.Info>
        </S.MotionContent>
        <S.Overlay
          className="overlay"
          onClick={onClose}
          title="Clique aqui para voltar"
        ></S.Overlay>
      </S.Container>
    </>
  )
}

export default ModalAddToCart
