import React from "react";
import "./header.css";
import flag from '../../assets/flag.png'

export default function Header() {
  return (
    <div className="image_header">
      <div className="flex h-full justify-between items-center relative container mx-auto">
        <h1 className="p-6  text-white max-w-xl font-bold font-u text-xl sm:text-2xl lg:text-6xl" style={{ fontFamily: 'Chakra Petch, sans-serif' }}>
            Bienvenido a nuestro buscador geográfico más importante de  
            <span className="text-yellow-400"> Co</span> 
            <span className="text-blue-500">lom</span> 
            <span className="text-red-500">bia</span> 
            </h1>
        <img src={flag} className="flag"/>
      </div>
    </div>
  );
}
