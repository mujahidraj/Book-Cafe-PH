import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/Errors/ErrorPage';
import HomePage from '../Pages/Home/HomePage';
import BookDetails from '../Pages/BookDetails/BookDetails';
import ListView from '../Pages/ListView/ListView';
import ReadPages from '../Pages/ReadPages/ReadPages';

export const router = createBrowserRouter([
  {
    path: "/",
    Component : Root,
    errorElement : <ErrorPage></ErrorPage>,
    children : [
      {
        index:true,
        loader:()=>fetch("booksData.json"),
        path : "/",
        Component: HomePage
      },
      {
        path : '/bookDetails/:id',
        loader:()=>fetch("booksData.json"),
        Component:BookDetails
      },
      {
        path : '/listview',
        loader:()=>fetch("booksData.json"),
        Component : ListView
      },
      {
        path : '/pagesview',
        loader:()=>fetch("booksData.json"),
        Component : ReadPages
      }
    ]
  },
]);