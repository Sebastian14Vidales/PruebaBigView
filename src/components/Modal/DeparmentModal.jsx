import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";

export default function DeparmentModal({ deparment, isOpen, onClose }) {
  const { name, description, region, municipalities, touristic, naturalArea } =
    deparment;

  return (
    <>
      <Modal backdrop="blur" isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{name}</ModalHeader>
              <ModalBody>
                <p>{description}</p>
                <p className="font-bold">
                  Region: <span className="font-normal">{region.name}</span>
                </p>
                <p className="font-bold">
                  N° Municipios:{" "}
                  <span className="font-normal">{municipalities}</span>
                </p>
                <p className="font-bold">
                  Sitios Turisticos:
                </p>
                <ul>
                    {touristic?.map((item) => (
                      <li key={item.name} className="font-normal">
                        <label>
                          {item.name} - ({item.city.name})
                        </label>
                      </li>
                    ))}
                  </ul>
                <p className="font-bold">
                  N° Areas Naturales :{" "}
                  {naturalArea?.map((item) => (
                    <p key={item.name} className="font-normal">{item?.naturalAreas.length}</p>
                  ))}
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cerrar
                </Button>
                
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
