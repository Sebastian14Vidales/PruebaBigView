import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Image,
} from "@nextui-org/react";

import CardImage from "../../assets/CardImage.jpg";

export default function DeparmentCard({ department, handleDeparment }) {

  const { name, description } = department;

  const limitedContent =
    description.length > 190 ? `${description.slice(0, 190)}...` : description;

  return (
    <Card
      isFooterBlurred
      className="w-[300px] h-[300px] col-span-12 sm:col-span-5"
    >
      <CardHeader className="relative p-0 rounded-none">
        <Image
          alt="CardImage"
          className="relative rounded-none w-[300px] h-[140px]"
          src={CardImage}
        />
        <h2
          className="absolute top-10 left-11 z-10 text-black font-medium text-xl"
          style={{ fontFamily: "Chakra Petch, sans-serif" }}
        >
          {name}
        </h2>
      </CardHeader>
      <CardBody>
        <h4 className="font-bold text-sm">Descripión</h4>
        <p className="text-gray-500 text-xs">{limitedContent}</p>
      </CardBody>
      <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
        <Button
          onClick={() => handleDeparment(department)}
          color="primary"
          radius="full"
          size="sm"
        >
          Ver más
        </Button>
      </CardFooter>
    </Card>
  );
}
