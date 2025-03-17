import React from 'react';
import CategoriesList from '@/components/ui/CategoriesList/CategoriesList';

const CategoriesLayout = ({ children }) => {
    return (
        <div className='p-4 md:px-16 md:py-5 md:flex gap-5'>
            <div className="w-1/1 md:w-1/3  bg-red-600">
                <CategoriesList></CategoriesList>
            </div>
            <div className="w-1/1 md:w-2/3 bg-fuchsia-500">
                {children}
            </div>
        </div>
    );
};

export default CategoriesLayout;