import * as React from "react";

interface Props {
  className?: string;
  src: string;
  alt: string;
  height?: string;
  width?: string;
}

const Image: React.FC<Props> = ({ className, src, alt, height, width }) => (
  <img
    className={className}
    src={src}
    alt={alt}
    height={height}
    width={width}
  />
);

export default Image;
