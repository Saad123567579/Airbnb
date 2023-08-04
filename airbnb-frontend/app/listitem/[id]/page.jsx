'use client'
import React, {useRef,useState, useEffect } from "react";
import { parseISO, format, addDays, differenceInDays } from 'date-fns';
import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";

const MyPage = (params) => {
    const ref = useRef();
    let id = params.params.id;
    const [item, Setitem] = useState(null);
    const [owner, Setowner] = useState(null);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [days,Setdays] = useState(0);
    const [subtotal,Setprice] = useState(0);
    const [status,Setstatus] = useState("idle");
    const handleDateChange = (event) => {
        const { name, value } = event.target;
        if (name === 'startDate') {
          setStartDate(value);
          console.log(value);
        } else if (name === 'endDate') {
          setEndDate(value);
          console.log(value);
        }
       

      };

       // Function to calculate the number of reserved nights
    const calculateReservedNights = () => {
        if (startDate && endDate) {
            const startDateObj = new Date(startDate);
            const endDateObj = new Date(endDate);

            // Check if the selected end date is not before the selected start date
            if (endDateObj >= startDateObj) {
                return differenceInDays(endDateObj, startDateObj);
            }
        }
        return 0;
    };
      useEffect(() => {
        // Recalculate reserved nights whenever startDate or endDate changes
        let x = calculateReservedNights();
       
        Setdays(x);
        Setprice(ref?.current?.id?(ref.current.id*x):(0))

    }, [startDate, endDate]);


    useEffect(() => {
        const fetchListItem = async () => {
            let url = `/api/listitem/${id}`;
            const response = await fetch(url);
            const data = await response.json();
            Setitem(data);

            let ownerURL = `/api/getowner/${data.userId}`;
            const ownerResponse = await fetch(ownerURL);
            const ownerData = await ownerResponse.json();
            Setowner(ownerData);
            console.log("publisher ", ownerData);
        };
        fetchListItem();
    }, []);

    const handleReserve = async () => {
        if(days<=0) {toast.error("Please select the dates correctly ");return;}
        const url = "/api/reserve/";
        let data = {startDate,endDate,totalPrice:subtotal,listingId:document.getElementById('list').getAttribute('name')}
        console.log(data);
        Setstatus("loading");
        const response = await fetch(url,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Add any other headers you need here
            },
            body: JSON.stringify(data),
        })
        const d = await response.json();
        Setstatus("idle");
        if(d=="no user found") toast.error("Please sign up before reservation");
        if(d=="Internal Server Error") toast.error("Internal Server Error. Please Try Again");
        if(d=="done") {toast.success("Listing Successfully Created")};



    }
    

    


    return (
        <>
            {!item && !owner && <div>Loading...</div>}
            {item && owner && (<>
                <div className="flex  justify-center w-7/8 ml-32 ">
                    <div className="flex flex-col m-2">
                        <h1 className="text-lg">{item.title}</h1>
                        <p className="underline">{item.locationValue}</p>
                        <img alt="img" className="rounded-lg h-2/4" src={item.imageSrc} />
                        <div className="flex mt-5 pb-5 border-b-2 align-middle">
                            <div>
                                <h1 className="font-bold" id="list" name={item.id}>{owner.name}</h1>
                                <h1>{item.guestCount} guests . {item.roomCount} bedrooms . {item.bathroomCount} bathrooms</h1>
                            </div>
                            <div className="ml-auto pt-3">
                                <img alt="img" className="rounded-full b-2 justify-self-end" src={owner.image} />
                            </div>

                        </div>
                        <div className="">{item.description}</div>

                    </div>
                </div>

                <div className="border-2 0 m-auto flex flex-col justify-start items-start mt-5 mb-5 ml-32 h-96 w-7/8 rounded-xl  ">
                    <h1 className="ml-5 mt-5  text-xl font-b self-center">Reserve Here</h1>
                    <h2 className="ml-5 mt-5 font-semibold text-lg self-center" ref={ref} id={item.price} >${item.price} A Night</h2>
                    <h2 className="ml-5 mt-5 font-semibold text-lg self-center">${subtotal} Total</h2>

                    <div className="mt-5 ml-5 self-center border-2 p-1">
                        <label for="Check-In" className="ml-2">Check-In</label>
                        <input onChange={handleDateChange}  name='startDate' min={format(new Date(), 'yyyy-MM-dd')} type="date" id="Check-In" />
                    </div>
                    <div className="mt-5 ml-5 self-center border-2 p-1">
                        <label for="Check-Out">Check-Out</label>
                        <input onChange={handleDateChange} name="endDate"  type="date" id="Check-Out" />
                    </div>
                    <div className="mt-5 ml-5 self-center">
                        <button className={`text-rose-600 border-2 p-2  border-rose-600 hover:text-white hover:bg-rose-600 ${status==="idle"?("cursor-pointer"):("cursor-wait")} `} onClick={handleReserve}>Reserve Now</button>
                    </div>
                </div>
            </>


            )}
        </>
    );
};

export default MyPage;







{/* <div className="container mx-auto py-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="relative h-96">
                            <img
                                alt="Listing Image"
                                src={item.imageSrc}
                                layout="fill"
                                objectFit="cover"
                                className="m-1 cursor-pointer hover:brightness-110 rounded-lg w-full h-full"
                            />
                        </div>
                        <div className="space-y-4">
                            <h1 className="text-3xl font-semibold">{item.title}</h1>
                            <p className="text-gray-500">{item.locationValue}</p>
                            <p className="text-gray-500">{item.category}</p>
                            <p className="text-gray-500">${item.price} per night</p>
                            <p className="text-gray-500">
                                {item.roomCount} rooms · {item.bathroomCount} bathrooms · {item.guestCount} guests allowed
                            </p>
                            <p className="text-gray-800">{item.description}</p>
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 rounded-full overflow-hidden">
                                    <img
                                        alt="Owner's Image"
                                        src={owner.image} // Replace with the owner's image URL
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                                <p className="font-semibold">{owner.name}</p>
                            </div>
                            <div className="flex space-x-4">
                                <button className="px-4 py-2 text-white bg-rose-600 hover:bg-rose-700 rounded-md">
                                    Reserve Now
                                </button>
                            </div>
                        </div>
                        <div>
                            <h1>Checkin Date</h1>
                            <input type="date" />
                        </div>
                    </div>
                </div> */}