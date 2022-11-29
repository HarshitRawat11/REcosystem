import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'John',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Jane',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],

  products: [
    {
      name: 'DIARY',
      slug: 'diary',
      category: 'Read',
      image: '/images/diary.jpeg',
      brand: 'REcosystem',
      rating: '5',
      numReviews: 8,
      countInStock: 20,
      description:
        "A recycled diary Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      price: 100,
    },
    {
      name: 'FILE',
      slug: 'file',
      category: 'Write',
      image: '/images/file.jpeg',
      brand: 'REcosystem',
      rating: '5',
      numReviews: 8,
      countInStock: 20,
      description:
        "A recycled file Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      price: 100,
    },
    {
      name: 'NOTEBOOK',
      slug: 'notebook',
      category: 'read',
      image: '/images/notebook.jpeg',
      brand: 'REcosystem',
      rating: '5',
      numReviews: 8,
      countInStock: 20,
      description:
        "A recycled notebookLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      price: 100,
    },
    {
      name: 'NOTEPAD',
      slug: 'notepad',
      category: 'Read',
      image: '/images/notepad.jpeg',
      brand: 'REcosystem',
      rating: '5',
      numReviews: 8,
      countInStock: 20,
      description:
        "A recycled notepad Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      price: 100,
    },
    {
      name: 'PEN',
      slug: 'pen',
      category: 'Write',
      image: '/images/pen.jpeg',
      brand: 'REcosystem',
      rating: '5',
      numReviews: 8,
      countInStock: 20,
      description:
        "A recycled pen Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      price: 100,
    },
    {
      name: 'PENCIL',
      slug: 'pencil',
      category: 'Write',
      image: '/images/pencil.jpeg',
      brand: 'REcosystem',
      rating: '5',
      numReviews: 8,
      countInStock: 20,
      description:
        "A recycled pencil Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      price: 100,
    },
    {
      name: 'SEED PEN',
      slug: 'seedPen',
      category: 'Write',
      image: '/images/seedPen.jpeg',
      brand: 'REcosystem',
      rating: '5',
      numReviews: 8,
      countInStock: 20,
      description:
        "A recycled seed pen Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      price: 100,
    },
  ],
};

export default data;
