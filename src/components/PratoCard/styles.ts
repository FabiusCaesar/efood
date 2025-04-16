import styled from 'styled-components'
import colors from '../../styles/colors'

export const Card = styled.div`
  background-color: ${colors.primary};
  padding: 8px;
  max-width: 320px;
  height: 338px;
  display: flex;
  flex-direction: column;
`

export const Img = styled.img`
  display: block;
  width: 100%;
`

export const Titulo = styled.h3`
  font-size: 16px;
  font-weight: 900;
  color: ${colors.secondary};
  margin: 8px 0;
`

export const CardContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: ${colors.secondary};
`
