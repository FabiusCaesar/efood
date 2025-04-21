import { styled } from 'styled-components'
import { media } from '../../styles/mixins'

export const Container = styled.section`
  padding: 56px 0 120px;

  ${media.tablet`
  padding: 56px 0 72px;
    `}

  ${media.mobile`
    padding: 32px 0 32px;
  `}
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  justify-items: center;

  ${media.desktop`
    grid-template-columns: 1fr 1fr;
  `}

  ${media.mobile`
    grid-template-columns: 1fr;
  `}
`
