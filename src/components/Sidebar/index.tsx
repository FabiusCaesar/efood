import { ReactNode } from 'react'
import { SidebarContainer } from './styles'

type Props = {
  children: ReactNode
}

const AnimatedSidebarContainer = ({ children }: Props) => {
  return (
    <SidebarContainer
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </SidebarContainer>
  )
}

export default AnimatedSidebarContainer
