import styled from "@emotion/styled";
import * as React from "react";
import { connect } from "react-redux";
import { Formik } from "formik";

import InputField from "../../atoms/InputField";
import RawButton from "../../atoms/RawButton";

import { updateProfile } from "../../../actions/users";

interface Props {
  updateProfile: any;
  history: any;
}

interface UpdateProfileValues {
  username: any;
  email: any;
  password: any;
  confirmation: any;
}

class ProfileUpdateForm extends React.Component<Props, {}> {
  render() {
    return (
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          confirmation: ""
        }}
        validate={(values: UpdateProfileValues) => {
          const errors: any = {};

          if (values.username && values.username.length > 50) {
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
            errors.password = "Password required to update profile";
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
        onSubmit={(values: UpdateProfileValues, actions: any) => {
          // TODO: Flashメッセージの実装
          if (window.confirm("プロフィール情報を更新していいですか？")) {
            this.props
              .updateProfile(
                values.username,
                values.email,
                values.password,
                values.confirmation
              )
              .then(() => this.props.history.push("/"))
              .then(() => actions.setSubmitting(false))
              .catch(() => actions.setSubmitting(false));
          }
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
          <FormContainer onSubmit={handleSubmit}>
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
              UPDATE
            </SubmitBtn>
          </FormContainer>
        )}
      </Formik>
    );
  }
}

const FormContainer = styled.form`
  margin: 5px auto;
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
  { updateProfile }
)(ProfileUpdateForm);
