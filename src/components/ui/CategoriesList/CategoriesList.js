import React from 'react';
import { getAllCategories } from '@/utilities/getAllCategories';
import Link from 'next/link';

const CategoriesList = async() => {
    const  { data:allCategories } =  await getAllCategories()
    return (
        <div className='p-5 bg-base-300'>
            <h1 className='m-0 text-xl font-semibold'>Categories</h1>
            <div className="divider mt-0"></div>

            {
                allCategories.map(category=> <Link href={`/categories/news?category=${category.title.toLowerCase()}`}  key={category._id} ><button 
                    className='mt-5 uppercase btn btn-outline w-full'>{category.title}</button></Link> )
            }
            
        </div>
    );
};

export default CategoriesList;