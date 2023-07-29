import React, { useState, useEffect } from 'react';
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { FaSwimmingPool, FaWater } from 'react-icons/fa';
import { PiPark } from 'react-icons/pi';
import { BiSolidCastle } from 'react-icons/bi';
import { MdOutlineCabin, MdOutlineApartment } from 'react-icons/md';
import { GiFarmTractor, GiIsland } from 'react-icons/gi';
import { BsBuildings, BsHouseDoor } from 'react-icons/bs';

const Myhome = ({ home, sethome }) => {
    const [category, setCategory] = useState(null);
    const [process, setProcess] = useState(1);
    const headers = [
        { name: 'Room', icon: BsHouseDoor },
        { name: 'Condo', icon: BsBuildings },
        { name: 'Apartment', icon: MdOutlineApartment },
        { name: 'Farm', icon: GiFarmTractor },
        { name: 'Cabin', icon: MdOutlineCabin },
        { name: 'Island', icon: GiIsland },
        { name: 'Castle', icon: BiSolidCastle },
        { name: 'Park', icon: PiPark },
        { name: 'Lakefront', icon: FaWater },
        { name: 'Pool', icon: FaSwimmingPool },
    ];

    const handleCategory = (event) => {
        let val = event.currentTarget.getAttribute('data-value');
        setCategory(val);

        let father = event.currentTarget.parentNode.parentNode.parentNode;
        let list = Array.from(father.childNodes);
        list.map((item) => {
            if (item.classList.contains("border-black")) {
                item.classList.remove("border-black");
            }
            if (item.getAttribute('data-value') == val) {
                item.classList.add("border-black");
            }
        });
    };

    const handleNext1 = () => {
        setProcess(process + 1);
    }


    useEffect(() => {
        // This code will run after the component has rendered
        // and whenever the 'category' state is updated.
        console.log(category);
    }, [category]);




    return (
        <Transition.Root show={home} as={Fragment}>
            <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={sethome}>
                <div className="flex items-center justify-center min-h-screen px-4 py-6 text-center sm:p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <div className="fixed inset-0 transition-opacity">
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>
                    </Transition.Child>

                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                        &#8203;
                    </span>

                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <div className="bg-white w-96 h-128 m-auto mt-4 rounded-lg border-2">
                            <div className="flex items-center justify-start border-b-2 border-b-red-600">
                                <span className="m-2 cursor-pointer" onClick={() => sethome(false)}>
                                    X
                                </span>
                                <h5 className="m-2 pl-24">Airbnb Your Home</h5>
                            </div>
                            <h1 className="font-bold m-2">Which of these best describe your place</h1>
                            <p className="m-2">Pick a category</p>
                            <div className="grid w-full grid-flow-row grid-cols-2 grid-row-6">
                                {headers.map((head) => (
                                    <div
                                        key={head.name}
                                        className="bg-slate-100 m-2 rounded-lg border-2"
                                        data-value={head.name}

                                    >
                                        <div className="flex flex-col items-center justify-center w-full h-full bg-white rounded-lg border-black hover:bg-slate-100">
                                            <span data-value={head.name}>{React.createElement(head.icon)}</span>
                                            <h1 className="text-lg font-bold cursor-pointer" data-value={head.name} onClick={handleCategory}>
                                                {head.name}
                                            </h1>
                                        </div>
                                    </div>
                                ))}

                                <div className="col-start-1 col-end-3">
                                    <button onClick={handleNext1} className="mx-11 p-1 my-1 border-rose-600 border-2 w-3/4 h-7/8 rounded-lg font-bold text-black bg-white hover:text-white hover:bg-rose-600">
                                        Next
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    );
};

export default Myhome;
