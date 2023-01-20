import React from "react";
import Image from "next/image";

function Img({ src, classes,priority }) {
  return (
    <div className={classes}>
      <Image
        src={src}
        alt="img"
        layout="fill"
        placeholder="blur"
        blurDataURL={src}
        objectFit="cover"
        loading="lazy"
      />
    </div>
  );
}

export default Img;
