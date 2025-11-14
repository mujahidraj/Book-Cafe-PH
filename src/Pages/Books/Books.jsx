import React, { useContext } from 'react';
import '../Books/Books.css'
import SingleBook from '../Book/SingleBook';
import { DataContext } from '../Home/HomePage';

const Books = () => {

  const data= useContext(DataContext)


  return (
    <div className='md:mx-24 sm:mx-6 mx-3'>
      <h2 className='playfair-display text-4xl text-center font-bold'>Available Books</h2>
      {
        data.map(booksItem=><SingleBook key={booksItem.bookId} booksItem={booksItem}></SingleBook>)
      }

      
    </div>
  );
};

export default Books;