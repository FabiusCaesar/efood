import { useDispatch, useSelector } from 'react-redux'
import { HashLink } from 'react-router-hash-link'

import AnimatedSidebarContainer from '../../Sidebar'
import Button from '../../Button'

import { AppDispatch, RootState } from '../../../store'
import { removeFromCart } from '../../../store/reducers/cart'
import { closeSidebar, goToDelivery } from '../../../store/reducers/ui'

import { formatPrice, getTotalPrice } from '../../../utils/priceUtils'

import * as S from './styles'
import { useEffect } from 'react'
import {
  clearOverlay,
  setOverlayContext
} from '../../../store/reducers/overlay'

const Cart = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { items } = useSelector((state: RootState) => state.cart)

  const isEmpty = items.length === 0

  useEffect(() => {
    dispatch(setOverlayContext('checkout'))

    return () => {
      dispatch(clearOverlay())
    }
  }, [dispatch])

  return (
    <AnimatedSidebarContainer>
      {isEmpty ? (
        <>
          <h4>O carrinho está vazio.</h4>
          <h4>Que tal adicionar um prato e matar essa fome?</h4>
          <HashLink to="/#restaurants-list">
            <Button variant="dish" onClick={() => dispatch(closeSidebar())}>
              Ver restaurantes
            </Button>
          </HashLink>
        </>
      ) : (
        <>
          <S.ItemsWtrapper>
            {items.map((item, index) => (
              <S.CartItem key={`${item.id}-${index}`}>
                <img src={item.foto} alt={item.nome} />
                <div>
                  <h3>{item.nome}</h3>
                  <span>{formatPrice(item.preco)}</span>
                </div>
                <button onClick={() => dispatch(removeFromCart(item.id))} />
              </S.CartItem>
            ))}
          </S.ItemsWtrapper>
          <S.TotalWrapper>
            <span>Valor total</span>
            <span>{formatPrice(getTotalPrice(items))}</span>
          </S.TotalWrapper>
          <Button
            variant="dish"
            title="Clique para ir para o formulário de entrega"
            onClick={() => dispatch(goToDelivery())}
          >
            Continuar com a entrega
          </Button>
        </>
      )}
    </AnimatedSidebarContainer>
  )
}

export default Cart
