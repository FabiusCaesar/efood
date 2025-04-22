import { styled } from 'styled-components'
import colors from '../../styles/colors'
import { media } from '../../styles/mixins'

type BannerProps = {
  backgroundImage: string
}

export const Container = styled.div<BannerProps>`
  height: 280px;
  width: 100%;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px 170px 32px;
  font-size: 18px;
  font-weight: 900;
  color: ${colors.primary};
  position: relative;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    content: '';
  }

  ${media.desktop`
    height: 200px;
    padding: 16px 80px 24px;
  `}

  ${media.mobile`
    height: 120px;
    padding: 12px 16px;
  `}
`

export const Tipo = styled.h3`
  font-size: 32px;
  font-weight: 100;
  color: ${colors.white};
  z-index: 1;

  ${media.desktop`
    font-size: 24px;
  `}

  ${media.mobile`
    font-size: 16px;
  `}
`

export const Nome = styled.h2`
  font-size: 32px;
  font-weight: 900;
  color: ${colors.white};
  z-index: 1;

  ${media.desktop`
    font-size: 24px;
  `}

  ${media.mobile`
    font-size: 18px;
  `}
`
