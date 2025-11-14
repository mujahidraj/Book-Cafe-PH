import React, { useEffect, useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { useLoaderData } from 'react-router';
import { getStoredBook } from '../../Utility/AddToLocalStorage';
import '../ListView/ListView.css'
import ListCard from '../../Components/ListCard/ListCard';
import { wishlistedBook } from '../../Utility/WishListToLocalStorage';
import WishedCard from '../../Components/WishedCard/WishedCard';

const ListView = () => {

  const [markedRead, setMarkedRead] = useState([])

  const bookData = useLoaderData();

  useEffect(() => {
    const storedBookData = getStoredBook();
    const convertedStoredBook = storedBookData.map(id => parseInt(id))
    const myMarkedRead = bookData.filter(book => convertedStoredBook.includes(book.bookId));
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMarkedRead(myMarkedRead)



  }, [bookData])

    const [markedWished, setMarkedWished] = useState([])

  useEffect(()=>{
    const storedWishedData = wishlistedBook();
    const convertedStoredBook = storedWishedData.map(id => parseInt(id))
    const myMarkedWished = bookData.filter(book => convertedStoredBook.includes(book.bookId));
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMarkedWished(myMarkedWished)
  },[bookData])


  return (
    <div className='md:px-24 my-10 sm:px-6'>

      <h3 className='text-2xl font-bold text-center'>Books</h3>

      <button className='btn bg-[#23BE0A] text-white'>Sorted By <IoIosArrowDown />
      </button>

    

      {/* name of each tab group should be unique */}
      <div className="tabs tabs-lift">
        <input type="radio" name="my_tabs_3" className="tab text-sm work-sans font-semibold border-[#23BE0A]/50" aria-label="Read List" defaultChecked/>
        <div className="tab-content bg-base-100 border-t-[#23BE0A]/50 p-6">
          <div className="flex flex-col gap-10  p-6">
          {
            markedRead.map(readItems=><ListCard key={readItems.bookId} readItems={readItems}></ListCard>)
          }
        </div>
        </div>
        

        <input type="radio" name="my_tabs_3" className="tab text-sm font-semibold work-sans border-[#23BE0A]/50" aria-label="Wish List"  />
        <div className="tab-content bg-base-100 border-t-[#23BE0A]/50 p-6">
           <div className="flex flex-col gap-10  p-6">
          {
            markedWished.map(wishedItems=><WishedCard key={wishedItems.bookId} wishedItems={wishedItems}></WishedCard>)
          }
        </div> 
        </div>
      </div>
    </div>
  );
};

export default ListView;