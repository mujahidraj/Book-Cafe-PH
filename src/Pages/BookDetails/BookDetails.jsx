import React from 'react';
import '../BookDetails/BookDetails.css'
import { useLoaderData, useParams } from 'react-router';
import { FaReadme } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { addToLocalStorage } from '../../Utility/AddToLocalStorage';



const BookDetails = () => {
  const {id} = useParams();
  const bookId = parseInt(id)
  const data = useLoaderData();
  const findData = data.find(book => book.bookId === bookId)

  const { bookName, author,review, image, rating, category, publisher, yearOfPublishing, tags,totalPages } = findData


  const handleAddToLocalStorage =(id)=>{
    addToLocalStorage(id);
  }
  
  return (
    <div className='work-sans flex flex-row gap-10 my-10  md:mx-24 sm:mx-6 mx-3 px-5'>
      <img src={image} className='w-5/12 ' alt="" />
      <div>
        <h3 className='text-4xl playfair-display font-bold mb-3'>{bookName}</h3>
        <h3 className='text-[#404040cc] mb-3 font-semibold'>Author : <span className='font-medium text-[#23BE0A]'>{author}</span></h3>
        <div className='border-t border-slate-300'></div>
        <h3 className='my-3 text-[#404040cc] font-semibold'>Category : <span className='font-medium text-[#23BE0A]'>{category}</span></h3>
        <div className='border-t border-slate-300'></div>
        <h3 className=' text-[#404040cc] font-semibold'>Review : <span className='font-medium'>{review}</span></h3>
        <div className='border-t border-slate-300'></div>
        <div className='flex my-3 flex-row gap-5'>
          {
            tags.map((tagsItem , index)=><p key={index} className='border border-slate-300 px-3 text-[#23BE0A]'>{tagsItem}</p>)
          }
        </div>
          <div className='border-t border-slate-300'></div>
          <div className=' flex gap-10'>
            <div>
              <p className='my-3 text-[#404040cc] font-medium'>Number of Pages </p>
              <p className='my-3 text-[#404040cc] font-medium'>Year of Publishing </p>
              <p className='my-3 text-[#404040cc] font-medium'>Publisher </p>
              <p className='my-3 text-[#404040cc] font-medium'>Rating </p>
            </div>
            <div>
              <p className='my-3 text-[#23BE0A] font-bold'>{totalPages}</p>
              <p className='my-3 text-[#23BE0A] font-bold'>{yearOfPublishing}</p>
              <p className='my-3 text-[#23BE0A] font-bold'>{publisher}</p>
              <p className='my-3 text-[#23BE0A] font-bold'>{rating}</p>
            </div>
          </div>

          <div className='flex my-4 gap-5'>
            <button onClick={()=>handleAddToLocalStorage(id)} className='btn'>Read <FaReadme />
</button>
            <button className='btn bg-[#50B1C9]'>Wishlist <FaHeart />
</button>
          </div>

        {/* <table>
          <tbody>

            <tr>
              <td>Number of Pages : </td>
              <td>{totalPages}</td>
            </tr>
            <tr>
              <td>Year of Publishing : </td>
              <td>{yearOfPublishing}</td>
            </tr>
            <tr>
              <td>Publisher : </td>
              <td>{publisher}</td>
            </tr>
            <tr>
              <td>Rating : </td>
              <td>{rating}</td>
            </tr>
          </tbody>
        </table> */}
      </div>
    </div>
  );
};

export default BookDetails;