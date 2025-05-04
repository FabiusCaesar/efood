import { useSelector } from 'react-redux'
import { RootState } from '../../../store'
import { AnimatePresence } from 'framer-motion'

import Overlay from '../../Overlay'
import Cart from '../Cart'
import DeliveryForm from '../DeliveryForm'
import PaymentForm from '../PaymentForm'
import SuccessMessage from '../SuccessMessage'

const Controller = () => {
  const step = useSelector((state: RootState) => state.ui.step)
  const isVisible = step !== 'hidden'

  return (
    <>
      {isVisible && <Overlay />}
      <AnimatePresence mode="wait">
        {step === 'cart' && <Cart key="cart" />}
        {step === 'delivery' && <DeliveryForm key="delivery" />}
        {step === 'payment' && <PaymentForm key="payment" />}
        {step === 'success' && <SuccessMessage key="success" />}
      </AnimatePresence>
    </>
  )
}

export default Controller
