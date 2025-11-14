import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/Errors/ErrorPage';
import HomePage from '../Pages/Home/HomePage';

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
      }
    ]
  },
]);