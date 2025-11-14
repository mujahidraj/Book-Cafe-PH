import React, { useEffect, useState } from 'react';
import { getStoredBook } from '../../Utility/AddToLocalStorage';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend, Cell } from 'recharts';
import { useLoaderData } from 'react-router';

const colorData = [
  { name: 'Bright Red', fill: '#FF6B6B' },
  { name: 'Ocean Blue', fill: '#4D96FF' },
  { name: 'Leaf Green', fill: '#6BCB77' },
  { name: 'Sun Yellow', fill: '#FFD93D' },
  { name: 'Royal Purple', fill: '#9B59B6' },
  { name: 'Vibrant Orange', fill: '#E67E22' },
  { name: 'Cool Teal', fill: '#1ABC9C' },
  { name: 'Deep Pink', fill: '#F472B6' },
  { name: 'Sky Blue', fill: '#82D1F5' },
  { name: 'Crimson', fill: '#DC143C' }
];

const ReadPages = () => {

  const [markedRead, setMarkedRead] = useState([]);
  const bookData = useLoaderData();

  useEffect(() => {
    const storedBookData = getStoredBook();
    const convertedStoredBook = storedBookData.map(id => parseInt(id));

    const myMarkedRead = bookData.filter(book => convertedStoredBook.includes(book.bookId));
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setMarkedRead(myMarkedRead);

  }, [bookData]);
  

  return (
    <div>
      
    
      <BarChart 
        height={500} 
        width={1200} 
        data={markedRead} 
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        
        
        <XAxis dataKey="bookName" />
        <YAxis />
        <Tooltip />
        <Legend />
        
       
        <Bar dataKey="totalPages">
  {
 
    markedRead.map((entry, index) => (
      <Cell 
        key={`cell-${index}`} 
        fill={colorData[index % colorData.length].fill} 
      />
    ))
  }
</Bar>

      </BarChart>
    </div>
  );
};

export default ReadPages;