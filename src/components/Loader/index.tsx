import { MoonLoader } from 'react-spinners'
import { LoaderContainer } from './styles'
import colors from '../../styles/colors'

const Loader = () => {
  return (
    <LoaderContainer>
      <MoonLoader color={`${colors.primary}`} />
    </LoaderContainer>
  )
}

export default Loader
