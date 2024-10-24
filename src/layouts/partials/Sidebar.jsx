import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Sidebar = ({ artikelAll }) => {
    const getArticleCountsByYear = () => {
        let countsByYear = {};

        artikelAll.forEach((article) => {
            const year = new Date(article.created_at).getFullYear();
            if (countsByYear[year]) {
                countsByYear[year]++;
            } else {
                countsByYear[year] = 1;
            }
        });

        return countsByYear;
    };

    const articleCountsByYear = getArticleCountsByYear();

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://www.instagram.com/embed.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className='bg-green-500 text-white p-5 h-fit w-[410px] rounded-lg'>
            <div className='mb-5 border p-5'>
                <ul className='flex flex-col gap-5'>
                    {Object.keys(articleCountsByYear).map((year) => (
                        <li key={year}>
                            <NavLink
                                to={`/artikel/year/${year}`}
                                className='hover:underline'
                                activeClassName='text-yellow-300'
                            >
                                {year} ({articleCountsByYear[year]})
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='border p-5'>
                <ul className='flex flex-col gap-5'>
                    <li className='hidden lg:block'>
                        <div className='aspect-w-1 aspect-h-1'>
                            <blockquote
                                className='instagram-media'
                                data-instgrm-permalink='https://www.instagram.com/indonesiakuhijaulestari/'
                                data-instgrm-version='13'
                            ></blockquote>
                        </div>
                    </li>
                    <li>
                        <a
                            href='https://www.facebook.com'
                            target="_blank"
                            rel="noopener noreferrer"
                            className='bg-blue-500 w-full flex justify-center items-center py-2 rounded-lg'
                        >
                            <FontAwesomeIcon icon={faFacebook} size='2x' />
                        </a>
                    </li>
                    <li>
                        <a
                            href='https://www.youtube.com'
                            target="_blank"
                            rel="noopener noreferrer"
                            className='bg-red-500 w-full flex justify-center items-center py-2 rounded-lg'
                        >
                            <FontAwesomeIcon icon={faYoutube} size='2x' />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
