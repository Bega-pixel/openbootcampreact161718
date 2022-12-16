import "./Login.css";
import React from "react";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";

const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid format").required("Email is requireed"),
  password: Yup.string().required("Password is required"),
});

const Login = ({ onSubmit }) => {
  const formInfo = {
    email: "",
    password: "",
  };

  return (
    <div className="container login-container">
      <h2 className="login-tittle">Sign Up!</h2>
      <Formik
        initialValues={formInfo}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
        // yup validation schema
        validationSchema={loginSchema}
      >
        {({
          errors,
          touched,
          values,
          Submitting,
          handleChange,
          handleBlur,
          isSubmitting,
        }) => (
          <Form className="container">
            <div class="mb-3 ">
              <label htmlFor="email" className="form-label">
                Email
              </label>

              <Field
                className='form-control'
                id="email"
                name="email"
                placeholder="example@email.com"
                type="email"
              />

              {errors.email && touched.email && (
                <div className="form-text">{errors.email}</div>
              )}
            </div>

            <div class="mb-3 ">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <Field
                className='form-control'
                id="password"
                name="password"
                placeholder="password"
                type="password"
              />

              {errors.password && touched.password}
              <ErrorMessage name="password" className="form-text" />
            </div>

            <button type="submit" className="btn btn-info button-login">
              Submit
            </button>
            {isSubmitting ? <p>Login user</p> : null}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
