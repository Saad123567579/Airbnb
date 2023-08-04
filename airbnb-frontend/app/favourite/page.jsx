'use client'
import React, { useState, useEffect } from 'react'

const Page = () => {
    const [listing, setListing] = useState(null);

    useEffect(() => {
        const fetchListing = async () => {
            try {
                const url = "/api/fav/";
                const response = await fetch(url);
                const data = await response.json();
                setListing(data);
                console.log(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchListing();
    }, []);

    return (
        <div className="flex flex-col items-center">
            {!listing && <p>Loading...</p>}
            {listing && (
                <>
                    <h1 className="font-semibold text-2xl my-5">Your Favourite Items Are</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        {listing.map((property) => (
                            <div
                                key={property.id}
                                className="w-64 h-96 rounded-2xl m-5 hover:shadow-sm cursor-pointer"
                            >
                                <div className="relative h-48">
                                    <img
                                        alt="someimage"
                                        src={property.imageSrc}
                                        className="w-full h-full object-cover rounded-t-2xl hover:brightness-110 transform origin-center scale-105 transition-transform duration-300 ease-in-out"
                                    />
                                </div>
                                <div className="p-2 font-bold">{property.title}</div>
                                <div className="font-bold p-2">{property.locationValue}</div>
                                <div className="p-2">{property.category}</div>
                                <div className="p-2">
                                    <span className="font-bold">${property.price}</span>
                                    <span className="ml-1">Night</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default Page;
