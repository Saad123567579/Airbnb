'use client'
import React, { useState, useEffect } from 'react'
import { format } from 'date-fns';
import {toast} from "react-toastify";
const page = () => {
    const [listing, Setlisting] = useState(null);
    useEffect(() => {
        const fetchListing = async () => {
            let url = "/api/trips/";
            const response = await fetch(url);
            const data = await response.json();
            Setlisting(data);
            console.log("the data is", data);
        }
        fetchListing();


    }, [])
    const handleDeleteReservation = async (event) => {
        let id = event.target.getAttribute('id');
        let url = "/api/deleteres/";
        const response = await fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(id),
        })
        const data = await response.json();
        if(data=="success") toast.success("The reservation is been cancelled");window.location.href="/";
        if(data=="Internal Server Error") toast.error("Please Try Again");  
}

return (
    <div>
        {!listing && <>Loading...</>}
        {listing && listing.length === 0 && <>No Listing found</>}
        {listing && (
            <>
                <h1 className="font-semibold text-2xl my-5 m-auto">Your Current Reservations Are</h1>
                <div className="sm:mb-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {listing.map((property) => (
                        <div
                            key={property.listing.id}
                            className="w-64 h-96 rounded-2xl m-5 hover:shadow-sm cursor-pointer"
                        >
                            <div className="relative h-48">
                                <img
                                    alt="someimage"
                                    src={property.listing.imageSrc}
                                    className="w-full h-full object-cover rounded-t-2xl hover:brightness-110 transform origin-center scale-105 transition-transform duration-300 ease-in-out"
                                />
                            </div>
                            <div className="p-2 font-bold">{property.listing.title}</div>
                            <div className="font-bold p-2">{property.listing.locationValue}</div>
                            <div className="p-2">{property.listing.category}</div>
                            <div className="p-2">
                                <span className="font-bold">${property.reservation.totalPrice} Total</span>
                            </div>
                            <div className="p-2">Reserved On {format(new Date(property.reservation.createdAt), 'yyyy-MM-dd')}</div>

                            <div className="p-2">    From {format(new Date(property.reservation.startDate), 'yyyy-MM-dd')} To {format(new Date(property.reservation.endDate), 'yyyy-MM-dd')}</div>
                            <div className='p-2'><button id={property.reservation.id} className=' p-1 rounded-sm border-2 text-rose-600 border-rose-600 hover:bg-rose-600 hover:text-white' onClick={handleDeleteReservation}>Delete Reservation</button></div>
                        </div>
                    ))}
                </div>
            </>)}
    </div>
)
}

export default page
