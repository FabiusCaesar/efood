import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { clearOverlay } from '../../store/reducers/overlay'
import { closeSidebar } from '../../store/reducers/ui'
import { OverlayContainer } from './styles'
import { closeModal } from '../../store/reducers/modal'
import { motion } from 'framer-motion'

const Overlay = () => {
  const dispatch = useDispatch()
  const context = useSelector((state: RootState) => state.overlay.context)

  const handleClick = () => {
    dispatch(clearOverlay())

    if (context === 'modal') {
      dispatch(closeModal())
    } else if (context == 'checkout') {
      dispatch(closeSidebar())
    }
  }

  return (
    <OverlayContainer
      title="Clique aqui para voltar para a página"
      as={motion.button}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.8 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={handleClick}
    />
  )
}

export default Overlay
