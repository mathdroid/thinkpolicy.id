import React, { useState } from "react";
import { useSiteData } from "react-static";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import fetch from "isomorphic-unfetch";

const signupSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email does not seem valid.")
    .required("We need your email address."),
  name: Yup.string()
    .min(2)
    .required(`We'd love to know your name.`),
  birthyear: Yup.number()
    .min(1989, "You need to be below 30")
    .max(2001, "You need to be above 18")
    .required(`We'd love to know your age`),
  organization: Yup.string().required(
    `What organization are you in? If not applicable, type 'Personal'`
  ),
  contact_me_by_fax_only: Yup.boolean()
});

const initialValues = {
  email: "",
  name: "",
  birthyear: "",
  organization: "",
  contact_me_by_fax_only: true
};

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export default () => {
  const { headline, subheadline, cta } = useSiteData();
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState("");
  const handleSubmit = values => {
    const encoded = encode({ "form-name": "signup", ...values });
    fetch(`/`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encoded
    })
      .then(() => {
        setSubmittedName(values.name);
        setHasSubmitted(true);
      })
      .catch(error => alert(error));

    // e.preventDefault();
  };

  return (
    <>
      <h1>{headline}</h1>
      <p>{subheadline}</p>
      {hasSubmitted ? (
        <h2>
          Thanks for submitting, {submittedName}! We will reach out to you.
        </h2>
      ) : (
        <Formik
          initialValues={initialValues}
          validationSchema={signupSchema}
          onSubmit={async (values, actions) => {
            // alert(JSON.stringify(values));
            await handleSubmit(values);
            actions.setSubmitting(false);
          }}
          render={formikProps => (
            <form
              name="signup"
              netlify-honeypot="contact_me_by_fax_only"
              data-netlify="true"
              onReset={formikProps.handleReset}
              onSubmit={formikProps.handleSubmit}
            >
              <Field
                name="contact_me_by_fax_only"
                render={({ field }) => (
                  <input
                    className="hidden"
                    type="checkbox"
                    name="contact_me_by_fax_only"
                    tabindex="-1"
                    autocomplete="off"
                    {...field}
                  />
                )}
              />
              <Field
                name="email"
                render={({ field }) => (
                  <label>
                    <h3 style={{ marginBottom: 0 }}>Email: </h3>
                    <input
                      type="text"
                      {...field}
                      placeholder="saya@perusahaan.com"
                    />
                  </label>
                )}
              />
              <ErrorMessage name="email" />

              <Field
                name="name"
                render={({ field }) => (
                  <label>
                    <h3 style={{ marginBottom: 0 }}>Nama: </h3>
                    <input type="text" {...field} placeholder="Odi" />
                  </label>
                )}
              />
              <ErrorMessage name="name" />

              <Field
                name="birthyear"
                render={({ field }) => (
                  <label>
                    <h3 style={{ marginBottom: 0 }}>Tahun Kelahiran: </h3>
                    <input type="text" {...field} placeholder="1990" />
                  </label>
                )}
              />
              <ErrorMessage name="birthyear" />

              <Field
                name="organization"
                render={({ field }) => (
                  <label>
                    <h3 style={{ marginBottom: 0 }}>Organisasi: </h3>
                    <input type="text" {...field} placeholder="Personal" />
                  </label>
                )}
              />
              <ErrorMessage name="organization" />
              <button type="submit" disabled={formikProps.isSubmitting}>
                {cta}
              </button>
            </form>
          )}
        />
      )}
      {/* <form
        name="signup"
        method="POST"
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
        <input type="hidden" name="form-name" value="signup" />

        <br />
        <button type="submit">{cta}</button>
      </form> */}
    </>
  );
};
