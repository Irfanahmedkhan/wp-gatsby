import React from 'react'
import Footer from './footer/Footer'
import Head from './header/Head'
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export const Layout = ({children}) => {
    return (
        <div>
            <Head />
            {children}
            <Footer />  
        </div>
    )
}
