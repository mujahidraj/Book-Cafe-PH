import React from 'react';
import BookImage from '../../assets/books.png'
import '../Banner/Banner.css'


const Banner = () => {
  return (
    <div className='flex flex-row justify-between my-20 items-center work-sans  md:mx-24 sm:mx-6 mx-3 px-27 py-10'>
      <div className='flex flex-col gap-10'>
        <h2 className='text-5xl/16 playfair-display font-bold '>Books to freshen up your bookshelf</h2>
        <button className='px-5 py-3 max-w-40 rounded-lg bg-[#23BE0A] text-white'>View The List</button>
      </div>
      <img src={BookImage} className='h-96' alt="" />
    </div>
  );
};

export default Banner;