import React from "react";
import { Input } from "@nextui-org/react";

function SearchInput({ onClick, onChange, ...props }) {
  return (
    <div className="my-10 flex gap-4 flex-col justify-center items-center text-center">
      <h1 className="text-2xl font-bold">Ingresa aquí tu departamento a conocer</h1>
      <div className="w-1/2 md:w-2/6 flex-wrap md:flex-nowrap gap-4">
        <Input {...props} onClick={onClick} onChange={onChange} type="text" label="Departamento" placeholder="Escribe tu departamento" />
      </div>
      {/* <input {...props} onClick={onClick} onChange={onChange} /> */}
    </div>
  );
}

export default SearchInput;
