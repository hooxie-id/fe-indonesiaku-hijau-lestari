import React, { useEffect, useState } from 'react';
import TruncateContent from './TruncatedContent';
import { NavLink, useParams } from 'react-router-dom';
import { API_URL, STORAGE_URL } from '../config/config';

const ArtikelYear = () => {
    const { year } = useParams();
    const [artikelAll, setArtikelAll] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await fetch(`${API_URL}artikel/year/${year}`);
                const data = await response.json();
                setArtikelAll(data);
            } catch (error) {
                console.error('Error fetching articles:', error);
            }
        };

        fetchArticles();
    }, [year]);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    return (
        <div className='container mx-auto px-64 py-10'>
            {artikelAll.length === 0 ? (
                <div className='text-center text-gray-500'>
                    No articles available.
                </div>
            ) : (
                artikelAll.map((article) => (
                    <NavLink
                        to={`/artikel/${article.id}`}
                        key={article.id}
                        className='block md:flex mb-4 transition duration-300 ease-in-out hover:opacity-75'
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
                            <p className='mb-2 text-[#666666]'>{formatDate(article.created_at)}</p>
                            <div className='mt-3 text-[#666666]'>
                                <TruncateContent content={article.content} length={200} />
                            </div>
                            <span className='text-blue-500 hover:underline'>Read More</span>
                        </div>
                    </NavLink>
                ))
            )}
        </div>
    );
}

export default ArtikelYear;
