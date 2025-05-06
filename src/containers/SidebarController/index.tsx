import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { AnimatePresence } from 'framer-motion'

import Cart from '../../components/Checkout/Cart'
import DeliveryForm from '../../components/Checkout/DeliveryForm'
import PaymentForm from '../../components/Checkout/PaymentForm'
import SuccessMessage from '../../components/Checkout/SuccessMessage'

const SidebarController = () => {
  const step = useSelector((state: RootState) => state.ui.step)

  return (
    <AnimatePresence mode="wait">
      {step === 'cart' && <Cart key="cart" />}
      {step === 'delivery' && <DeliveryForm key="delivery" />}
      {step === 'payment' && <PaymentForm key="payment" />}
      {step === 'success' && <SuccessMessage key="success" />}
    </AnimatePresence>
  )
}

export default SidebarController
