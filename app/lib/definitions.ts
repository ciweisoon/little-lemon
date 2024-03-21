// describes the type of the data, and what data type each property should accept.

export type User = {
    id: string;
    name: string;
    email: string;
    password: string;
};

export type Testimonial = {
    id: string;
    customer_id: string;
    name: string;
    image_url: string;
    star: number;
    review: string;
    date: string;
};

export type Reservation = {
    firstname: string,
    lastname: string,
    guest: number,
    mobile: string,
    email: string,
    location: 'indoor' | 'outdoor',
    remarks: string,
    occasion: string,
    time: string,
    date: string,
};
