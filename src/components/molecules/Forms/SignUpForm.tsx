import styled from "@emotion/styled";
import * as React from "react";
import { Formik } from "formik";

import InputField from "../../atoms/InputField";
import RawButton from "../../atoms/RawButton";

interface SignUpFormProps {
  history: any;

  createUser: any;
}

interface CreateUserValues {
  username: string;
  email: string;
  password: string;
  confirmation: string;
}

class SignUpForm extends React.Component<SignUpFormProps, {}> {
  render() {
    return (
      <Root>
        <Formik
          initialValues={{
            username: "",
            email: "",
            password: "",
            confirmation: ""
          }}
          validate={(values: CreateUserValues) => {
            const errors: any = {};

            if (!values.username) {
              errors.username = "Username required";
            } else if (values.username && values.username.length > 50) {
              errors.username = "Too long username";
            }

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
              errors.password = "Password required";
            } else if (values.password.length < 6) {
              errors.password = "Password must contain at least 6 characters";
            }

            if (!values.confirmation) {
              errors.confirmation = "Password confirmation required";
            } else if (values.password !== values.confirmation) {
              errors.confirmation = "Not match password";
            }

            return errors;
          }}
          onSubmit={(values: CreateUserValues, actions: any) => {
            this.props
              .createUser(
                values.username,
                values.email,
                values.password,
                values.confirmation
              )
              .then(() => actions.setSubmitting(false))
              .catch(() => actions.setSubmitting(false));
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
                type="username"
                name="username"
                placeholder="USER NAME"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <WarningText>
                {errors.username && touched.username && errors.username}
              </WarningText>
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
              <InputField
                type="password"
                name="confirmation"
                placeholder="CONFIRM PASSWORD"
                value={values.confirmation}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <WarningText>
                {errors.confirmation &&
                  touched.confirmation &&
                  errors.confirmation}
              </WarningText>
              <SubmitBtn type="submit" disabled={isSubmitting}>
                SIGN UP
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

export default SignUpForm;
