import React from 'react'
import ReactDOM from 'react-dom/client'
import {
 
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { router } from './Router/roters';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <div className='max-w-screen-xl	bg-slate-900	'>
 <RouterProvider router={router} />
 </div>
  </React.StrictMode>,
)
