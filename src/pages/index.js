import React from "react";
import { useSiteData } from "react-static";

export default () => {
  const { headline, subheadline, cta } = useSiteData();
  return (
    <div>
      <h1>{headline}</h1>
      <p>{subheadline}</p>
      <form
        name="signup"
        method="POST"
        netlify-honeypot="contact_me_by_fax_only"
        data-netlify="true"
      >
        <input
          className="hidden"
          type="checkbox"
          name="contact_me_by_fax_only"
          value="1"
          tabindex="-1"
          autocomplete="off"
        />
        <label>
          Email: <input type="text" name="email" />
        </label>
        <br />
        <label>
          Nama: <input type="text" name="name" />
        </label>
        <br />
        <label>
          Tahun Kelahiran: <input type="text" name="birthyear" />
        </label>
        <br />
        <label>
          Organisasi: <input type="text" name="organization" />
        </label>
        <br />
        <button type="submit">{cta}</button>
      </form>
    </div>
  );
};
