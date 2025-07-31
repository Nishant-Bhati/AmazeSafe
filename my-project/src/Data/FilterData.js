export const filters = [
  {
    id: 'color',
    name: 'Color',
    options: [
      { value: 'white', label: 'White'},
      { value: 'black', label: 'Black'},
      { value: 'red', label: 'Red'},
      { value: 'blue', label: 'Blue'},
      { value: 'green', label: 'Green'},
      { value: 'yellow', label: 'Yellow'},
      { value: 'orange', label: 'Orange'},
      { value: 'purple', label: 'Purple'},
      { value: 'pink', label: 'Pink'},
      { value: 'brown', label: 'Brown'},
      { value: 'gray', label: 'Gray'},
      { value: 'beige', label: 'Beige'},
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: 'S', label: 'S'},
      { value: 'M', label: 'M'},
      { value: 'L', label: 'L'},
    ],
  },
];

export const sortOptions = [
    { name: 'Price: Low to High', query: 'price_low', current: false },  
    { name: 'Price: High to Low', query: 'price_high', current: false },
];

export const color = [
    "white",
    "black",
    "red",
    "blue",
    "green",
    "yellow",
    "orange",
    "purple",
    "pink",
    "brown",
    "gray",
    "beige",
];
export const singleFilter = [
    {
        id: "price",
        name: "Price",
        options:[
            {value: "10000-13000", label: "₹10000 to ₹13000"},
            {value: "13000-16000", label: "₹13000 to ₹16000"},
            {value: "16000-19000", label: "₹16000 to ₹19000"},
            {value: "19000-22000", label: "₹19000 to ₹22000"},
            {value: "22000-25000", label: "₹22000 to ₹25000"},
            {value: "25000-28000", label: "₹25000 to ₹28000"},
            {value: "28000-31000", label: "₹28000 to ₹31000"},
            {value: "31000-34000", label: "₹31000 to ₹34000"},
            {value: "34000-37000", label: "₹34000 to ₹37000"},
        ]
    },
    {
      id: "discount",
      name: "Discount Range",
      options: [
        { value: '10', label: '10% And Above'},
        { value: '20', label: '20% And Above'},
        { value: '30', label: '30% And Above'},
        { value: '40', label: '40% And Above'},
        { value: '50', label: '50% And Above'},
      ],
    },
    {
      id: "stock",
      name: "Availability",
      options: [
        { value: 'in_stock', label: 'In Stock'},
        { value: 'out_of_stock', label: 'Out of Stock'},
      ],
    },
];