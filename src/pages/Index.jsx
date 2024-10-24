import React, { useEffect, useState } from 'react';
import Sidebar from '../layouts/partials/Sidebar';
import ArtikelList from '../components/ArtikelList';
import { API_URL } from '../config/config';

const Index = () => {
  const [artikelAll, setArtikelAll] = useState([]);

  useEffect(() => {
      const fetchArticles = async () => {
          const response = await fetch(API_URL + 'artikel');
          const data = await response.json();
          setArtikelAll(data);
      };
      fetchArticles();
  }, []);

  return (
    <div className='px-4 py-4 md:px-10 md:py-10 2xl:px-32 2xl:py-10 block lg:flex lg:justify-between gap-5'>
      <div className='col-span-5'>
        <ArtikelList />
      </div>
      <div className='col-span-1 flex items-start'>
        <Sidebar artikelAll={artikelAll}/>
      </div>
    </div>
  )
}

export default Index;