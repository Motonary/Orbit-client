import styled from "@emotion/styled";
import * as React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Formik } from "formik";

import InputField from "../../atoms/InputField";
import SelectField from "../../atoms/SelectField";
import RawButton from "../../atoms/RawButton";

import {
  setSelectedStar,
  resetSelectedStar,
  resetModalStatus
} from "../../../actions/common";
import { createSubAssignment } from "../../../actions/subassignmnets";

interface Props {
  assignmentId: string;

  selectedStar: any;
  currentProject: any;

  setSelectedStar: any;
  resetSelectedStar: any;
  resetModalStatus: any;
  createSubAssignment: any;
}

interface CreateSubAssignmentValues {
  title: string;
  description: string;
  deadline: string;
  planet_size: string;
}

class SubAssignmentForm extends React.Component<Props, {}> {
  render() {
    const satelite_type: any = this.props.selectedStar; // reducerでの型付けと対応
    const { assignmentId } = this.props;

    return (
      <Root id="form-on-modal">
        <div className="form-title">New SubAssignment</div>
        <Formik
          initialValues={{
            title: "",
            description: "",
            deadline: "",
            planet_size: ""
          }}
          onSubmit={(values: CreateSubAssignmentValues, actions: any) => {
            this.props.createSubAssignment(
              values.title,
              values.description,
              values.deadline,
              satelite_type,
              values.planet_size,
              assignmentId
            );
            this.props.resetSelectedStar();
            this.props.resetModalStatus();
            actions.setSubmitting(false);
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
              <FirstRow>
                <InputField
                  type="title"
                  name="title"
                  placeholder="title"
                  value={values.title}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.title && touched.title && errors.title}
                <InputField
                  type="date"
                  name="deadline"
                  placeholder="deadline"
                  value={values.deadline}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.deadline && touched.deadline && errors.deadline}
              </FirstRow>
              <SecondRow>
                <InputField
                  type="textarea"
                  name="description"
                  placeholder="description"
                  value={values.description}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </SecondRow>
              <ThirdRow>
                <SelectField
                  name={name}
                  value={values.planet_size}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <SubmitBtn type="submit" disabled={isSubmitting}>
                  決定
                </SubmitBtn>
              </ThirdRow>
            </form>
          )}
        </Formik>
      </Root>
    );
  }
}

const mapStateToProps = ({ selectedStar, currentProject }: any) => {
  return { selectedStar, currentProject };
};

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

  form {
    margin: 5px auto;
  }
`;

const FirstRow = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 75%;
  height: 40px;
  margin: 10px auto;
`;

const SecondRow = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 75%;
  height: 60px;
  margin: 10px auto;
`;

const ThirdRow = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 75%;
  height: 40px;
  margin: 10px auto;
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

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      setSelectedStar,
      resetSelectedStar,
      resetModalStatus,
      createSubAssignment
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubAssignmentForm);
