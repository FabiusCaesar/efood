import styled from 'styled-components'

import trashIcon from '../../../assets/images/trash_icon.png'
import colors from '../../../styles/colors'

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
