import "./FormStyles.css";
import Modal from "./Modal";
import { useState } from "react";
export default function LoanForm() {

  const [errorMessage, seterrorMessage] = useState(null);
  const [showModel, setshowModel] = useState(false);
  const [LoanInputs, SetLoanInputs] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    isEmployee: false,
    salaryRange: "",
  });

  function handleFormSubmit(e) {
    e.preventDefault();
    seterrorMessage(null);
    let { Age, phoneNumber } = LoanInputs;
    if (Age < 18 || Age > 100) {
      seterrorMessage("The Age is Not Allowed");
    } else if (phoneNumber.length < 10 || phoneNumber.length > 12) {
      seterrorMessage("The PhoneNumber is Not Allowed");

    }

    setshowModel(true);
  }

  const btnisDisabled =
    (
      LoanInputs.name === "" ||
      LoanInputs.age === "" ||
      LoanInputs.phoneNumber === "" ||
      LoanInputs.salaryRange === "" ||
      LoanInputs.isEmployee === false
    );
  function handleDivClick() {
    if (showModel) {
      setshowModel(false);

    }
  }
  return (
    <div onClick={handleDivClick}
      className="flex" style={{ flexDirection: "column" }}>
      <form id="loan-form" className="flex" style={{ flexDirection: "column" }}>
        <h1>Requesting a Loan</h1>
        <hr />
        <label>Name:</label>
        <input value={LoanInputs.name} onChange={(event) => {
          SetLoanInputs({ ...LoanInputs, name: event.target.value });
        }} />

        <label>Phone Number:</label>
        <input value={LoanInputs.phoneNumber} onChange={(event) => {
          SetLoanInputs({ ...LoanInputs, phoneNumber: event.target.value });
        }} />

        <label>Age:</label>
        <input value={LoanInputs.age} onChange={(event) => {
          SetLoanInputs({ ...LoanInputs, age: event.target.value });
        }} />

        <label>Are you an Employee</label>
        <input className="check-box" value={true} type="checkbox" checked={LoanInputs.isEmployee} onChange={(event) => {
          SetLoanInputs({ ...LoanInputs, isEmployee: event.target.checked });
        }} />

        <label>Salary</label>
        <select value={LoanInputs.salaryRange} onChange={(event) => {
          SetLoanInputs({ ...LoanInputs, salaryRange: event.target.value });
        }}>
          <option value="">Choose your salary</option>
          <option value="<=500">Less than 500$</option>
          <option value="500-2000">Between 500$ and 2000$</option>
          <option value=">2000">Above 2000$</option>
        </select>

        <button
          disabled={btnisDisabled}
          id="submit-loan-btn"
          className={btnisDisabled ? "disabled" : ""}
          onClick={handleFormSubmit}
        >Submit</button>

      </form>
      <Modal errorMessage={errorMessage} isVisible={showModel} />
    </div>
  );
}