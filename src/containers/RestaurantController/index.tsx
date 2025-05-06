import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { AppDispatch, RootState } from '../../store'
import { useEffect } from 'react'
import {
  closeModal,
  openModal,
  setSelectedDish
} from '../../store/reducers/modal'
import ModalAddToCart from '../../components/ModalAddToCart'
import { Dish } from '../../models/Restaurant'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import DishList from '../../components/DishList'
import Footer from '../../components/Footer'
import Loader from '../../components/Loader'
import { fetchRestaurant } from '../../store/reducers/restaurant'
import { AnimatePresence } from 'framer-motion'
import { setOverlayContext } from '../../store/reducers/overlay'

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
    <>
      <Header type="restaurant" />

      {isLoading || !restaurant ? (
        <Loader />
      ) : (
        <>
          <Banner
            category={restaurant.tipo}
            title={restaurant.titulo}
            image={restaurant.capa}
          />

          <div className="container">
            <DishList
              dishes={restaurant.cardapio}
              onDishClick={handleDishClick}
            />
          </div>

          <AnimatePresence>
            {isModalOpen && selectedDish && (
              <ModalAddToCart dish={selectedDish} onClose={handleCloseModal} />
            )}
          </AnimatePresence>

          <Footer />
        </>
      )}
    </>
  )
}

export default RestaurantController
