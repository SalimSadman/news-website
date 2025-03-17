import React from 'react';
import Image from 'next/image';
import { getAllNews } from '@/utilities/getAllNews';
import { getCurrentDate } from '@/utilities/getCurrentDate';
const Sidebar = async () => {
    const { data } = await getAllNews()
    const currentDate = getCurrentDate()
    return (
        <div>
            <div className="card bg-base-100 shadow-xl  ">
                <figure>
                    <Image
                    className='w-full'
                        src={data[5].thumbnail_url}
                        alt="Shoes"
                        width={1000}
                        height={1000} />
                </figure>
                <div className="card-body">
                    <button className='bg-green-700 rounded-2xl w-[100px] text-center text-white p-2 '>{data[5].category}</button>
                    <h2 className="card-title">{data[0].title}</h2>
                    <p>{data[5].details.length > 100 ? data[5].details.slice(0, 150) + " ..." : data[5].details}</p>

                </div>
            </div>
            {/* DATA MAP 8 ITEM */}
            
            <div className=' my-5'>
                            {
                                data.slice(6,14).map(news => <div key={news._id} className="shadow-sm my-5  flex items-center">
                                    
                                        <Image
                                        className='w-16 h-16 rounded-2xl '
                                            src={news.thumbnail_url}
                                            alt="news"
                                            width={150}
                                            height={150} />
                                    
            
                                    <div className="card-body">
                                        <h2 className="card-title">{news.title}</h2>
                                        <h2 className="text-sm text-purple-400">{news.author.published_date}</h2>
                                        <p>{currentDate}</p>
                                    </div>
                                </div>)
                            }
            </div>

            <div className=" shadow-xl  ">
                
                    <Image
                    className='rounded-xl'
                        src={data[14].thumbnail_url}
                        alt="Shoes"
                        width={1000}
                        height={1000} />
                
                
            </div>
        </div>
    );
};

export default Sidebar;