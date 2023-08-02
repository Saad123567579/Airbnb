"use client";
import React, { useState, useEffect, useReducer, useRef } from "react";
import { toast } from "react-toastify";

import Image from "next/image";
import { FaSwimmingPool, FaWater } from "react-icons/fa";
import { PiPark } from "react-icons/pi";
import { BiSolidCastle } from "react-icons/bi";
import { MdOutlineCabin, MdOutlineApartment } from "react-icons/md";
import { GiFarmTractor, GiIsland } from "react-icons/gi";
import { BsBuildings, BsHouseDoor } from "react-icons/bs";
import { useForm } from "react-hook-form";
const initialState = {
  category: null,
  country: "United States",
  toilets: 1,
  rooms: 1,
  guests: 1,
  title: null,
  price: null,
  image: null

};

const ACTION = {
  SET_CATEGORY: "SET_CATEGORY",
  SET_COUNTRY: "SET_COUNTRY",
  INCREMENT_GUESTS: "INCREMENT_GUESTS",
  DECREMENT_GUESTS: "DECREMENT_GUESTS",
  INCREMENT_ROOMS: "INCREMENT_ROOMS",
  DECREMENT_ROOMS: "DECREMENT_ROOMS",
  INCREMENT_TOILETS: "INCREMENT_TOILETS",
  DECREMENT_TOILETS: "DECREMENT_TOILETS",
  SET_PRICE: "setprice",
  SET_TITLE: "settitle",
  SET_IMAGE_URL: "SET_IMAGE_URL",
};

// Define the reducer function to handle state changes
const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.SET_CATEGORY:
      return { ...state, category: action.payload };
    case ACTION.SET_COUNTRY:
      return { ...state, country: action.payload };
    case ACTION.INCREMENT_GUESTS:
      return { ...state, guests: state.guests + 1 };
    case ACTION.DECREMENT_GUESTS:
      return { ...state, guests: state.guests - 1 };
    case ACTION.INCREMENT_ROOMS:
      return { ...state, rooms: state.rooms + 1 };
    case ACTION.DECREMENT_ROOMS:
      return { ...state, rooms: state.rooms - 1 };
    case ACTION.INCREMENT_TOILETS:
      return { ...state, toilets: state.toilets + 1 };
    case ACTION.DECREMENT_TOILETS:
      return { ...state, toilets: state.toilets - 1 };
    case ACTION.SET_PRICE:
      return { ...state, price: action.payload };
    case ACTION.SET_TITLE:
      return { ...state, title: action.payload };
    case ACTION.SET_IMAGE_URL:
      return { ...state, image: action.payload };
    default:
      return state;
  }
};

