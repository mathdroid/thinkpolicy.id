import React from "react";
import { useSiteData } from "react-static";

export default () => {
  const { headline, subheadline, cta } = useSiteData();
  return (
    <div>
      <h1>{headline}</h1>
      <p>{subheadline}</p>
      <input placeholder="nama@contoh.com" />
      <button>{cta}</button>
    </div>
  );
};
