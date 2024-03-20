const { db } = require('@vercel/postgres');
const {
  users,
  customers,
  reviews,
  reservations,
} = require('../app/lib/placeholder-data.js');
const bcrypt = require('bcrypt');

async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      );
    `;

    console.log(`Created "users" table`);

    // Insert data into the "users" table
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return client.sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}

async function seedCustomers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "customers" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS customers (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        image_url VARCHAR(255) NOT NULL
      );
    `;

    console.log(`Created "customers" table`);

    // Insert data into the "customers" table
    const insertedCustomers = await Promise.all(
      customers.map(
        (customer) => client.sql`
        INSERT INTO customers (id, name, email, image_url)
        VALUES (${customer.id}, ${customer.name}, ${customer.email}, ${customer.image_url})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedCustomers.length} customers`);

    return {
      createTable,
      customers: insertedCustomers,
    };
  } catch (error) {
    console.error('Error seeding customers:', error);
    throw error;
  }
}

async function seedReviews(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "reviews" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS reviews (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    customer_id UUID NOT NULL,
    star INT NOT NULL,
    review TEXT NOT NULL,
    date DATE NOT NULL
  );
`;

    console.log(`Created "reviews" table`);

    // Insert data into the "reviews" table
    const insertedReviews = await Promise.all(
      reviews.map(
        (review) => client.sql`
        INSERT INTO reviews (customer_id, star, review, date)
        VALUES (${review.customer_id}, ${review.star}, ${review.review}, ${review.date})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedReviews.length} reviews`);

    return {
      createTable,
      reviews: insertedReviews,
    };
  } catch (error) {
    console.error('Error seeding reviews:', error);
    throw error;
  }
}

async function seedReservations(client) {
  try {
    // Create the "reservations" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS reservations (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        firstname VARCHAR(255) NOT NULL,
        lastname VARCHAR(255) NOT NULL,
        guest INT NOT NULL,
        mobile VARCHAR(255) NOT NULL,
        email TEXT NOT NULL,
        location VARCHAR(255) NOT NULL,
        remarks TEXT NOT NULL,
        occasion VARCHAR(255) NOT NULL,
        time TIME NOT NULL,
        date DATE NOT NULL
      );
    `;

    console.log(`Created "reservations" table`);

    // Insert data into the "reservations" table
    const insertedReservations = await Promise.all(
      reservations.map(
        (res) => client.sql`
        INSERT INTO reservations (firstname, lastname, guest, mobile, email, location, remarks, occasion, time, date)
        VALUES (${res.firstname}, ${res.lastname}, ${res.guest}, ${res.mobile}, ${res.email}, ${res.location}, ${res.remarks}, ${res.occasion}, ${res.time}, ${res.date})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedReservations.length} reservations`);

    return {
      createTable,
      reservations: insertedReservations,
    };
  } catch (error) {
    console.error('Error seeding reservations:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedUsers(client);
  await seedCustomers(client);
  await seedReviews(client);
  await seedReservations(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
