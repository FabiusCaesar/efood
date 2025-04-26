export const formatPrice = (price = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

export const getTotalPrice = (items: { preco: number }[]) => {
  return items.reduce((total, item) => total + item.preco, 0)
}
