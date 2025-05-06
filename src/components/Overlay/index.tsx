import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { clearOverlay } from '../../store/reducers/overlay'
import { closeSidebar } from '../../store/reducers/ui'
import { OverlayContainer } from './styles'
import { requestCloseModal } from '../../store/reducers/modal'
import { AnimatePresence, motion } from 'framer-motion'

const Overlay = () => {
  const dispatch = useDispatch()
  const { active, context } = useSelector((state: RootState) => state.overlay)

  const handleClick = () => {
    if (context === 'modal') {
      dispatch(requestCloseModal())
    } else if (context === 'checkout') {
      dispatch(closeSidebar())
      dispatch(clearOverlay())
    }
  }

  return (
    <AnimatePresence>
      {active && (
        <OverlayContainer
          title="Clique aqui para voltar para a página"
          as={motion.button}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={handleClick}
        />
      )}
    </AnimatePresence>
  )
}

export default Overlay
