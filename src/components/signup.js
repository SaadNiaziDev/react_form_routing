import "./style.css";

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <div className="container my-3">
        <div className="layer">
          <div className="center">
            <form onSubmit={formik.handleSubmit}>
              <h3 className="header">SignUp</h3>
              {formik.touched.firstName && formik.errors.firstName ? (
                <div className="warning">Required</div>
              ) : null}
              <div className="container my-3">
              <label htmlFor="firstName" className="label">First Name</label>
              <input
                className="input"
                id="firstName"
                name="firstName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
              />
              </div>
              <div className="container my-3">
              {formik.touched.lastName && formik.errors.lastName ? (
                <div className="warning">Required</div>
              ) : (
                " "
              )}
              <label htmlFor="lastName" className="label">Last Name</label>
              <input
                className="input"
                id="lastName"
                name="lastName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
              />
              </div>
              <div className="container my-3">
                {formik.touched.email && formik.errors.email ? (
                  <div className="warning">Required</div>
                ) : (
                  " "
                )}
                <label htmlFor="email" className="label">Email Address</label>
                <input
                  className="input"
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
              </div>
              <br></br>
              <button className="button-proceed" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
