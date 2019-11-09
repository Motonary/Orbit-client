import styled from "@emotion/styled";
import * as React from "react";
import { Formik } from "formik";

import InputField from "../../atoms/InputField";
import RawButton from "../../atoms/RawButton";

interface Props {
  selectedStar: any;
  createProject: any;
  resetSelectedStar: any;
  resetModalStatus: any;
}

interface CreateProjectValues {
  title: string;
  description: string;
}

class ProjectForm extends React.Component<Props, {}> {
  render() {
    return (
      <Root id="form-on-modal">
        <FormTitle>New Project</FormTitle>
        <Formik
          initialValues={{ title: "", description: "" }}
          validate={(values: CreateProjectValues) => {
            const errors: any = {};

            if (!values.title) {
              errors.title = "Password required to update profile";
            } else if (values.title.length < 6) {
              errors.title = "Password must contain at least 6 characters";
            }

            if (!values.description) {
              errors.description = "Description required";
            } else if (values.description.length > 200) {
              errors.description = "Too long description";
            }

            return errors;
          }}
          onSubmit={(values: CreateProjectValues, actions: any) => {
            const fixed_star_type: any = this.props.selectedStar;

            this.props.resetSelectedStar();
            this.props.resetModalStatus();
            this.props
              .createProject(values.title, values.description, fixed_star_type)
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
            <FormContainer onSubmit={handleSubmit}>
              <SecondRow>
                <InputField
                  type="title"
                  name="title"
                  placeholder="title"
                  value={values.title}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <WarningText>
                  {errors.title && touched.title && errors.title}
                </WarningText>
                <InputField
                  type="textarea"
                  name="description"
                  placeholder="description"
                  value={values.description}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <WarningText>
                  {errors.description &&
                    touched.description &&
                    errors.description}
                </WarningText>
              </SecondRow>
              <div>
                <SubmitBtn type="submit" disabled={isSubmitting}>
                  決定
                </SubmitBtn>
              </div>
            </FormContainer>
          )}
        </Formik>
      </Root>
    );
  }
}

const Root = styled.div`
  display: block;
  width: 100%;
  margin: 10px auto;
  padding: 7px 10px;
  color: #fff;
  font-size: 16px;
  box-sizing: border-box;
  opacity: 0.7;
  z-index: 500;
`;

const FormTitle = styled.div`
  width: 75%;
  margin: 5px auto;
  text-align: center;
  font-size: 14px;
`;

const FormContainer = styled.form`
  margin: 5px auto;
`;

const SecondRow = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 75%;
  height: 40px;
  margin: 10px auto;
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

export default ProjectForm;
