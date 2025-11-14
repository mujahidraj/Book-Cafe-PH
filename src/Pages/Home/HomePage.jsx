import React, { Suspense } from 'react';
import Banner from '../../Components/Banner/Banner';
import Books from '../Books/Books';
import { useLoaderData } from 'react-router';
import { createContext } from 'react';
import wish from "../../assets/wish.png"
import { Link } from 'react-router';

// eslint-disable-next-line react-refresh/only-export-components
export const DataContext = createContext('')

const HomePage = () => {

const data = useLoaderData()

  return (
    <div>
      <Banner></Banner>
      <Link to="/listview">
        <div className='fixed bottom-10 right-5 bg-lime-700 rounded-full p-2'>
        <img src={wish} className='h-8' alt="" />
      </div>
      </Link>
      <DataContext value={data}>
        <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
          <Books></Books>
        </Suspense>
      </DataContext>
      
    </div>
  );
};

export default HomePage;