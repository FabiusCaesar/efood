import RestaurantesList from '../../components/RestaurantesList'
import Restaurante from '../../models/RestauranteClass'

import hioki_sushi from '../../assets/images/restaurantes/hioki_sushi_img.png'
import trattoria from '../../assets/images/restaurantes/trattoria_img.png'

const restaurantes: Restaurante[] = [
  {
    id: 1,
    titulo: 'Hioki Sushi',
    tipo: 'Japonesa',
    avaliacao: 4.9,
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    img: hioki_sushi,
    destaque: true
  },
  {
    id: 2,
    titulo: 'La Dolce Vita Trattoria',
    tipo: 'Italiana',
    avaliacao: 4.6,
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    img: trattoria,
    destaque: false
  },
  {
    id: 3,
    titulo: 'La Dolce Vita Trattoria',
    tipo: 'Italiana',
    avaliacao: 4.6,
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    img: trattoria,
    destaque: false
  },
  {
    id: 4,
    titulo: 'La Dolce Vita Trattoria',
    tipo: 'Italiana',
    avaliacao: 4.6,
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    img: trattoria,
    destaque: false
  },
  {
    id: 5,
    titulo: 'La Dolce Vita Trattoria',
    tipo: 'Italiana',
    avaliacao: 4.6,
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    img: trattoria,
    destaque: false
  },
  {
    id: 6,
    titulo: 'La Dolce Vita Trattoria',
    tipo: 'Italiana',
    avaliacao: 4.6,
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    img: trattoria,
    destaque: false
  }
]

const Home = () => (
  <>
    <RestaurantesList restaurantes={restaurantes} />
  </>
)

export default Home
