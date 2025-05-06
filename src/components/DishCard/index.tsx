import { Dish } from '../../models/Restaurant'
import Button from '../Button'
import { Card, CardContent, Description, Image, Title } from './styles'

type Props = Dish & {
  onClick: (dish: Dish) => void
}

const DishCard = ({ nome, descricao, foto, onClick, ...props }: Props) => {
  const getDescription = (text: string) => {
    if (text.length > 140) {
      return text.slice(0, 137) + '...'
    }
    return text
  }

  return (
    <Card>
      <Image src={foto} alt={nome} />
      <Title>{nome}</Title>
      <CardContent>
        <Description>{getDescription(descricao)}</Description>
        <Button
          title={`Adicionar ${nome} ao carrinho`}
          variant="dish"
          onClick={() => onClick({ nome, descricao, foto, ...props })}
        >
          Adicionar ao carrinho
        </Button>
      </CardContent>
    </Card>
  )
}

export default DishCard
