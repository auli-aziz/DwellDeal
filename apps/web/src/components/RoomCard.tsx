import React from "react";
import { handleHostname } from "@web/lib/utils/functions";
import Image from "next/image";

const RoomCard = ({
  id,
  image,
  title,
  url,
  location,
  handleClickRoom,
}: {
  id: string;
  image: string;
  title: string;
  url: string;
  location: string;
  handleClickRoom: (id: string) => void;
}) => {
  return (
    <div
      key={id}
      className="bg-neutral relative rounded-xl overflow-hidden hover:cursor-pointer max-w-80"
      onClick={() => handleClickRoom(id)}
    >
      <div className="relative h-44">
        <Image
          src={image}
          alt={image}
          fill
          sizes="150px"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="p-5">
        <h4 className="font-montserrat font-medium text-[18px] truncate">
          {title}
        </h4>
        <p className="font-averia text-xs">From {handleHostname(url)}</p>
        <p className="mt-3 font-shanti font-regular text-xs truncate">
          In {location}
        </p>
      </div>
    </div>
  );
};

export default RoomCard;
