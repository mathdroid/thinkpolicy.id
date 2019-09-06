import React, { useState } from "react";
import { useSiteData } from "react-static";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import fetch from "isomorphic-unfetch";
import { Link } from "@reach/router";

const signupSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email does not seem valid.")
    .required("We need your email address."),
  name: Yup.string()
    .min(2)
    .required(`We'd love to know your name.`),
  birthyear: Yup.number()
    .min(1900, "Not *that* old 🤔")
    .max(2019, "🤔")
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
  contact_me_by_fax_only: false
};

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const ErrorComponent = props => <span {...props} style={{ color: "#e55" }} />;

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
      <img src="/logo.jpg" className="logo" alt="Think Policy logo" />

      <h1>{headline}</h1>
      <p>{subheadline}</p>

      <Link to="/rute">{">> "}Daftar Ruang Tengah</Link>

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
              // netlify-honeypot="contact_me_by_fax_only"
              data-netlify="true"
              onReset={formikProps.handleReset}
              onSubmit={formikProps.handleSubmit}
            >
              {/* <Field
                name="contact_me_by_fax_only"
                render={({ field }) => (
                  <input
                    className="hidden"
                    type="checkbox"
                    name="contact_me_by_fax_only"
                    tabIndex="-1"
                    autoComplete="off"
                    {...field}
                  />
                )}
              /> */}
              <Field
                name="email"
                render={({ field, form: { touched, errors } }) => (
                  <label>
                    <h3 style={{ marginBottom: 0 }}>Email: </h3>
                    <input
                      className={
                        touched[field.name] && errors[field.name] && "error"
                      }
                      type="text"
                      {...field}
                      placeholder="saya@perusahaan.com"
                    />
                  </label>
                )}
              />
              <ErrorMessage name="email" component={ErrorComponent} />

              <Field
                name="name"
                render={({ field, form: { touched, errors } }) => (
                  <label>
                    <h3 style={{ marginBottom: 0 }}>Nama: </h3>
                    <input
                      className={
                        touched[field.name] && errors[field.name] && "error"
                      }
                      type="text"
                      {...field}
                      placeholder="Odi"
                    />
                  </label>
                )}
              />
              <ErrorMessage name="name" component={ErrorComponent} />

              <Field
                name="birthyear"
                render={({ field, form: { touched, errors } }) => (
                  <label>
                    <h3 style={{ marginBottom: 0 }}>Tahun Kelahiran: </h3>
                    <input
                      className={
                        touched[field.name] && errors[field.name] && "error"
                      }
                      type="text"
                      {...field}
                      placeholder="1990"
                    />
                  </label>
                )}
              />
              <ErrorMessage name="birthyear" component={ErrorComponent} />

              <Field
                name="organization"
                render={({ field, form: { touched, errors } }) => (
                  <label>
                    <h3 style={{ marginBottom: 0 }}>Organisasi: </h3>
                    <input
                      className={
                        touched[field.name] && errors[field.name] && "error"
                      }
                      type="text"
                      {...field}
                      placeholder="Badan Kebijakan Publik"
                    />
                  </label>
                )}
              />
              <ErrorMessage name="organization" component={ErrorComponent} />
              <br />

              <button type="submit" disabled={formikProps.isSubmitting}>
                {cta}
              </button>
            </form>
          )}
        />
      )}
    </>
  );
};
