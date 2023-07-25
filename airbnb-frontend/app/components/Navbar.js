"use client"

import { Fragment, useRef, useState } from 'react'
import Image from 'next/image'
import { FcSearch } from 'react-icons/fc';
import { Dialog, Transition } from '@headlessui/react'
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
    const cancelButtonRef = useRef(null)

    const [isOpen, setIsOpen] = useState(false);
    const [open, setOpen] = useState(false)

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };


    return (
        <>
            <nav className="bg-white-300 border border-b-2 ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        <div>
                            <img src="https://github.com/AntonioErdeljac/next13-airbnb-clone/blob/master/public/images/logo.png?raw=true" alt="no image" width={100} height={100} />
                        </div>
                        <div className="flex justify-center items-center text-center  h-12">
                            <div className="ml-10 flex justify-center  items-center space-x-4 cursor-pointer border rounded-full hover:shadow-md text-center h-12 w-full">
                                <a href="#" className=" px-3 py-2 rounded-md text-sm font-medium">Anywhere</a>
                                <a href="#" className=" px-3 py-2 rounded-md text-sm font-medium">|</a>
                                <a href="#" className=" px-3 py-2 rounded-md text-sm font-medium">Any Week</a>
                                <a href="#" className=" px-3 py-2 rounded-md text-sm font-medium">|</a>
                                <a href="#" className=" px-3 py-2 rounded-md text-sm font-medium">Add Guests </a>
                                <a href="#" className=" px-3 py-2 rounded-md text-sm font-medium">|</a>
                                <a className='px-2 py-2'> <span><FcSearch /></span></a>
                            </div>
                        </div>
                        <div className="flex items-center border  ">
                            <div className="relative ">
                                <button
                                    onClick={toggleDropdown}
                                    className="bg-white text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center hover:shadow-md "
                                >
                                    <img src="https://github.com/AntonioErdeljac/next13-airbnb-clone/blob/master/public/images/placeholder.jpg?raw=true" className='rounded-full' width={50} height={50}></img>

                                </button>
                                {isOpen && (
                                    <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg">
                                        <a onClick={() => setOpen(true)}
                                            href="#"
                                            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                                        >
                                            Signup
                                        </a>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                                        >
                                            Login
                                        </a>

                                    </div>
                                )}
                            </div>
                        </div>

                    </div>
                </div>
            </nav>
            {/* Modal Starts Here */}
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                        <div className="sm:flex sm:items-start">
                                            <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                                <p className="h-6 w-6 text-red-600 cursor-pointer" aria-hidden="true" onClick={() => setOpen(false)}>X</p>
                                            </div>
                                            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                                <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                                    Welcome To Airbnb
                                                </Dialog.Title>
                                                <p className="mt-2 text-sm text-gray-500">Create an account</p>
                                                <form className="mt-4">
                                                    <div className="mb-4">
                                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                                            Email
                                                        </label>
                                                        <input
                                                            id="email"
                                                            type="email"
                                                            className="mt-1 px-4 py-2 block w-full border rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-red-500 focus:border-red-500 sm:text-sm"
                                                            placeholder="anything@example.com"

                                                        />
                                                    </div>
                                                    <div className="mb-4">
                                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                                            Name
                                                        </label>
                                                        <input
                                                            id="name"
                                                            type="text"
                                                            className="mt-1 px-4 py-2 block w-full border rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-red-500 focus:border-red-500 sm:text-sm"
                                                            placeholder="Your Name"

                                                        />
                                                    </div>
                                                    <div className="mb-4">
                                                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                                            Password
                                                        </label>
                                                        <input
                                                            id="password"
                                                            type="password"
                                                            className="mt-1 px-4 py-2 block w-full border rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-red-500 focus:border-red-500 sm:text-sm"
                                                            placeholder="********"

                                                        />
                                                    </div>
                                                    <button
                                                        type="button"
                                                        className="mt-3  inline-flex w-full justify-center rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-50 w-full"

                                                    >
                                                        Continue
                                                    </button>
                                                    <button
                                                        type="button"
                                                        className="mt-3  inline-flex w-full justify-center rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-50 w-full"

                                                    >
                                                        Continue With Google
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">

                                        <button
                                            type="button"
                                            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"


                                        >
                                            Already have an account? Login
                                        </button>

                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>





        </>

    )
}

export default Navbar


