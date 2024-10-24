import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import TruncateContent from './TruncatedContent';
import FormattedDate from './FormattedDate';
import { API_URL, STORAGE_URL } from '../config/config';

const ArtikelList = () => {
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
        <div className=''>
            {artikelAll.length === 0 ? (
                <div className='text-center text-gray-500'>
                    No articles available.
                </div>
            ) : (
                artikelAll.map(article => (
                    <NavLink
                        to={`/artikel/${article.id}`}
                        key={article.id}
                        className='block md:flex mb-4 transition duration-300 ease-in-out hover:opacity-75'
                        activeClassName='opacity-50'
                    >
                        <div className='flex-shrink-0 mb-5 md:mb-0 md:mr-4'>
                            <img
                                src={`${STORAGE_URL}artikel_images/${article.image}`}
                                alt={article.title}
                                className='md:w-[300px] md:h-[200px] w-full h-full object-cover md:rounded-lg'
                            />
                        </div>
                        <div className='px-5'>
                            <h2 className='text-2xl font-bold mb-2 text-[#333333]'>{article.title}</h2>
                            <p className='mb-2 text-[#666666]'>
                                <FormattedDate date={article.created_at} />
                            </p>
                            <div className='mt-3 text-[#666666]'>
                                <TruncateContent content={article.content} length={150} />
                            </div>
                            <span className='text-blue-500 hover:underline'>
                                Read More
                            </span>
                        </div>
                    </NavLink>
                ))
            )}
        </div>
    );
}

export default ArtikelList;
