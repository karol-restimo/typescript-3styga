const productsArray = [
  {
    id: 10,
    name: 'name 1',
    price: 100,
  },
  {
    id: 11,
    name: 'name 2',
    price: 120,
  },
  {
    id: 12,
    name: 'name 3',
    price: 150,
  },
  {
    id: 13,
    name: 'name 4',
    price: 180,
  },
  {
    id: 14,
    name: 'name 5',
    price: 200,
  },
  {
    id: 15,
    name: 'name 6',
    price: 220,
  },
];

const ordersArray = [
  {
    clientId: 1,
    name: 'Jan',
    createDate: 1643003206,
    products: [
      {
        id: 10,
        amount: 3,
      },
      {
        id: 11,
        amount: 6,
      },
      {
        id: 12,
        amount: 5,
      },
      {
        id: 13,
        amount: 4,
      },
    ],
  },
  {
    clientId: 2,
    name: 'Kuba',
    createDate: 1642830406,
    products: [
      {
        id: 14,
        amount: 1,
      },
      {
        id: 11,
        amount: 6,
      },
      {
        id: 15,
        amount: 9,
      },
      {
        id: 13,
        amount: 4,
      },
    ],
  },
  {
    clientId: 3,
    name: 'Anna',
    createDate: 1642657606,
    products: [
      {
        id: 14,
        amount: 19,
      },
    ],
  },
  {
    clientId: 2,
    name: 'Kuba',
    createDate: 1642657726,
    products: [
      {
        id: 12,
        amount: 8,
      },
      {
        id: 14,
        amount: 1,
      },
    ],
  },
];

/////// task 1

interface MostPopularProductInterface {
  id: number;
  count: number;
}

const getMostPopularProduct = (): MostPopularProductInterface => {};

/////// task 2

interface CustomerAndProductsInterface {
  customerName: string;
  productsList: string[];
}

const getAllProductsNamesAndCustomerName =
  (): CustomerAndProductsInterface[] => {};

/////// task 3

interface ProductWithTotalPrice {
  productName: string;
  count: number;
  total: number;
}

const getListOfAllProductsWithTotalPrice = (): ProductWithTotalPrice[] => {};

console.log('Most popular: ', getMostPopularProduct());
console.log('Customer and products: ', getAllProductsNamesAndCustomerName());
console.log(
  'All bought products with total price: ',
  getListOfAllProductsWithTotalPrice()
);
