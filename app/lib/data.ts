import { sql } from '@vercel/postgres';
import {
    User,
    Testimonial
} from'@/app/lib/definitions';
import { unstable_noStore as noStore } from 'next/cache';

export const getUser = async(email: string) => {
    try {
      const user = await sql`SELECT * FROM users WHERE email=${email}`;
      return user.rows[0] as User;
    } catch (error) {
      console.error('Failed to fetch user:', error);
      throw new Error('Failed to fetch user.');
    }
}

export const fetchTopReviews = async() => {
  noStore();

  try {
    const reviews = await sql<Testimonial>`
      SELECT
        reviews.id,
        reviews.star,
        reviews.review,
        reviews.date,
        customers.name,
        customers.image_url
      FROM reviews
      JOIN customers ON reviews.customer_id = customers.id
      WHERE reviews.star > 4
      ORDER BY reviews.date DESC
      LIMIT 4
    `;

    return reviews.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch reviews.');
  }
}