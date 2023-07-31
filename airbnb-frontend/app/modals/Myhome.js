// 'use client'

import React, { useState, useEffect, useReducer } from 'react';
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { FaSwimmingPool, FaWater } from 'react-icons/fa';
import { PiPark } from 'react-icons/pi';
import { BiSolidCastle } from 'react-icons/bi';
import { MdOutlineCabin, MdOutlineApartment } from 'react-icons/md';
import { GiFarmTractor, GiIsland } from 'react-icons/gi';
import { BsBuildings, BsHouseDoor } from 'react-icons/bs';
import {useSelector , useDispatch} from "react-redux";


// Reducer function

// const ACTION = {
//     NEXT_PAGE: 'nextpage',
//     PREV_PAGE: 'prevpage',
//     SET_TYPE: 'settype',
//     SET_COUNTRY: 'setcountry',
//     INCREMENT_GUESTS: 'incguests',
//     DECRMENT_GUESTS: 'decguests',
//     INCREMENT_ROOMS: 'incrooms',
//     DECREMENT_ROOMS: 'decrooms',
//     INCREMENT_TOILETS: 'inctoilets',
//     DECREMENT_TOILETS: 'dectoilets'
// }

// const reducer = (state, action) => {
//     switch (action.type) {
//         case ACTION.NEXT_PAGE:
//             return { page: state.page + 1 };
//         case ACTION.PREV_PAGE:
//             return { page: state.page - 1 };
//         case ACTION.SET_PAGE:
//             return { page: action.payload, type: null, country: null }
//         case ACTION.SET_TYPE:
//             return { ...state, type: action.payload }
//         case ACTION.SET_COUNTRY:
//             return { ...state, country: action.payload }
//         case ACTION.INCREMENT_GUESTS:
//             return { ...state, guests: state.guests + 1 }
//         case ACTION.INCREMENT_ROOMS:
//             return { ...state, rooms: state.rooms + 1 }
//         case ACTION.INCREMENT_TOILETS:
//             return { ...state, toilets: state.toilets + 1 }
//         case ACTION.DECREMENT_GUESTS:
//             return { ...state, guests: state.guests - 1 }
//         case ACTION.DECREMENT_ROOMS:
//             return { ...state, rooms: state.rooms - 1 }
//         case ACTION.DECREMENT_TOILETS:
//             return { ...state, toilets: state.toilets - 1 }


//         default:
//             return state;
//     }
// };


const Myhome = ({ home, sethome }) => {
    // const toilets = useSelector((state) => state.);
    // console.log(toilets);
    return (
        <></>
    );
};

export default Myhome;



// const countries = [

//     { label: 'United States', value: 'United States' },
//     { label: 'Canada', value: 'Canada' },
//     { label: 'England', value: 'England' },
//     { label: 'Australia', value: 'Australia' },
//     { label: 'New Zealand', value: 'New Zealand' },
// ];
// const [selectedCountry, setSelectedCountry] = useState("United States");

// const handleCountryChange = (event) => {
//     const selectedValue = event.target.value;
//     const country = countries.find((country) => country.value === selectedValue);
//     setSelectedCountry(country);
//     dispatch({ type: ACTION.SET_COUNTRY, payload: event.target.value })
// };

// const initialState = { page: 1, type: null, country: selectedCountry.value, toilets: 1, rooms: 1, guests: 1 };
// const [state, dispatch] = useReducer(reducer, initialState);
// useEffect(() => {
//     console.log("page ", state.page);
// }, [state])
// useEffect(() => {
//     console.log("type ", state.type);
// }, [state.type])
// useEffect(() => {
//     console.log("country ", state.country);

// }, [state.country])
// useEffect(() => {
//   console.log("Rooms: ",state.rooms);
//   console.log("Toilets: ",state.toilets);
//   console.log("Guests: ",state.guests);

 
// }, [])






