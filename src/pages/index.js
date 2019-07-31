import React from "react";
import { useSiteData } from "react-static";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

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
  )
});

const initialValues = {
  email: "",
  name: "",
  birthyear: "",
  organization: ""
};

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const handleSubmit = () => {
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode({ "form-name": "signup", ...this.state })
  })
    .then(() => alert("Success!"))
    .catch(error => alert(error));

  // e.preventDefault();
};

export default () => {
  const { headline, subheadline, cta } = useSiteData();
  return (
    <>
      <h1>{headline}</h1>
      <p>{subheadline}</p>
      <Formik
        initialValues={initialValues}
        validationSchema={signupSchema}
        onSubmit={async (_, actions) => {
          await handleSubmit();
          actions.setSubmitting(false);
        }}
      >
        <Form>
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
          <button type="submit">{cta}</button>
        </Form>
      </Formik>
      {/* <form
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
        <input type="hidden" name="form-name" value="signup" />

        <br />
        <button type="submit">{cta}</button>
      </form> */}
    </>
  );
};
