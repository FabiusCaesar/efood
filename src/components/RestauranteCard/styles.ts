import styled from 'styled-components'
import colors from '../../styles/colors'
import { Link } from 'react-router-dom'
import { media } from '../../styles/mixins'
import { ButtonContainer } from '../Button/styles'

export const Card = styled(Link)`
  background-color: ${colors.white};
  color: ${colors.primary};
  position: relative;
  display: flex;
  flex-direction: column;
`

export const TagsWrapper = styled.div`
  display: flex;
  gap: 8px;
  position: absolute;
  top: 16px;
  right: 16px;
`

export const CardImg = styled.img`
  display: block;
  object-fit: cover;
  width: 100%;
  max-width: 472px;
  max-height: 217px;
`

export const CardContent = styled.div`
  border: 1px solid ${colors.primary};
  border-top: none;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`

export const TituloContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Titulo = styled.h3`
  font-weight: 700;
  font-size: 18px;
  display: block;
`

export const Avaliacao = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 700;
  gap: 8px;
`
export const DescricaoContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin: 16px 0;

  ${media.mobile`
    margin-bottom: 0;
  `}
`

export const BotaoResponsivo = styled(ButtonContainer)`
  width: fit-content;

  ${media.mobile`
    display: none;
  `}
`
