import React from "react";
import Image from "next/image";

function Img({ src, classes }) {
  return (
    <div className={classes}>
      <Image
        src={src}
        alt="img"
        layout="fill"
        placeholder="blur"
        blurDataURL={src}
        priority
      />
    </div>
  );
}

export default Img;
