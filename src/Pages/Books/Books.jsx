import React, { useContext } from 'react';
import '../Books/Books.css'
import SingleBook from '../Book/SingleBook';
import { DataContext } from '../Home/HomePage';

const Books = () => {

  const data= useContext(DataContext)


  return (
    <div className='md:mx-24 sm:mx-6 mx-3 '>
      <h2 className='playfair-display text-4xl text-center font-bold'>Available Books</h2>
     <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 my-14 gap-10'>
       {
        data.map(booksItem=><SingleBook key={booksItem.bookId} booksItem={booksItem}></SingleBook>)
      }
     </div>

      
    </div>
  );
};

export default Books;