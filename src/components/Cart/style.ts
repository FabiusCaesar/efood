import styled from 'styled-components'

import trashIcon from '../../assets/images/trash_icon.png'
import colors from '../../styles/colors'
import { ButtonContainer } from '../Button/styles'
import { media } from '../../styles/mixins'

interface CartContainerProps {
  isVisible: boolean
}

export const CartContainer = styled.div<CartContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 1;

  pointer-events: ${({ isVisible }) => (isVisible ? 'all' : 'none')};
`

interface OverlayProps {
  isVisible: boolean
}

export const Overlay = styled.button<OverlayProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: ${({ isVisible }) => (isVisible ? 0.8 : 0)};
  pointer-events: ${({ isVisible }) => (isVisible ? 'all' : 'none')};
  border: none;
  transition: opacity 0.3s ease;
`

interface SidebarProps {
  isVisible: boolean
}

export const Sidebar = styled.aside<SidebarProps>`
  background-color: ${colors.primary};
  z-index: 1;
  padding: 32px 8px;
  max-width: 360px;
  width: 100%;

  transform: ${({ isVisible }) =>
    isVisible ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s ease;

  ${media.mobile`
    max-width: 75%
    `}

  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
  }

  p {
    font-size: 18px;
    font-weight: 900;
    line-height: 32px;
    margin-bottom: 32px;
    color: ${colors.secondary};
    text-align: center;
  }
`

export const ItemsWtrapper = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  margin-bottom: 40px;
`

export const CartItem = styled.li`
  display: flex;
  gap: 8px;
  background-color: ${colors.secondary};
  padding: 8px 8px 12px;
  color: ${colors.primary};
  position: relative;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }

  h3 {
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 16px;
  }

  span {
    font-size: 14px;
  }

  button {
    background-image: url(${trashIcon});
    background-color: transparent;
    width: 16px;
    height: 16px;
    border: none;
    position: absolute;
    bottom: 8px;
    right: 8px;
  }
`

export const TotalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  color: ${colors.secondary};
  margin-bottom: 16px;
`

export const Price = styled.p``
