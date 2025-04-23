import closeIcon from '../../assets/images/close_icon.png'
import { PratoModel } from '../../models/RestauranteModel'
import Button from '../Button'
import {
  Infos,
  ModalContainer,
  ModalContent,
  ModalHeader,
  ModalInnerContent,
  PorcaoEButtomWrapper,
  TituloEDescricaoWrapper
} from './styles'

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
  return (
    <>
      <ModalContainer className="visible">
        <ModalContent className="container">
          <ModalHeader>
            <img src={closeIcon} alt="Botão fechar" onClick={onClose} />
          </ModalHeader>
          <ModalInnerContent>
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
                >
                  Adicionar ao carrinho - {formataPreco(prato.preco)}
                </Button>
              </PorcaoEButtomWrapper>
            </Infos>
          </ModalInnerContent>
        </ModalContent>
        <div className="overlay" onClick={onClose}></div>
      </ModalContainer>
    </>
  )
}

export default ModalAddCarrinho
