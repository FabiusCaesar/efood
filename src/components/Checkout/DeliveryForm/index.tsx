import Button from '../../Button'
import AnimatedSidebarContainer from '../../Sidebar'
import * as S from '../CheckoutFormBaseStyles/styles'
import { AppDispatch } from '../../../store'
import { useDispatch } from 'react-redux'
import { goToCart } from '../../../store/reducers/ui'
import { FormikValues, useFormikContext } from 'formik'

const DeliveryForm = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { values, handleChange, handleBlur, errors, touched, handleSubmit } =
    useFormikContext<FormikValues>()

  return (
    <AnimatedSidebarContainer>
      <h3>Entrega</h3>
      <S.Form onSubmit={handleSubmit}>
        <S.InputGroup>
          <label htmlFor="fullName">Quem irá receber</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={values.fullName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.fullName && typeof errors.fullName === 'string' && (
            <S.ErrorMessage>{errors.fullName}</S.ErrorMessage>
          )}
        </S.InputGroup>

        <S.InputGroup>
          <label htmlFor="address">Endereço</label>
          <input
            type="text"
            id="address"
            name="address"
            value={values.address}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.address && typeof errors.address === 'string' && (
            <S.ErrorMessage>{errors.address}</S.ErrorMessage>
          )}
        </S.InputGroup>

        <S.InputGroup>
          <label htmlFor="city">Cidade</label>
          <input
            type="text"
            id="city"
            name="city"
            value={values.city}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.city && typeof errors.city === 'string' && (
            <S.ErrorMessage>{errors.city}</S.ErrorMessage>
          )}
        </S.InputGroup>

        <S.Row>
          <S.InputGroup>
            <label htmlFor="zip">CEP</label>
            <input
              type="text"
              id="zip"
              name="zip"
              value={values.zip}
              onChange={(e) => {
                const raw = e.target.value.replace(/\D/g, '').slice(0, 8)
                const masked = raw.replace(/(\d{5})(\d{1,3})/, '$1-$2')
                handleChange({
                  target: {
                    name: 'zip',
                    value: masked
                  }
                })
              }}
              onBlur={handleBlur}
            />
            {touched.zip && typeof errors.zip === 'string' && (
              <S.ErrorMessage
                dangerouslySetInnerHTML={{ __html: errors.zip }}
              />
            )}
          </S.InputGroup>

          <S.InputGroup>
            <label htmlFor="number">Número</label>
            <input
              type="text"
              id="number"
              name="number"
              value={values.number}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.number && typeof errors.number === 'string' && (
              <S.ErrorMessage>{errors.number}</S.ErrorMessage>
            )}
          </S.InputGroup>
        </S.Row>

        <S.InputGroup>
          <label htmlFor="adressDetails">Complemento (opcional)</label>
          <input
            type="text"
            id="adressDetails"
            name="adressDetails"
            value={values.adressDetails}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.adressDetails &&
            typeof errors.adressDetails === 'string' && (
              <S.ErrorMessage>{errors.adressDetails}</S.ErrorMessage>
            )}
        </S.InputGroup>

        <S.ButtonGroup>
          <Button
            type="submit"
            variant="dish"
            title="Clique aqui para seguir para o pagamento"
          >
            Continuar com o pagamento
          </Button>
          <Button
            type="button"
            variant="dish"
            title="Clique aqui para voltar ao carrinho"
            onClick={() => dispatch(goToCart())}
          >
            Voltar para o carrinho
          </Button>
        </S.ButtonGroup>
      </S.Form>
    </AnimatedSidebarContainer>
  )
}

export default DeliveryForm
