import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Index from '../pages/Index';
import Layout from '../layouts/Layout';
import Profile from '../pages/Profile';
import Member from '../pages/Member';
import Contact from '../pages/Contact';
import ArtikelSingle from '../components/ArtikelSingle';
import ArtikelYear from '../components/ArtikelYear';

const RoutesApp = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout children={<Index/>} />}/>
      <Route path='/profile' element={<Layout children={<Profile/>} />}/>
      <Route path='/member' element={<Layout children={<Member/>} />}/>
      <Route path='/contact' element={<Layout children={<Contact/>} />}/>

      <Route path='/artikel/:id' element={<Layout children={<ArtikelSingle />} />} />
      <Route path='/artikel/year/:year' element={<Layout children={<ArtikelYear />} />} />
    </Routes>
  )
}

export default RoutesApp;