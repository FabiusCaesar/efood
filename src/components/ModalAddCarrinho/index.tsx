import { useDispatch } from 'react-redux'
import { PratoModel } from '../../models/RestauranteModel'
import Button from '../Button'
import {
  CloseButton,
  Infos,
  ModalContainer,
  ModalContent,
  Overlay,
  PorcaoEButtomWrapper,
  TituloEDescricaoWrapper
} from './styles'
import { AppDispatch } from '../../store'
import { addToCart } from '../../store/reducers/cart'

type Props = {
  prato: PratoModel
  onClose: () => void
}

const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const ModalAddCarrinho = ({ prato, onClose }: Props) => {
  const dispatch = useDispatch<AppDispatch>()

  return (
    <>
      <ModalContainer className="visible">
        <ModalContent className="container">
          <CloseButton onClick={onClose} title="Clique aqui para fechar" />

          <img src={prato.foto} alt="" />
          <Infos>
            <TituloEDescricaoWrapper>
              <h3>{prato.nome}</h3>
              <p>{prato.descricao}</p>
            </TituloEDescricaoWrapper>
            <PorcaoEButtomWrapper>
              <p>
                {prato.porcao.includes(' a ')
                  ? `Serve: de ${prato.porcao}`
                  : `Serve: ${prato.porcao}`}
              </p>
              <Button
                title={`Adicionar ${prato.nome} ao carrinho por ${formataPreco(prato.preco)}`}
                variant="prato"
                onClick={() => {
                  dispatch(addToCart(prato))
                  onClose()
                }}
              >
                Adicionar ao carrinho - {formataPreco(prato.preco)}
              </Button>
            </PorcaoEButtomWrapper>
          </Infos>
        </ModalContent>
        <Overlay
          className="overlay"
          onClick={onClose}
          title="Clique aqui para voltar"
        ></Overlay>
      </ModalContainer>
    </>
  )
}

export default ModalAddCarrinho
