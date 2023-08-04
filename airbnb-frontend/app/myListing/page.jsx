'use client'
import React, { useState, useEffect } from 'react'

const page = () => {
    const [listing, Setlisting] = useState(null);
    useEffect(() => {
        const fetchMylisting = async () => {
            let url = "/api/mylisting/";
            const response = await fetch(url);
            const data = await response.json();

            Setlisting(data);
        }
        fetchMylisting();

    }, [])

    return (
        <div>
            {!listing && <>Loading...</>}
            {(listing?.length == 0 || listing?.length >= 0) &&
                listing.length ? (<h1 className="font-semibold text-2xl my-5">Your Listings Are</h1>) : (<h1 className="font-semibold text-2xl my-5">No Listings Yet Try Creating One</h1>)}
            {listing?.length && <>
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
                </div></>}
      
        </div >
    )
}

export default page
