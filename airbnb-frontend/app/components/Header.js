import React from 'react';
import { FaSwimmingPool, FaWater } from 'react-icons/fa';
import { PiPark } from 'react-icons/pi';
import { BiSolidCastle } from 'react-icons/bi';
import { MdOutlineCabin, MdOutlineApartment } from 'react-icons/md';
import { GiFarmTractor, GiIsland } from 'react-icons/gi';
import { BsBuildings, BsHouseDoor } from 'react-icons/bs';

const Header = () => {
  const headers = [
    { name: "Rooms", icon: BsHouseDoor },
    { name: "Pools", icon: FaSwimmingPool },
    { name: "Lakefront", icon: FaWater },
    { name: "Park", icon: PiPark },
    { name: "Castles", icon: BiSolidCastle },
    { name: "Cabins", icon: MdOutlineCabin },
    { name: "Farms", icon: GiFarmTractor },
    { name: "Islands", icon: GiIsland },
    { name: "Condominium", icon: BsBuildings },
    { name: "Apartment", icon: MdOutlineApartment },
  ];

  return (
    <div className="h-16 flex gap-2 flex-row g-1 justify-between">
      {headers.map((head) => (
        <div key={head.name} className="w-full h-full cursor-pointer hover:border-b-4 box-content">
          <div className="w-full h-full flex flex-col justify-center items-center p-0 m-0">
            <span>{React.createElement(head.icon)}</span>
            <div><p>{head.name}</p></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Header;
