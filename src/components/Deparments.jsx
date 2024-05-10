import React from "react";
import { useEffect, useState } from "react";
import DepartmentService from "../services/deparment-service";
import RegionService from "../services/region-service";

import Input from "./Input/SearchInput";
import DeparmentCard from "./Card/DeparmentCard";
import DepartmentModal from "./Modal/DeparmentModal";

import { useDisclosure } from "@nextui-org/react";

export default function Deparments() {
  const [backdrop, setBackdrop] = React.useState("blur");

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [departments, setDeparments] = useState([]);

  const [departmentsFiltered, setDeparmentsFiltered] = useState([]);

  const [locationSelected, setLocationSelected] = useState(null);

  useEffect(() => {
    const fetchDepartments = async () => {
      const result = await DepartmentService.getDepartments();
      setDeparments(result);
    };

    fetchDepartments();
  }, []);

  const handleDeparment = async (depart) => {
    const { id } = depart;

    const naturalArea = await DepartmentService.getNaturalAreaByDepartmentId(
      id
    );

    const cities = await DepartmentService.getCitiesByDepartmentId(id);

    const touristic = await DepartmentService.getTouristicAttractionsDepartment(
      id
    );

    const region = await RegionService.getRegionId(depart.regionId);

    setLocationSelected({ ...depart, touristic, naturalArea, cities, region });

    setBackdrop("blur");
    onOpen();
  };

  const onSearchKeywords = async (e) => {
    e.preventDefault();

    const { value } = e.target;

    if (value?.trim() === "") return;

    const result = await DepartmentService.getDepartmentsByName(value);

    setDeparmentsFiltered(result);
  };

  const getDepartmentList = () => {
    return departmentsFiltered.length > 0 ? departmentsFiltered : departments;
  };

  return (
    <div>
      <Input onChange={(e) => onSearchKeywords(e)} />
      <div className="flex gap-8 flex-wrap justify-center container mx-auto">
        {getDepartmentList().map((department) => (
          <DeparmentCard
            key={department.id}
            department={department}
            handleDeparment={handleDeparment}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
          />
        ))}
        {locationSelected && (
          <DepartmentModal
            deparment={locationSelected}
            isOpen={isOpen}
            onClose={onClose}
          />
        )}
      </div>
    </div>
  );
}
