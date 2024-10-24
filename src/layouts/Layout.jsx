import React from 'react';
import Footer from '../layouts/partials/Footer';
import Header from '../layouts/partials/Header';

const Layout = ({ children }) => {
  return (
    <div className='min-h-screen bg-white'>
      <Header />
        <div className='pb-10 min-h-screen'>
          {children}
        </div>
      <Footer />
    </div>
  )
}

export default Layout;