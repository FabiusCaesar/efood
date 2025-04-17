import { styled } from 'styled-components'
import { media } from '../../styles/mixins'

export const Container = styled.section`
  padding: 80px 0 72px;

  ${media.desktop`
    padding: 64px 0 56px;
  `}

  ${media.mobile`
    padding: 24px 0 24px;
  `}
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;

  ${media.desktop`
    gap: 40px;
    row-gap: 40px;
  `}

  ${media.mobile`
    grid-template-columns: 1fr;
    gap: 0;
    row-gap: 32px;
  `}
`
