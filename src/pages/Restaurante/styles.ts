import { styled } from 'styled-components'
import colors from '../../styles/colors'

type BannerProps = {
  backgroundImage: string
}

export const Banner = styled.div<BannerProps>`
  height: 280px;
  width: 100%;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px 170px 32px;
  font-size: 18px;
  font-weight: 900;
  color: ${colors.primary};
`

export const Tipo = styled.h3`
  font-size: 32px;
  font-weight: 100;
  color: ${colors.white};
`

export const Nome = styled.h2`
  font-size: 32px;
  font-weight: 900;
  color: ${colors.white};
`

export const Container = styled.section`
  padding: 56px 0 120px;
`

export const PratosList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
`
