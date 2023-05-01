import bcrypt from 'bcryptjs';
 const data = {
    users: [
        {
          name: 'zakaria',
          email: 'admin@example.com',
          password: bcrypt.hashSync('123456'),
          isAdmin: true,
        },
        {
          name: 'manal',
          email: 'user@example.com',
          password: bcrypt.hashSync('123456'),
          isAdmin: true,
        },
      ],

    products : [
        {
           // _id:'1',
            name: 'test',
            slug: 'nike',
            category : 'Shirts',
            image: '/images/p1.jpg',
            price : 120,
            countInStock: 20,
            brand:'Nike',
            rating :4.5,
            numReviews: 10,
            description: 'shirt.'
        },
        {
           // _id:'2',
            name: 'Puma shirt   ',
            slug: 'Puma-slim shirt',
            category : 'Shirts',
            image: '/images/p2.jpg',
            price : 120,
            countInStock: 20,
            brand:'Puma',
            rating :4.5,
            numReviews: 10,
            description: 'shirt.'
        },
        {
           // _id:'3',
            name: 'adidas shirt   ',
            slug: 'adidas-slim shirt',
            category : 'Shirts',
            image: '/images/p3.jpg',
            price : 120,
            countInStock: 20,
            brand:'adidas',
            rating :4.5,
            numReviews: 10,
            description: 'shirt.'
        },
        {
          name: 'IPhone 14 Pro Max',
          slug: 'iphone-pro-max',
          category: 'Mobiles',
          image: '/images/p4.jpg',
          price: 500,
          countInStock: 25,
          brand: 'Apple',
          rating: 5,
          numReviews: 3,
          description:
            'Cinematic mode adds shallow depth of field and shifts focus automatically in your videos Advanced dual-camera system with 12MP Wide and Ultra Wide cameras; Photographic Styles, Smart HDR 4, Night mode, 4K Dolby Vision HDR recording 12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording A15 Bionic chip for lightning-fast performance',
        },
    ],
 };
 export default data;