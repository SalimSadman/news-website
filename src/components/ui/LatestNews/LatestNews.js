//"use client";
import { getAllNews } from '@/utilities/getAllNews';
import React from 'react';
import Image from 'next/image';
const LatestNews = async () => {
    const { data } = await getAllNews()

    return (
        <div>
            <div className="card bg-base-100 shadow-xl  ">
                <figure>
                <Image
                                src={data[0].thumbnail_url}
                                alt="Shoes"
                                width={1000}
                                height={1000} />
                </figure>
                <div className="card-body">
                    <button className='bg-green-700 rounded-2xl w-[100px] text-center text-white p-2 '>{data[0].category}</button>
                    <h2 className="card-title">{data[0].title}</h2>
                    <p>{data[0].details.length > 200 ? data[0].details.slice(0, 300) + " ..." : data[0].details}</p>

                </div>
            </div>
            {/* Data Mapping */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-5'>
                {
                    data.slice(1,5).map(news => <div key={news._id} className="card bg-base-100 shadow-xl  ">
                        <figure>
                            <Image
                            className='h-[270px]'
                                src={news.thumbnail_url}
                                alt="Shoes"
                                width={1000}
                                height={1000} />
                        </figure>

                        <div className="card-body">
                            <div>
                                <p className='inline-block bg-green-700 rounded-2xl w- text-center text-white py-2 px-4 '>{news.category}
                                    </p>
                            </div>
                            <h2 className="card-title">{news.title}</h2>
                            <p>{news.details.length > 200 ? news.details.slice(0, 300) + " ..." : news.details}</p>

                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default LatestNews;