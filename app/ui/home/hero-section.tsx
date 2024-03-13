import React from 'react';
import Image from 'next/image';
import Hero_Section from '@/public/restaurant/hero-section.jpg';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative isolate px-10 py-16 lg:px-8 bg-custom-green my-5 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
            <h1 className='font-black text-custom-yellow py-3'>Little Lemon</h1>
            <h3 className='font-medium text-white pb-2'>Chicago</h3>
            <p className='break-normal text-white leading-10 pb-3'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <Link
                type="button"
                href="/reservation"
                className="bg-custom-yellow rounded-full px-5 py-3 mt-2"
            >Reserve a Table</Link>
        </div>
        <div className='relative hidden md:block'>
            <Image
                src={Hero_Section}
                alt='Hero Section Image'
                width={250}
                className="absolute right-1/4 rounded-md align-center"
            />
        </div>
    </section>
  )
}

export default HeroSection;
