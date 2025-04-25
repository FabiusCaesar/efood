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

// Mixins específicos para Header

// Mixins específicos para HeaderContainer
export const headerContainerHomeResponsive = css`
  @media (max-width: ${breakpoints.desktop}) {
    height: 200px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    height: 120px;
  }
`

export const headerContainerRestauranteResponsive = css`
  @media (max-width: ${breakpoints.desktop}) {
    height: 100px;
    font-size: 16px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    height: 72px;
    font-size: 12px;
  }
`

// Mixins especíoficos para o LogoWrapper
export const LogoWrapperResponsive = css`
  @media (max-width: ${breakpoints.desktop}) {
    height: 100px;
    min-height: 100px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    height: 72px;
    min-height: 72px;
    font-size: 16px;
    padding: 0 16px;
  }

  @media (max-width: ${breakpoints.mobileSmall}) {
    font-size: 12px;
  }
`

// Mixins específicos para o Logo
export const logoResponsive = css`
  @media (max-width: ${breakpoints.desktop}) {
    height: 36px;
  }
`

// Mixins especíoficos para o SloganWrapper
export const SloganWrapperResponsive = css`
  @media (max-width: ${breakpoints.desktop}) {
    height: 100px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    height: 48px;
  }
`

// Mixins específicos para Slogan
export const sloganResponsive = css`
  @media (max-width: ${breakpoints.desktop}) {
    font-size: 24px;
    line-height: 100%;
    margin-bottom: 24px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 16px;
    line-height: 100%;
    margin-bottom: 12px;
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
