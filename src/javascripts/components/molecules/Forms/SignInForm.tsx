import styled from "@emotion/styled";
import * as React from "react";
import { connect } from "react-redux";
import { Formik } from "formik";

import InputField from "../../atoms/InputField";
import RawButton from "../../atoms/RawButton";

import { createSession } from "../../../actions/users";

interface SignInFormProps {
  history: any; // historyの型付け

  createSession: any;
}

interface CreateSessionValues {
  email: string;
  password: string;
}

class SignInForm extends React.Component<SignInFormProps, {}> {
  render() {
    return (
      <Root>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values: CreateSessionValues, actions: any) => {
            this.props
              .createSession(values.email, values.password)
              .then(() => actions.setSubmitting(false))
              .catch(() => actions.setSubmitting(false));
          }}
          validate={(values: CreateSessionValues) => {
            const errors: any = {};

            if (!values.email) {
              errors.email = "Email required";
            } else if (values.email && values.email.length > 255) {
              errors.email = "Too long email address";
            } else if (
              values.email &&
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }

            if (!values.password) {
              errors.password = "Password required to update profile";
            } else if (values.password.length < 6) {
              errors.password = "Password must contain at least 6 characters";
            }

            return errors;
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting
          }) => (
            <form onSubmit={handleSubmit}>
              <InputField
                type="email"
                name="email"
                placeholder="EMAIL ADRESS"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <WarningText>
                {errors.email && touched.email && errors.email}
              </WarningText>
              <InputField
                type="password"
                name="password"
                placeholder="PASSWORD"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <WarningText>
                {errors.password && touched.password && errors.password}
              </WarningText>
              <SubmitBtn type="submit" disabled={isSubmitting}>
                SIGN IN
              </SubmitBtn>
            </form>
          )}
        </Formik>
      </Root>
    );
  }
}

const Root = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: auto;
  width: 740px;
`;

const WarningText = styled.div`
  color: red;
`;

const SubmitBtn = styled(RawButton)`
  display: block;
  width: 200px;
  margin: 20px auto 0;
  padding: 1px 20px;
  background-color: #fff;
  border: 1px solid #fff;
  border-radius: 20px;
  color: $bg-common-color;

  font-size: 14px;
  line-height: 1.5;
  font-family: sans-serif;
  font-style: normal;
  font-weight: lighter;
  letter-spacing: 4px;

  cursor: pointer;
`;

export default connect(
  null,
  { createSession }
)(SignInForm);
