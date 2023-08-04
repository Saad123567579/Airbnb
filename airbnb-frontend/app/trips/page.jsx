'use client'
import React,{useState,useEffect} from 'react'

const page = () => {
    useEffect(() => {
        const fetchListing = async() => {
            let url="/api/trips/";
            const response = await fetch(url);
            const data = await response.json();
            console.log("the data is",data);
        }
        fetchListing();

      
    }, [])
    
  return (
    <div>
      my trips page
    </div>
  )
}

export default page
