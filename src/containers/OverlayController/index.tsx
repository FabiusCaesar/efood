import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { clearOverlay } from '../../store/reducers/overlay'
import { closeSidebar } from '../../store/reducers/ui'
import { requestCloseModal } from '../../store/reducers/modal'
import Overlay from '../../components/Overlay'

const OverlayController = () => {
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

  return <Overlay active={active} context={context} onClick={handleClick} />
}

export default OverlayController
