import * as React from "react";

const SubmitBtn = ({ label, isSubmit }: any) => (
  <button type="submit" className="submit-btn" disabled={isSubmit}>
    {label}
  </button>
);

export default SubmitBtn;
