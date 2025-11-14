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

  useEffect(() => {
    const storedWishedData = wishlistedBook();
    const convertedStoredBook = storedWishedData.map(id => parseInt(id))
    const myMarkedWished = bookData.filter(book => convertedStoredBook.includes(book.bookId));
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMarkedWished(myMarkedWished)
  }, [bookData])

  const [sort , setSort] = useState("")

  const handleSort=(type)=>{
    setSort(type)
    if(type ==="Pages"){
      const sortedByPages = [...markedRead].sort((a,b) => a.totalPages-b.totalPages)
      setMarkedRead(sortedByPages)
    }
    if(type ==="Rating"){
      const sortedByRating = [...markedRead].sort((a,b) => b.rating-a.rating)
      setMarkedRead(sortedByRating)
    }
    if(type ==="Published Year"){
      const sortedByPublished = [...markedRead].sort((a,b) => b.yearOfPublishing-a.yearOfPublishing)
      setMarkedRead(sortedByPublished)
    }


    // for wishlist

    if(type ==="Pages"){
      const sortedByPages = [...markedWished].sort((a,b) => a.totalPages-b.totalPages)
      setMarkedWished(sortedByPages)
    }
    if(type ==="Rating"){
      const sortedByRating = [...markedWished].sort((a,b) => b.rating-a.rating)
      setMarkedWished(sortedByRating)
    }
    if(type ==="Published Year"){
      const sortedByPublished = [...markedWished].sort((a,b) => b.yearOfPublishing-a.yearOfPublishing)
      setMarkedWished(sortedByPublished)
    }
  }

  return (
    <div className='md:px-24 my-10 sm:px-6'>

      <div className='flex flex-col items-center'>
        <h3 className='text-2xl font-bold text-center'>Books</h3>

        <div className="dropdown dropdown-start ">
          <div tabIndex={0} role="button" className="btn m-1 bg-[#23BE0A]  text-white">Sorted By : {sort? sort:"Default"}<IoIosArrowDown /></div>
          <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li><a onClick={()=>{handleSort("Pages")}}>Pages</a></li>
            <li><a onClick={()=>{handleSort("Rating")}}>Rating</a></li>
            <li><a onClick={()=>{handleSort("Published Year")}}>Published Year</a></li>
          </ul>
        </div>
      </div>




      {/* name of each tab group should be unique */}
      <div className="tabs tabs-lift">
        <input type="radio" name="my_tabs_3" className="tab text-sm work-sans font-semibold border-[#23BE0A]/50" aria-label="Read List" defaultChecked />
        <div className="tab-content bg-base-100 border-t-[#23BE0A]/50 p-6">
          <div className="flex flex-col gap-10  p-6">
            {
              markedRead.map(readItems => <ListCard key={readItems.bookId} readItems={readItems}></ListCard>)
            }
          </div>
        </div>


        <input type="radio" name="my_tabs_3" className="tab text-sm font-semibold work-sans border-[#23BE0A]/50" aria-label="Wish List" />
        <div className="tab-content bg-base-100 border-t-[#23BE0A]/50 p-6">
          <div className="flex flex-col gap-10  p-6">
            {
              markedWished.map(wishedItems => <WishedCard key={wishedItems.bookId} wishedItems={wishedItems}></WishedCard>)
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListView;