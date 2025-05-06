import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { AppDispatch, RootState } from '../../store'
import { useEffect } from 'react'
import {
  closeModal,
  openModal,
  setSelectedDish
} from '../../store/reducers/modal'
import { Dish } from '../../models/Restaurant'
import { fetchRestaurant } from '../../store/reducers/restaurant'
import { setOverlayContext } from '../../store/reducers/overlay'
import RestaurantPage from '../../pages/Restaurant'

const RestaurantController = () => {
  const { id } = useParams()
  const dispatch = useDispatch<AppDispatch>()

  const { isModalOpen, selectedDish } = useSelector(
    (state: RootState) => state.modal
  )
  const { restaurant, isLoading } = useSelector(
    (state: RootState) => state.restaurant
  )

  useEffect(() => {
    if (id) {
      dispatch(fetchRestaurant(id))
    }
  }, [id, dispatch])

  const handleDishClick = (dish: Dish) => {
    dispatch(setOverlayContext('modal'))
    dispatch(setSelectedDish(dish))
    dispatch(openModal())
  }

  const handleCloseModal = () => {
    dispatch(closeModal())
  }

  return (
    <RestaurantPage
      restaurant={restaurant}
      isLoading={isLoading}
      isModalOpen={isModalOpen}
      selectedDish={selectedDish}
      onDishClick={handleDishClick}
      onCloseModal={handleCloseModal}
    />
  )
}

export default RestaurantController
