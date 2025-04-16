import PratoModel from '../models/PratoModel'

const pratosPorRestaurante: { [restauranteId: number]: PratoModel[] } = {
  1: [
    new PratoModel({
      id: 1,
      nome: 'Sushi Tradicional',
      descricao:
        'Delicados pedaços de peixe fresco sobre arroz temperado. Uma explosão de sabor oriental.'
    }),
    new PratoModel({
      id: 2,
      nome: 'Tempurá',
      descricao:
        'Legumes e frutos do mar empanados e fritos com perfeição. Crocância irresistível.'
    }),
    new PratoModel({
      id: 3,
      nome: 'Yakissoba',
      descricao:
        'Macarrão oriental salteado com legumes frescos e carne ao molho shoyu.'
    }),
    new PratoModel({
      id: 4,
      nome: 'Uramaki Califórnia',
      descricao:
        'Arroz temperado, manga, kani e pepino, enrolado com alga por dentro e gergelim por fora.'
    }),
    new PratoModel({
      id: 5,
      nome: 'Gyoza',
      descricao:
        'Pastelzinho japonês recheado com carne e legumes, grelhado e cozido no vapor.'
    }),
    new PratoModel({
      id: 6,
      nome: 'Sashimi de Salmão',
      descricao:
        'Fatias frescas de salmão cru cortadas com precisão, servidas com wasabi e molho shoyu.'
    })
  ],

  2: [
    new PratoModel({
      id: 1,
      nome: 'Pizza Margherita',
      descricao:
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
    }),
    new PratoModel({
      id: 1,
      nome: 'Pizza Margherita',
      descricao:
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
    }),
    new PratoModel({
      id: 1,
      nome: 'Pizza Margherita',
      descricao:
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
    }),
    new PratoModel({
      id: 1,
      nome: 'Pizza Margherita',
      descricao:
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
    }),
    new PratoModel({
      id: 1,
      nome: 'Pizza Margherita',
      descricao:
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
    }),
    new PratoModel({
      id: 1,
      nome: 'Pizza Margherita',
      descricao:
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
    })
  ]
}

export default pratosPorRestaurante
