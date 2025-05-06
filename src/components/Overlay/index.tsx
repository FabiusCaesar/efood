import { OverlayContainer } from './styles'
import { AnimatePresence, motion } from 'framer-motion'

type Props = {
  active: boolean
  context: 'modal' | 'checkout' | null
  onClick: () => void
}

const Overlay = ({ active, context, onClick }: Props) => {
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
          onClick={onClick}
        />
      )}
    </AnimatePresence>
  )
}

export default Overlay
