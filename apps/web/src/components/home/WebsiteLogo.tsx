import Image, { StaticImageData } from "next/image";
import React from "react";

const WebsiteLogo = ({ website, href }: { website: StaticImageData; href: string }) => {
  return (
    <div className="website-logo hover:cursor-pointer">
      <a href={href} target="_blank" rel="noopener noreferrer">
        <Image
          src={website}
          alt={website.toString()}
          layout="fill"
          objectFit="contain"
        />
      </a>
    </div>
  );
};

export default WebsiteLogo;
