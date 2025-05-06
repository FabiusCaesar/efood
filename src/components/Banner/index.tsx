import { Container, Content, Name, Category } from './styles'

type Props = {
  image: string
  category: string
  title: string
}

const Banner = ({ image, category, title }: Props) => (
  <Container $backgroundImage={image}>
    <Content className="container">
      <Category>{category}</Category>
      <Name>{title}</Name>
    </Content>
  </Container>
)

export default Banner