// const [category, setCategory] = useState(null);
// const headers = [
//     { name: 'Room', icon: BsHouseDoor },
//     { name: 'Condo', icon: BsBuildings },
//     { name: 'Apartment', icon: MdOutlineApartment },
//     { name: 'Farm', icon: GiFarmTractor },
//     { name: 'Cabin', icon: MdOutlineCabin },
//     { name: 'Island', icon: GiIsland },
//     { name: 'Castle', icon: BiSolidCastle },
//     { name: 'Park', icon: PiPark },
//     { name: 'Lakefront', icon: FaWater },
//     { name: 'Pool', icon: FaSwimmingPool },
// ];

// const handleCategory = (event) => {
//     let val = event.currentTarget.getAttribute('data-value');

//     dispatch({ type: ACTION.SET_TYPE, payload: val })
//     let father = event.currentTarget.parentNode.parentNode.parentNode;
//     let list = Array.from(father.childNodes);
//     list.map((item) => {
//         if (item.classList.contains("border-black")) {
//             item.classList.remove("border-black");
//         }
//         if (item.getAttribute('data-value') == val) {
//             item.classList.add("border-black");
//         }
//     });
// };




// useEffect(() => {
//     // This code will run after the component has rendered
//     // and whenever the 'category' state is updated.
//     console.log(category);
// }, [category]);




// return (
//     <Transition.Root show={home} as={Fragment}>
//         <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={sethome}>
//             <div className="flex items-center justify-center min-h-screen px-4 py-6 text-center sm:p-0">
//                 <Transition.Child
//                     as={Fragment}
//                     enter="ease-out duration-300"
//                     enterFrom="opacity-0 scale-95"
//                     enterTo="opacity-100 scale-100"
//                     leave="ease-in duration-200"
//                     leaveFrom="opacity-100 scale-100"
//                     leaveTo="opacity-0 scale-95"
//                 >
//                     <div className="fixed inset-0 transition-opacity">
//                         <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
//                     </div>
//                 </Transition.Child>

//                 <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
//                     &#8203;
//                 </span>

//                 <Transition.Child

//                     enter="ease-out duration-300"
//                     enterFrom="opacity-0 scale-95"
//                     enterTo="opacity-100 scale-100"
//                     leave="ease-in duration-200"
//                     leaveFrom="opacity-100 scale-100"
//                     leaveTo="opacity-0 scale-95"
//                 >
//                     {state.page === 1 && <div className="bg-white w-96 h-128 m-auto mt-4 rounded-lg border-2">
//                         <div className="flex items-center justify-start border-b-2 border-b-red-600">
//                             <span className="m-2 cursor-pointer" onClick={() => { sethome(false), dispatch({ type: ACTION.SET_PAGE, payload: 1 }) }}>
//                                 X
//                             </span>
//                             <h5 className="m-2 pl-24">Airbnb Your Home</h5>
//                         </div>
//                         <h1 className="font-bold m-2">Which of these best describe your place</h1>
//                         <p className="m-2">Pick a category</p>
//                         <div className="grid w-full grid-flow-row grid-cols-2 grid-row-6">
//                             {headers.map((head) => (
//                                 <div
//                                     key={head.name}
//                                     className={`bg-slate-100 m-2 rounded-lg border-2 ${state.type == head.name ? ('border-black') : ('')} `}
//                                     data-value={head.name}

//                                 >
//                                     <div className="flex flex-col items-center justify-center w-full h-full bg-white rounded-lg border-black hover:bg-slate-100">
//                                         <span data-value={head.name}>{React.createElement(head.icon)}</span>
//                                         <h1 className="text-lg font-bold cursor-pointer" data-value={head.name} onClick={handleCategory}>
//                                             {head.name}
//                                         </h1>
//                                     </div>
//                                 </div>
//                             ))}

//                             <div className="col-start-1 col-end-3">
//                                 <button disabled={!state.type} onClick={() => dispatch({ type: ACTION.NEXT_PAGE })} className="mx-11 p-1 my-1 border-rose-600 border-2 w-3/4 h-7/8 rounded-lg font-bold text-black bg-white hover:text-white hover:bg-rose-600">
//                                     Next
//                                 </button>
//                             </div>
//                         </div>
//                     </div>}

