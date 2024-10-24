import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { API_URL, STORAGE_URL } from '../config/config';

const ArtikelSingle = () => {
    const { id } = useParams();
    const [artikel, setArtikel] = useState(null);
    const [artikelAll, setArtikelAll] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    useEffect(() => {
        const fetchArtikel = async () => {
            try {
                const response = await fetch(`${API_URL}artikel/${id}`);
                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                setArtikel(data);

                const allArticlesResponse = await fetch(`${API_URL}artikel`);
                if (!allArticlesResponse.ok) throw new Error('Network response was not ok');
                const allArticlesData = await allArticlesResponse.json();
                setArtikelAll(allArticlesData);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchArtikel();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!artikel) return <div>No article found.</div>;

    const formattedDate = formatDate(artikel.created_at);

    return (
        <div className='mx-auto'>
            {artikel.image && (
                <img
                    src={`${STORAGE_URL}artikel_images/${artikel.image}`}
                    alt={artikel.title}
                    className='w-full h-[400px] object-cover mb-5'
                />
            )}
            <div className='lg:px-96 px-5'>
                <h1 className='text-[#333333] text-4xl font-bold font-roboto py-5'>{artikel.title}</h1>
                <div className='flex py-5 gap-5 text-[#666666] text-[18px]'>
                    <div className='flex items-center'>
                        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='size-5'>
                            <path strokeLinecap='round' strokeLinejoin='round' d='M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z' />
                        </svg>
                        <div className='font-semibold ml-2 text-sm'>Admin</div>
                    </div>
                    <div className='flex items-center'>
                        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='size-5'>
                            <path strokeLinecap='round' strokeLinejoin='round' d='M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z' />
                        </svg>
                        <div className='font-semibold ml-2 text-sm'>{formattedDate}</div>
                    </div>
                </div>
                <div className='mt-3 text-[#666666] text-[18px] pb-10' dangerouslySetInnerHTML={{ __html: artikel.content }} />
                <div className='mx-auto block lg:flex gap-5'>
                    {artikelAll.slice(0, 3).map(article => (
                        <NavLink to={`/artikel/${article.id}`} key={article.id} className='mb-4 transition duration-300 ease-in-out hover:opacity-75'>
                            <div className='mb-5'>
                                <div className='flex-shrink-0 mb-5'>
                                    <img
                                        src={`${STORAGE_URL}artikel_images/${article.image}`}
                                        alt={article.title}
                                        className='md:w-[300px] md:h-[200px] w-full h-full object-cover md:rounded-lg'
                                    />
                                </div>
                                <div className='md:flex-1'>
                                    <h2 className='text-2xl font-bold mb-2 text-[#333333] md:max-w-[300px]'>{article.title}</h2>
                                </div>
                            </div>
                        </NavLink>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ArtikelSingle;
