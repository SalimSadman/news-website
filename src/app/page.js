import LatestNews from '@/components/ui/LatestNews/LatestNews';
import React from 'react';

const HomePage = () => {
  return (
    <div className='p-4 md:px-16 md:py-5 md:flex gap-5'>
      <div className="w-1/1 md:w-2/3 ">
      <LatestNews></LatestNews>
      </div>
      <div className="w-1/1 md:1-2/3 ">
      <h1>Home Right Side</h1>
      </div>
    </div>
  );
};

export default HomePage;