//                     {state.page === 2 && (
//                         <div className="bg-white w-96 h-128 m-auto mt-4 rounded-lg border-2 shadow-md">
//                             <div className="flex items-center justify-start border-b-2 border-b-red-600 p-2">
//                                 <span className="text-2xl cursor-pointer" onClick={() => { sethome(false), dispatch({ type: ACTION.SET_PAGE, payload: 1 }) }}>
//                                     X
//                                 </span>
//                                 <h5 className=" font-semibold self-center text-center ml-5 text-xl">Airbnb Your Home</h5>
//                             </div>
//                             <div className="p-4">
//                                 <h1>Select Your Country</h1>

//                                 <select className="border-2 rounded-lg p-2 w-3/4" onChange={handleCountryChange} id='country' value={selectedCountry?.value}>
//                                     {countries.map((country) => (
//                                         <option key={country.value} value={country.value}>
//                                             {country.label}
//                                         </option>
//                                     ))}
//                                 </select>
//                             </div>
//                             <h1 className="font-bold mb-2 text-lg text-center">Share some details about your place</h1>
//                             <p className="mb-2 text-center">What amenities do you have</p>
//                             <div className="flex flex-col px-4 py-2">
//                                 <div className="flex items-center justify-between mb-2">
//                                     <div>
//                                         <h1 className="text-xl font-semibold">Guests</h1>
//                                         <p>How many guests do you allow</p>
//                                     </div>
//                                     <div className="flex items-center">
//                                         <div className="border-2 rounded-full p-2 cursor-pointer" onClick={()=>dispatch({type:ACTION.DECREMENT_GUESTS})}>-</div>
//                                         <p className="mx-2 text-xl">{state.guests}</p>
//                                         <div className="border-2 rounded-full p-2 cursor-pointer"onClick={()=>dispatch({type:ACTION.INCREMENT_GUESTS})}>+</div>
//                                     </div>
//                                 </div>

//                                 <div className="flex items-center justify-between mb-2">
//                                     <div>
//                                         <h1 className="text-xl font-semibold">Rooms</h1>
//                                         <p>How many rooms do you have</p>
//                                     </div>
//                                     <div className="flex items-center">
//                                         <div className="border-2 rounded-full p-2 cursor-pointer" onClick={()=>dispatch({type:ACTION.DECREMENT_ROOMS})}>-</div>
//                                         <p className="mx-2 text-xl">{state.rooms}</p>
//                                         <div className="border-2 rounded-full p-2 cursor-pointer" onClick={()=>dispatch({type:ACTION.DECREMENT_ROOMS})}>+</div>
//                                     </div>
//                                 </div>

//                                 <div className="flex items-center justify-between">
//                                     <div>
//                                         <h1 className="text-xl font-semibold">Toilets</h1>
//                                         <p>How many toilets do you have</p>
//                                     </div>
//                                     <div className="flex items-center">
//                                         <div className="border-2 rounded-full p-2 cursor-pointer" onClick={()=>dispatch({type:ACTION.DECREMENT_TOILETS})}>-</div>
//                                         <p className="mx-2 text-xl">{state.toilets}</p>
//                                         <div className="border-2 rounded-full p-2 cursor-pointer" onClick={()=>dispatch({type:ACTION.INCREMENT_TOILETS})}>+</div>
//                                     </div>
//                                 </div>
//                                 <div className="flex justify-center mt-4">
//                                     <button onClick={() => dispatch({ type: ACTION.PREV_PAGE })} className="mx-4 p-2 border-rose-600 border-2 w-24 rounded-lg font-bold text-black bg-white hover:text-white hover:bg-rose-600">
//                                         Back
//                                     </button>
//                                     <button disabled={!state.country} onClick={() => dispatch({ type: ACTION.NEXT_PAGE })} className="mx-4 p-2 border-rose-600 border-2 w-24 rounded-lg font-bold text-black bg-white hover:text-white hover:bg-rose-600">
//                                         Next
//                                     </button>

//                                 </div>
//                             </div>



//                         </div>
//                     )}




//                 </Transition.Child>
//             </div>
//         </Dialog>
//     </Transition.Root>