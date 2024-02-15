"use client";
import './globals.css'
//internal import

import {TrackingProvider} from '../Context/TrackingContext'
import { NavBar, Footer} from '@/Components';

export default function App({children}) {
  return (  
    <html lang="en">
    <body>
    <TrackingProvider>
    <NavBar/>
    {children}
    </TrackingProvider>
    <Footer/>
    </body>
    </html>
  );
};
