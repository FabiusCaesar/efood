import { AnimatePresence } from 'framer-motion'
import DishList from '../../components/DishList'
import Header from '../../components/Header'
import Loader from '../../components/Loader'
import { Dish, Restaurant } from '../../models/Restaurant'
import ModalAddToCart from '../../components/ModalAddToCart'
import Footer from '../../components/Footer'
import Banner from '../../components/Banner'

type Props = {
  restaurant: Restaurant | null
  isLoading: boolean
  isModalOpen: boolean
  selectedDish: Dish | null
  onDishClick: (dish: Dish) => void
  onCloseModal: () => void
}

const RestaurantPage = ({
  isLoading,
  isModalOpen,
  onCloseModal,
  onDishClick,
  restaurant,
  selectedDish
}: Props) => {
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
            <DishList dishes={restaurant.cardapio} onDishClick={onDishClick} />
          </div>

          <AnimatePresence>
            {isModalOpen && selectedDish && (
              <ModalAddToCart dish={selectedDish} onClose={onCloseModal} />
            )}
          </AnimatePresence>

          <Footer />
        </>
      )}
    </>
  )
}

export default RestaurantPage
