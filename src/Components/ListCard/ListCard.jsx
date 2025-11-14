import React from 'react';
import '../ListCard/ListCard.css'
import { SlCalender } from "react-icons/sl";
import { IoPeopleOutline } from "react-icons/io5";
import { MdOutlineFindInPage } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import { LiaHashtagSolid } from "react-icons/lia";





const ListCard = ({ readItems }) => {

  const { bookName, author, image, rating, category, publisher, yearOfPublishing, tags, totalPages } = readItems

  return (
    <div>
      <div className='flex flex-row border-b pb-10 border-slate-400 gap-10'>
        <img src={image} className='w-40' alt="" />
        <div>
          <h2 className='playfair-display text-2xl font-bold'>{bookName}</h2>
          <p className='text-[#404040cc] font-medium work-sans my-2 flex  gap-2 items-center'> <IoMdPerson />
            Author : <span className='text-[#23BE0A] font-medium ' >{author}</span></p>


          <div className='flex gap-10'>
            <div className='flex flex-row gap-5'><span className='font-bold text-sm flex  gap-2 items-center'><LiaHashtagSolid />
              Tag :</span>
              {
                tags.map((tagsItems, index) => <p className=' font-medium text-[#23BE0A]' key={index}>#{tagsItems}</p>)
              }
            </div>
            <p className='text-[#404040cc] font-medium work-sans flex  gap-2 items-center'><SlCalender />
              Year of Publication : <span className='text-[#23BE0A] font-medium' >{yearOfPublishing}</span></p>
          </div>


          <div className='flex my-2 flex-row gap-10'>
            <h3 className='text-[#404040cc] font-medium work-sans flex  gap-2 items-center'> <IoPeopleOutline />
              Publisher : <span className='text-[#23BE0A] font-medium' >{publisher}</span></h3>
            <h3 className='text-[#404040cc] font-medium work-sans flex  gap-2 items-center'> <MdOutlineFindInPage />
              Pages : <span className='text-[#23BE0A] font-medium' >{totalPages}</span></h3>
          </div>


          <div className='flex flex-row gap-8 items-center'>
            <h3 className='text-sky-500 py-2 px-4 rounded-full bg-sky-200 font-medium work-sans'>Category : <span className='text-sky-500 font-medium' >{category}</span></h3>
            <h3 className='text-amber-500 py-2 px-4 rounded-full bg-amber-100 font-medium my-2 work-sans'>Rating : <span className='text-amber-500 font-medium' >{rating}</span></h3>
            <button className='btn bg-[#23BE0A] text-white rounded-full'>View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCard;