import React, { Suspense } from 'react';
import Banner from '../../Components/Banner/Banner';
import Books from '../Books/Books';
import { useLoaderData } from 'react-router';
import { createContext } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const DataContext = createContext('')

const HomePage = () => {

const data = useLoaderData()

  return (
    <div>
      <Banner></Banner>

      <DataContext value={data}>
        <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
          <Books></Books>
        </Suspense>
      </DataContext>
      
    </div>
  );
};

export default HomePage;