const listing = () => {
  const ref = useRef();
  const [imageFile, setImageFile] = useState(null);


  const countries = [
    { label: "United States", value: "United States" },
    { label: "Canada", value: "Canada" },
    { label: "England", value: "England" },
    { label: "Australia", value: "Australia" },
    { label: "New Zealand", value: "New Zealand" },
  ];
  // Use the reducer to manage state
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    console.log(state);
  }, [state]);

  const headers = [
    { name: "Room", icon: BsHouseDoor },
    { name: "Condo", icon: BsBuildings },
    { name: "Apartment", icon: MdOutlineApartment },
    { name: "Farm", icon: GiFarmTractor },
    { name: "Cabin", icon: MdOutlineCabin },
    { name: "Island", icon: GiIsland },
    { name: "Castle", icon: BiSolidCastle },
    { name: "Park", icon: PiPark },
    { name: "Lakefront", icon: FaWater },
    { name: "Pool", icon: FaSwimmingPool },
  ];

  const onSubmit = () => {
    if (imageFile) {
      const reader = new FileReader();

      // Set up the onload event to read the file data
      reader.onload = () => {
        // Here, you can update the 'image' state to the base64 data URL of the image
        dispatch({ type: ACTION.SET_IMAGE_URL, payload: reader.result });
      };

      // Read the selected image file as a data URL
      reader.readAsDataURL(imageFile);
    }
    else {toast.error("No file selected");}
  };

  const createListing = async () => {
    const values = Object.values(state);
    state.description = `The best place to stay during your visit in ${state.country}. This ${state.category} has ${state.rooms} rooms, ${state.toilets} bathrooms suitable for ${state.guests} guests. Book now and enjoy.`;
  
    for (let val of values) {
      if (val === null) {
        toast.error("Please fill the form correctly");
        return;
      }
    }
    const data = state;
    toast.info("Please wait as we are saving your listing");
  
    const url = "/api/listing";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Add any other headers you need here
      },
      body: JSON.stringify(data),
    });
  
    // Check if the response is successful
    if (!response.ok) {
      toast.error("An Error Occurred");
      return;
    }
  
   
    // Parse the response as JSON
    const responseData = await response.json();
    console.log(responseData);
    toast.success("Listing successfully created");
  };
  



  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Create Your Listing</h1>
      <div className="flex flex-col mb-4">
        <label htmlFor="category" className="font-semibold mb-2">
          Select Category
        </label>
        <select
          id="category"
          className="border p-2 rounded-lg"
          value={state.category}
          onChange={(e) =>
            dispatch({ type: ACTION.SET_CATEGORY, payload: e.target.value })
          }
        >
          <option value="">Select a category</option>
          {headers.map((header) => (
            <option key={header.name} value={header.name}>
              {header.name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="country" className="font-semibold mb-2">
          Select Country
        </label>
        <select
          id="country"
          className="border p-2 rounded-lg"
          value={state.country}
          onChange={(e) =>
            dispatch({ type: ACTION.SET_COUNTRY, payload: e.target.value })
          }
        >
          {countries.map((country) => (
            <option key={country.value} value={country.value}>
              {country.label}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="rooms" className="font-semibold mb-2">
          Rooms
        </label>
        <div className="flex items-center">
          <button
            disabled={state.rooms <= 1}
            className="border p-2 rounded-md hover:bg-gray-100"
            onClick={() => dispatch({ type: ACTION.DECREMENT_ROOMS })}
          >
            -
          </button>
          <span className="mx-2">{state.rooms}</span>
          <button
            className="border p-2 rounded-md hover:bg-gray-100"
            onClick={() => dispatch({ type: ACTION.INCREMENT_ROOMS })}
          >
            +
          </button>
        </div>
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="rooms" className="font-semibold mb-2">
          Toilets
        </label>
        <div className="flex items-center">
          <button
            disabled={state.toilets <= 1}
            className="border p-2 rounded-md hover:bg-gray-100"
            onClick={() => dispatch({ type: ACTION.DECREMENT_TOILETS })}
          >
            -
          </button>
          <span className="mx-2">{state.toilets}</span>
          <button
            className="border p-2 rounded-md hover:bg-gray-100"
            onClick={() => dispatch({ type: ACTION.INCREMENT_TOILETS })}
          >
            +
          </button>
        </div>
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="rooms" className="font-semibold mb-2">
          Rooms
        </label>
        <div className="flex items-center">
          <button
            disabled={state.rooms <= 1}
            className="border p-2 rounded-md hover:bg-gray-100"
            onClick={() => dispatch({ type: ACTION.DECREMENT_GUESTS })}
          >
            -
          </button>
          <span className="mx-2">{state.guests}</span>
          <button
            className="border p-2 rounded-md hover:bg-gray-100"
            onClick={() => dispatch({ type: ACTION.INCREMENT_GUESTS })}
          >
            +
          </button>
        </div>
      </div>
      {/* i want to add here */}
      <div className="flex flex-col mb-4">
        <label htmlFor="price" className="font-semibold mb-2">
          Price per Night ($)
        </label>
        <input
          type="number"
          id="price"
          className="border p-2 rounded-lg"
          value={state.price}
          onChange={(e) =>
            dispatch({ type: ACTION.SET_PRICE, payload: e.target.value })
          }
        />
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="title" className="font-semibold mb-2">
          Title
        </label>
        <input
          type="text"
          id="title"
          className="border p-2 rounded-lg"
          value={state.title}
          onChange={(e) =>
            dispatch({ type: ACTION.SET_TITLE, payload: e.target.value })
          }
        />
      </div>
      {/* image upload functionality*/}
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <img src={state.image} alt="Thumbnail" id="img" ref={ref} />
        </div>
      </div>
      <div className="mb-4">
        <h4 className="text-lg font-medium mb-2">
          You can add a picture of your property here
        </h4>

        <input
          type="file"
          id="image"
          accept="image/*"
          onChange={(e) => setImageFile(e.target.files[0])}
        />

        <button type="submit" className="border-black border-2" onClick={onSubmit}>
          Submit Image
        </button>
      </div>


      {/* ... (repeat similar code for toilets and guests) */}
      <div className="flex justify-center mt-8">
        <button
          className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600"
          onClick={createListing} // Add your submission logic here
        >
          Create Listing
        </button>
      </div>
    </div>
  );
};

export default listing;
