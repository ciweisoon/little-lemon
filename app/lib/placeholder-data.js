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
      id: '52c08d73-2df6-43ac-9716-e70ad973953b',
      customer_id: customers[0].id,
      star: 5,
      review: 'Really enjoyed the atmosphere.',
      date: '2024-02-14'
    },
    {
      id: '170d230c-0054-4b50-9bbf-e685459bd038',
      customer_id: customers[1].id,
      star: 5,
      review: 'The greek salad was excellent!',
      date: '2022-11-14',
    },
    {
      id: '9c99c639-61d1-42f6-b78a-956d56ebb25a',
      customer_id: customers[4].id,
      star: 4,
      review: 'You have to try the Greek Salad!',
      date: '2022-10-29',
    },
    {
      id: 'd814751e-7f0b-4780-b90c-36c5851fbefa',
      customer_id: customers[3].id,
      star: 5,
      review: 'Awesome place peaceful atmosphere with delicious food',
      date: '2024-01-14',
    },
    {
      id: '6ed3bd44-f9a8-4911-830b-6a45f7807556',
      customer_id: customers[5].id,
      star: 3,
      review: 'The chef is nice.',
      date: '2023-08-05',
    },
    {
      id: '9bd3dbbb-49e3-45d2-b8b5-3f67229daa78',
      customer_id: customers[7].id,
      star: 4,
      review: 'Nice service.',
      date: '2023-07-16',
    },
    {
      id: 'e110be11-eae0-43f0-9d49-c3f6e279596f',
      customer_id: customers[6].id,
      star: 5,
      review: 'Prety decoration for the ocassion.',
      date: '2023-06-27',
    },
    {
      id: '4576a663-6edd-43e9-84a5-0b7114cf0ac5',
      customer_id: customers[3].id,
      star: 3,
      review: 'The food is just normal, but the price is expensive.',
      date: '2023-06-09',
    },
    {
      id: 'a995f7b9-7d6d-4762-b1e6-b3359bd394bd',
      customer_id: customers[4].id,
      star: 5,
      review: 'The pizza is so nice. Recommand!',
      date: '2023-06-17',
    },
    {
      id: 'e0286853-23e0-42d0-ab5e-54ac9127dec2',
      customer_id: customers[5].id,
      star: 4,
      review: 'Nice environment.',
      date: '2023-06-07',
    },
    {
      id: 'd194f29d-fd87-4a29-ba55-ee2514ec9eb8',
      customer_id: customers[1].id,
      star: 2,
      review: 'The seat near the toilet smells. Not recommanded.',
      date: '2023-08-19',
    }
];

const reservations = [
    {
        id: '139e44a0-33dc-43a5-bf23-fcad0edf47e8',
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
        id: '316940f2-904c-49bd-9438-d39022167965',
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
