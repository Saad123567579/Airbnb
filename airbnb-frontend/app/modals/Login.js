import React from 'react'
import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { toast } from 'react-toastify';
import { signIn, signOut } from "next-auth/react";

const Login = (props) => {
    const {setlogOpen,logopen} = props;
    const handleLogin = async (e) => {
        e.preventDefault();
        let email = document.getElementById("e").value;
        let password = document.getElementById("p").value;
        if (email === "" || password === "") {
            toast.error("Fill The Form Correctly");
            return;
        }
        let data = { email, password };
        console.log(data);

        // Call the signIn function and handle the response
        const response = await signIn("credentials", {
            ...data,
            redirect: false,
        });
        console.log(response);

        if (response.error) {
            // Handle the custom error message here
            console.log("Login Error:", response.error);
            toast.error(response.error);
        } else {
            // Login success, do something
            console.log("Login successful");
            console.log(response); // Contains user data
            toast.success("Welcome Back");
            router.refresh();
            window.location.href = "/";
            // Redirect or handle the successful login
        }
    };

    return (
        <Transition.Root show={logopen} as={Fragment}>
            <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={setlogOpen}>
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
                                            <form className="mt-4" onSubmit={handleLogin}>
                                                <div className="mb-4">
                                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                                        Email
                                                    </label>
                                                    <input

                                                        id="e"
                                                        type="email"
                                                        className="mt-1 px-4 py-2 block w-full border rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-red-500 focus:border-red-500 sm:text-sm"
                                                        placeholder="anything@example.com"

                                                    />
                                                </div>

                                                <div className="mb-4">
                                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                                        Password
                                                    </label>
                                                    <input

                                                        id="p"
                                                        type="password"
                                                        className="mt-1 px-4 py-2 block w-full border rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-red-500 focus:border-red-500 sm:text-sm"
                                                        placeholder="********"

                                                    />
                                                </div>
                                                <input
                                                    type="submit"
                                                    className="mt-3 cursor-pointer  inline-flex w-full justify-center rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-50 w-full"



                                                />
                                                <button
                                                    onClick={() => { signIn('google') }}
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
    )
}

export default Login
