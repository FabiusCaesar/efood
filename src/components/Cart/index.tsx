import {
  CartContainer,
  CartItem,
  ItemsWtrapper,
  Overlay,
  Sidebar,
  TotalWrapper
} from './style'

import Button from '../Button'

import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store'
import { closeCart, removeFromCart } from '../../store/reducers/cart'

import { formatPrice, getTotalPrice } from '../../utils/priceUtils'

const Cart = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { isOpen, items } = useSelector((state: RootState) => state.cart)

  return (
    <CartContainer isVisible={isOpen}>
      <Overlay
        isVisible={isOpen}
        onClick={() => dispatch(closeCart())}
        title="Clique aqui para fechar o carrinho"
      />
      <Sidebar isVisible={isOpen}>
        <ItemsWtrapper>
          {items.map((item, index) => (
            <CartItem key={`${item.id}-${index}`}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <span>{formatPrice(item.preco)}</span>
              </div>
              <button onClick={() => dispatch(removeFromCart(item.id))} />
            </CartItem>
          ))}
        </ItemsWtrapper>
        <TotalWrapper>
          <span>Valor total</span>
          <span>{formatPrice(getTotalPrice(items))}</span>
        </TotalWrapper>
        <Button variant="prato" disabled={items.length === 0}>
          Continuar com a entrega
        </Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
