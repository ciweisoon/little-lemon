const users = [
    {
      id: '410544b2-4001-4271-9855-fec4b6a6442a',
      name: 'User',
      email: 'user@nextmail.com',
      password: '123456',
    },
];

const customers = [
    {
      id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
      name: 'Delba de Oliveira',
      email: 'delba@oliveira.com',
      image_url: '/customers/delba-de-oliveira.png',
    },
    {
      id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
      name: 'Lee Robinson',
      email: 'lee@robinson.com',
      image_url: '/customers/lee-robinson.png',
    },
    {
      id: '3958dc9e-737f-4377-85e9-fec4b6a6442a',
      name: 'Hector Simpson',
      email: 'hector@simpson.com',
      image_url: '/customers/hector-simpson.png',
    },
    {
      id: '50ca3e18-62cd-11ee-8c99-0242ac120002',
      name: 'Steven Tey',
      email: 'steven@tey.com',
      image_url: '/customers/steven-tey.png',
    },
    {
      id: '3958dc9e-787f-4377-85e9-fec4b6a6442a',
      name: 'Steph Dietz',
      email: 'steph@dietz.com',
      image_url: '/customers/steph-dietz.png',
    },
    {
      id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
      name: 'Michael Novotny',
      email: 'michael@novotny.com',
      image_url: '/customers/michael-novotny.png',
    },
    {
      id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
      name: 'Evil Rabbit',
      email: 'evil@rabbit.com',
      image_url: '/customers/evil-rabbit.png',
    },
    {
      id: '126eed9c-c90c-4ef6-a4a8-fcf7408d3c66',
      name: 'Emil Kowalski',
      email: 'emil@kowalski.com',
      image_url: '/customers/emil-kowalski.png',
    },
    {
      id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
      name: 'Amy Burns',
      email: 'amy@burns.com',
      image_url: '/customers/amy-burns.png',
    },
    {
      id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
      name: 'Balazs Orban',
      email: 'balazs@orban.com',
      image_url: '/customers/balazs-orban.png',
    },
];

const reviews = [
    {
      customer_id: customers[0].id,
      star: 5,
      review: 'Really enjoyed the atmosphere.',
      date: '2024-02-14'
    },
    {
      customer_id: customers[1].id,
      star: 5,
      review: 'The greek salad was excellent!',
      date: '2022-11-14',
    },
    {
      customer_id: customers[4].id,
      star: 4,
      review: 'You have to try the Greek Salad!',
      date: '2022-10-29',
    },
    {
      customer_id: customers[3].id,
      star: 5,
      review: 'Awesome place peaceful atmosphere with delicious food',
      date: '2024-01-14',
    },
    {
      customer_id: customers[5].id,
      star: 3,
      review: 'The chef is nice.',
      date: '2023-08-05',
    },
    {
      customer_id: customers[7].id,
      star: 4,
      review: 'Nice service.',
      date: '2023-07-16',
    },
    {
      customer_id: customers[6].id,
      star: 5,
      review: 'Prety decoration for the ocassion.',
      date: '2023-06-27',
    },
    {
      customer_id: customers[3].id,
      star: 3,
      review: 'The food is just normal, but the price is expensive.',
      date: '2023-06-09',
    },
    {
      customer_id: customers[4].id,
      star: 5,
      review: 'The pizza is so nice. Recommand!',
      date: '2023-06-17',
    },
    {
      customer_id: customers[5].id,
      star: 4,
      review: 'Nice environment.',
      date: '2023-06-07',
    },
    {
      customer_id: customers[1].id,
      star: 2,
      review: 'The seat near the toilet smells. Not recommanded.',
      date: '2023-08-19',
    }
];

const reservations = [
    {
        firstname: 'Delba',
        lastname: 'Oliveira',
        guest: 2,
        mobile: '+6011-123 1234',
        email: 'delba@oliveira.com',
        location: 'indoor',
        remarks: '-',
        occasion: 'anniversary',
        time: '12:00',
        date: '2023-04-01',
    },
    {
        firstname: 'Robinson',
        lastname: 'Lee',
        guest: 2,
        mobile: '+6011-123 1234',
        email: 'lee@robinson.com',
        location: 'indoor',
        remarks: 'vegetarian',
        occasion: 'none',
        time: '16:00',
        date: '2024-05-20',
    },
];

module.exports = {
    users,
    customers,
    reviews,
    reservations,
};
