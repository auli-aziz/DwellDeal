import Image, { StaticImageData } from "next/image";
import React from "react";

const WebsiteLogo = ({ website, href }: { website: StaticImageData; href: string }) => {
  return (
    <div className="website-logo">
      <a href={href} target="_blank" rel="noopener noreferrer" className="absolute lg:h-7 lg:w-7 h-5 w-5">
        <Image
          src={website}
          alt={website.toString()}
          fill
          style={{objectFit:"cover"}}
          sizes="150px"
        />
      </a>
    </div>
  );
};

export default WebsiteLogo;
