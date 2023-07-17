/* eslint-disable max-lines */
import right from '@icons/right.svg'

export const productsTh = ['ID', 'Produto', 'Percentual', '']
export const customersTh = ['ID', 'Cliente', 'Percentual', '']
export const products: Products[] = [
  {
    id: '001',
    product: 'Papel higiênico',
    percent: 72,
    image: <img src={right} alt="Seta para direita" />
  },
  {
    id: '002',
    product: 'Álcool em gel',
    percent: 68,
    image: <img src={right} alt="Seta para" />
  },
  {
    id: '003',
    product: 'Sabonete',
    percent: 64,
    image: <img src={right} alt="Seta para" />
  },
  {
    id: '004',
    product: 'Detergente',
    percent: 56,
    image: <img src={right} alt="Seta para" />
  },
  {
    id: '005',
    product: 'Água sanitária',
    percent: 52,
    image: <img src={right} alt="Seta para" />
  },
  {
    id: '006',
    product: 'Limpador Multiuso',
    percent: 45,
    image: <img src={right} alt="Seta para" />
  },
  {
    id: '007',
    product: 'Perfume',
    percent: 40,
    image: <img src={right} alt="Seta para" />
  },
  {
    id: '008',
    product: 'Cloro',
    percent: 32,
    image: <img src={right} alt="Seta para" />
  },
  {
    id: '009',
    product: 'Limpa piso',
    percent: 26,
    image: <img src={right} alt="Seta para" />
  },
  {
    id: '010',
    product: 'Alvejante',
    percent: 20,
    image: <img src={right} alt="Seta para" />
  }
]

export const tableProductsPage: TableProductsPage[] = [
  {
    id: '001',
    product: 'Papel higiênico',
    status: 'Em alta',
    percent: 42
  },
  {
    id: '002',
    product: 'Álcool em gel',
    status: 'Em baixa',
    percent: -12
  },
  {
    id: '003',
    product: 'Sabonete',
    status: 'Em baixa',
    percent: -20
  },
  {
    id: '004',
    product: 'Detergente',
    status: 'Em alta',
    percent: 72
  },
  {
    id: '005',
    product: 'Água sanitária',
    status: 'Em baixa',
    percent: -30
  },
  {
    id: '006',
    product: 'Limpador Multiuso',
    status: 'Em alta',
    percent: 72
  },
  {
    id: '007',
    product: 'Perfume',
    status: 'Em baixa',
    percent: -30
  }
]

export const customers: Customers[] = [
  {
    id: '001',
    customer: 'Hótel Ibis',
    percent: 72,
    image: <img src={right} alt="Seta para direita" />
  },
  {
    id: '002',
    customer: 'Restaurante Carretão',
    percent: 68,
    image: <img src={right} alt="Seta para direita" />
  },
  {
    id: '003',
    customer: 'Nobile Hotel',
    percent: 64,
    image: <img src={right} alt="Seta para direita" />
  },
  {
    id: '004',
    customer: 'Mc Donald’s',
    percent: 56,
    image: <img src={right} alt="Seta para direita" />
  },
  {
    id: '005',
    customer: 'Academia Smart Fit',
    percent: 52,
    image: <img src={right} alt="Seta para direita" />
  },
  {
    id: '006',
    customer: 'iZap Softworks',
    percent: 45,
    image: <img src={right} alt="Seta para direita" />
  },
  {
    id: '007',
    customer: 'Vida Plena Academia',
    percent: 40,
    image: <img src={right} alt="Seta para direita" />
  },
  {
    id: '008',
    customer: 'Hermes Pardini',
    percent: 32,
    image: <img src={right} alt="Seta para direita" />
  },
  {
    id: '009',
    customer: 'Hospital Santa Rita',
    percent: 26,
    image: <img src={right} alt="Seta para direita" />
  },
  {
    id: '010',
    customer: 'Restaurante Comida da Roça',
    percent: 20,
    image: <img src={right} alt="Seta para direita" />
  }
]
