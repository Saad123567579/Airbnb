'use client'
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import Link from 'next/link';

export default function Home() {
  const [properties, setProperties] = useState(null);

  useEffect(() => {
    const fetchAllListings = async () => {
      try {
        const url = "/api/listing";
        const response = await fetch(url);
        const data = await response.json();
        setProperties(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchAllListings();
  }, []);

  useEffect(() => {
    console.log("The properties are ", properties);
  }, [properties]);

  const handleWishlist = async (event) => {
    let id = event.target.getAttribute('id');
    console.log("The id is :", id);
    let url = `/api/favourite/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    if (data === "User not authenticated" || data === "User not found") {
      toast.error("Please login or signup before wishlisting");
    }
    if (data === "Listing already in favorites") {
      toast.info("This is already in your wishlist");
    }
    if (data === "done") {
      toast.success("Added to wishlist");
    }
    if (data === "An error occurred") {
      toast.error("Internal server error. Please try again");
    }
  };

  return (
    <div className="flex flex-wrap justify-center">
      {!properties && <p>Loading...</p>}
      {properties &&
        properties.map((property) => (
          <div
            key={property.id}
            className="w-64 h-96  rounded-2xl m-5 hover:shadow-sm cursor-pointer"
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
            <div className="flex flex-row justify-around mb-2">
              <button
                className="p-1 text-rose-600 border-rose-600 border-2 rounded-lg hover:text-white hover:bg-rose-600"
                id={property.id}
                onClick={handleWishlist}
              >
                Wishlist
              </button>
              <Link
                href={`listitem/${property.id}`}
                className="p-1 text-rose-600 border-rose-600 border-2 rounded-lg hover:text-white hover:bg-rose-600"
              >
                Reserve Now
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
}
