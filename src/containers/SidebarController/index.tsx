import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { AnimatePresence } from 'framer-motion'

import Cart from '../../components/Checkout/Cart'
import DeliveryFormController from '../DeliveryFormController'
import SuccessMessage from '../../components/Checkout/SuccessMessage'
import PaymentFormController from '../PaymentFormController'

const SidebarController = () => {
  const step = useSelector((state: RootState) => state.ui.step)

  return (
    <AnimatePresence mode="wait">
      {step === 'cart' && <Cart key="cart" />}
      {step === 'delivery' && <DeliveryFormController key="delivery" />}
      {step === 'payment' && <PaymentFormController key="payment" />}
      {step === 'success' && <SuccessMessage key="success" />}
    </AnimatePresence>
  )
}

export default SidebarController
