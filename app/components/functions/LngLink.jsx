import Link from "next/link";
import React from "react";

const LngLink = ({ lng, href, children, ...rest }) => {
  return (
    <Link href={`/${lng}/${href}`} {...rest}>
      {children}
    </Link>
  );
};

export default LngLink;
