import React, { useState } from "react";
import { useSiteData } from "react-static";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import fetch from "isomorphic-unfetch";

import MultiSelect from "../components/MultiSelect";

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

const ErrorComponent = props => <span {...props} style={{ color: "#e55" }} />;

export default () => {
  const { headlineRute, subheadlineRute, cta } = useSiteData();
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSubmit = values => {
    const body = {
      "form-name": "rute",
      ...values
    };
    const encoded = encode(body);
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
  };

  return (
    <>
      <img src="/logo.jpg" className="logo" alt="Think Policy logo" />

      <h1>{headlineRute}</h1>
      <p>{subheadlineRute}</p>

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
            if (selectedItems.length > 0) {
              await handleSubmit({
                ...values,
                interests: selectedItems.join(",")
              });
            }
            alert("Please fill out your interests");

            actions.setSubmitting(false);
          }}
          render={formikProps => (
            <form
              name="rute"
              // netlify-honeypot="contact_me_by_fax_only"
              data-netlify="true"
              onReset={formikProps.handleReset}
              onSubmit={formikProps.handleSubmit}
            >
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
              />{" "}
              <br />
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
              />{" "}
              <br />
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
              />{" "}
              <br />
              <ErrorMessage
                name="organization"
                component={ErrorComponent}
              />{" "}
              <input
                className="hidden"
                name="interests"
                tabIndex="-1"
                autoComplete="off"
              />
              <MultiSelect
                selectedItems={selectedItems}
                setSelectedItems={setSelectedItems}
              />{" "}
              <br />
              <button
                type="submit"
                disabled={
                  formikProps.isSubmitting && selectedItems.length === 0
                }
              >
                {cta}
              </button>
            </form>
          )}
        />
      )}
    </>
  );
};
