
import { DataContext } from '../Home/HomePage';
import '../Book/SingleBook.css'
import { FaRegStar } from "react-icons/fa";
import { Link } from 'react-router';


const SingleBook = ({ booksItem }) => {

  const { bookName,bookId, author, image, rating, category, publisher, yearOfPublishing, tags } = booksItem



  return (

    <Link to={`/bookDetails/${bookId}`}>
      <div className='px-5 py-3 border border-slate-300 rounded-md shadow-sm'>
        <div className='h-48 flex justify-center'>
          <img src={image} className='w-32 h-48' alt="" />
        </div>

        <div className='mt-5 px-4'>
          <h2 className='playfair-display text-xl font-bold text-[#131313]'>{bookName}</h2>
          <h3 className='work-sans font-semibold  text-[#585858cc]'> Author : <span className='font-medium'>{author}</span> </h3>
        </div>

        <div className='px-4 mt-3 '>
          <p className='work-sans font-semibold text-[#585858cc]'>Category : <span className='text-[#23BE0A]'>{category}</span></p>
          <p className='work-sans font-semibold text-[#585858cc]'>Publisher : <span className='text-[#23BE0A]'>{publisher}</span></p>
        </div>
        <div className='flex justify-between px-4 mt-5'>
          <p className='work-sans font-medium text-[#585858cc] '> 1<sup>st</sup> Edition : {yearOfPublishing}</p>
          <p className='work-sans font-medium text-[#585858cc] flex flex-row items-center gap-2'>{rating} <FaRegStar className='text-amber-400' /></p>
        </div>
        <div className='flex px-4 border-t border-slate-300 py-2  gap-5 mt-5'>
          {
            tags.map((tagItems ,index) => <p className='border work-sans text-sm text-[#585858cc] px-2 rounded-sm border-slate-300' key={index}>{tagItems}</p>)
          }
        </div>
      </div>
    </Link>

  );
};

export default SingleBook;