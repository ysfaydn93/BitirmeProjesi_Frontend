import React from 'react';
import { Link, useParams } from 'react-router-dom';

export default function MainDetails() {
    const { id } = useParams();

    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <img alt="Course" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={`/images/courses/${id}.jpg`} />
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">Course Name</h1>
                        <div className="flex mb-4">
                            {/* Diğer içerikler burada */}
                        </div>
                        <p className="leading-relaxed">Course description...</p>
                        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                            {/* Diğer içerikler burada */}
                        </div>
                        <div className="flex">
                            <span className="title-font font-medium text-2xl text-gray-900">$58.00</span>
                            <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded-lg">
                                <Link to={`/course/${id}`}>Detay</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
