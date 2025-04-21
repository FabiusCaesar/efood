import { css } from 'styled-components'
import breakpoints from './breakpoints'

// Mixins reutilizáveis por nome de breakpoint
export const media = {
  mobile: (first: TemplateStringsArray, ...interpolations: any[]) => css`
    @media (max-width: ${breakpoints.mobile}) {
      ${css(first, ...interpolations)}
    }
  `,
  tablet: (first: TemplateStringsArray, ...interpolations: any[]) => css`
    @media (max-width: ${breakpoints.tablet}) {
      ${css(first, ...interpolations)}
    }
  `,
  desktop: (first: TemplateStringsArray, ...interpolations: any[]) => css`
    @media (max-width: ${breakpoints.desktop}) {
      ${css(first, ...interpolations)}
    }
  `
}

// Mixins específicos para HeaderHome
export const headerContainerResponsive = css`
  @media (max-width: ${breakpoints.desktop}) {
    height: 250px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    height: 100px;
  }
`

export const logoHomeResponsive = css`
  @media (max-width: ${breakpoints.desktop}) {
    margin-top: 36px;
    margin-bottom: 50px;
    height: 36px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    margin-top: 16px;
    margin-bottom: 16px;
  }
`

export const sloganResponsive = css`
  @media (max-width: ${breakpoints.desktop}) {
    font-size: 24px;
    line-height: 100%;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 12px;
    line-height: 100%;
    margin: 12px;
  }
`

// Mixins específicos para HeaderRestaurante
export const headerRestauranteResponsive = css`
  @media (max-width: ${breakpoints.desktop}) {
    height: 100px;
    font-size: 16px;
    padding: 0 80px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    height: 72px;
    font-size: 12px;
    padding: 0 16px;
  }
`

export const logoRestauranteResponsive = css`
  @media (max-width: ${breakpoints.desktop}) {
    height: 36px;
  }
`

// Mixins específicos para o Footer
export const footerResponsive = css`
  @media (max-width: ${breakpoints.desktop}) {
    height: 180px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    height: 112px;
    padding: 0 8px;
  }
`

export const logoFooterResponsive = css`
  @media (max-width: ${breakpoints.desktop}) {
    height: 36px;
    width: auto;
    margin: 24px 0;
  }

  @media (max-width: ${breakpoints.mobile}) {
    height: 24px;
    width: auto;
    margin-top: 16px;
    margin-bottom: 12px;
  }
`

export const socialFooterResponsive = css`
  @media (max-width: ${breakpoints.desktop}) {
    margin-bottom: 16px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    margin-bottom: 8px;
  }
`

export const copyrightResponsive = css`
  @media (max-width: ${breakpoints.desktop}) {
    margin-bottom: 16px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 8px;
  }
`
