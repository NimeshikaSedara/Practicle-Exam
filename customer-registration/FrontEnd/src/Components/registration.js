import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./registration.css";
import axios from "axios";

function Registration() {
  const [companyName, setCompanyName] = useState("");
  const [address1, setAddress1] = useState("");
  const [address3, setAddress3] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [hotline, setHotline] = useState("");
  const [smsno, setSMSNo] = useState("");
  const [email, setemail] = useState("");
  const [logo, setCompanyLogo] = useState("");
  const [businesstype, setBusinesstype] = useState("");
  const [errors, setErrors] = useState("");

  const [values, setValues] = useState({
    companyName: "",
    address1: "",
    address2: "",
    address3: "",
    city: "",
    district: "",
    hotline: "",
    smsno: "",
    email: "",
    facebook: "",
    twitter: "",
    linkedin: "",
    logo: "",
    businesstype: "",
  });

  const handleClearForm = (event) => {
    // Clear all form fields
    setValues({
      companyName: "",
      address1: "",
      address2: "",
      address3: "",
      city: "",
      district: "",
      hotline: "",
      smsno: "",
      email: "",
      facebook: "",
      twitter: "",
      linkedin: "",
      logo: "",
      businesstype: "",
    });
  };

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: [event.target.value] });
  };

  const handleSave = () => {
    const errors = {};

    if (!values.companyName) {
      errors.companyName = "Company Name is Required!";
    }
    if (!values.address1) {
      errors.address1 = "Address 1 is Required!";
    }
    if (!values.address3) {
      errors.address1 = "Address 2 is Required";
    }
    if (!values.city) {
      errors.city = "City is Required!";
    }
    if (!values.district) {
      errors.district = "District is Required!";
    }
    if (!values.hotline) {
      errors.hotline = "Hotline is Required!";
    }
    if (!values.smsno) {
      errors.smsno = "SMS Number is Required!";
    }
    if (!values.email) {
      errors.email = "Email is Required!";
    }
    if (!values.logo) {
      errors.email = "Company logo i is Required!";
    }
    if (!values.businesstype) {
      errors.businesstype = "Business Type is Required!";
    }

    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:8081/customers", { values })
      .then((res) => window.alert("Registered sucessfully!!"))
      .catch((errors) => console.log("An Error Occured!"));
  };

  return (
    <form onSubmit={handleSave}>
      <div className="wrapper d-lg-block   ">
        <div className="wrapper align-content-sm-center ">
          <h3>Easy Alert</h3>
        </div>
        <div className="wrapper align-content-sm-between   ">
          <h7>Registration</h7>
        </div>

        <div className="form-group was-validated ">
          <label
            htmlFor="companyName"
            style={{
              marginLeft: "20px",
              textAlign: "left",
              width: "150px",
            }}
          >
            Company Name{" "}
          </label>
          <input
            type="text"
            name="companyname"
            style={{ marginLeft: "20px", width: "400px", marginTop: "15px" }}
            onClick={(e) => setCompanyName(e.target.value)}
            onChange={handleChange}
          ></input>
          <label className="form-control-sm" required style={{ color: "red" }}>
            {" "}
            *Required
          </label>
          <label className="invalid-feedback">Please Enter company Name</label>
        </div>

        <div className="form-group was-validated ">
          <label
            htmlFor="address1"
            style={{
              marginLeft: "20px",
              textAlign: "left",
              width: "150px",
            }}
          >
            Address 1{" "}
          </label>
          <input
            type="text"
            name="address1"
            style={{ marginLeft: "20px", width: "400px", marginTop: "15px" }}
            onClick={(e) => setAddress1(e.target.value)}
            onChange={handleChange}
          ></input>
          <label className="form-control-sm" required style={{ color: "red" }}>
            {" "}
            *Required
          </label>
        </div>

        <div className="form-group was-validated ">
          <label
            htmlFor="address2"
            style={{
              marginLeft: "20px",
              textAlign: "left",
              width: "150px",
            }}
          >
            Address 2{" "}
          </label>
          <input
            type="text"
            name="address2"
            style={{
              marginLeft: "20px",
              width: "400px",
              marginTop: "15px",
              textAlign: "left",
            }}
            onChange={handleChange}
          ></input>
          <label className="form-control-sm" style={{ width: "80px" }}>
            {" "}
          </label>
        </div>

        <div className="form-group was-validated">
          <label
            htmlFor="address3"
            style={{
              marginLeft: "20px",
              textAlign: "left",
              width: "150px",
            }}
          >
            Address 3{" "}
          </label>
          <input
            type="text"
            name="address3"
            style={{ marginLeft: "20px", width: "400px", marginTop: "15px" }}
            onClick={(e) => setAddress3(e.target.value)}
            onChange={handleChange}
          ></input>
          <label className="form-control-sm" required style={{ color: "red" }}>
            {" "}
            *Required
          </label>
        </div>

        <div className="form-group was-validated mb-2">
          <label
            htmlFor="city"
            style={{
              marginLeft: "20px",
              textAlign: "left",
              width: "150px",
            }}
          >
            City{" "}
          </label>
          <input
            type="text"
            name="city"
            style={{ marginLeft: "20px", width: "400px", marginTop: "15px" }}
            onClick={(e) => setCity(e.target.value)}
            onChange={handleChange}
          ></input>
          <label className="form-control-sm" required style={{ color: "red" }}>
            {" "}
            *Required
          </label>
        </div>

        <div className="form-group was-validated mb-2">
          <label
            htmlFor="district"
            style={{
              marginLeft: "20px",
              textAlign: "left",
              width: "150px",
            }}
          >
            {" "}
            District
          </label>
          <select
            name="district"
            aria-label="Default select example"
            style={{ marginLeft: "20px", width: "400px", marginTop: "15px" }}
            onClick={(e) => setDistrict(e.target.value)}
            onChange={handleChange}
          >
            <option>Select </option>
            <option value="1">Colombo</option>
            <option value="2">Gampaha</option>
            <option value="3">Matara</option>
            <option value="4">Galle</option>
            <option value="5">Kandy</option>
          </select>
          <label className="form-control-sm" required style={{ color: "red" }}>
            {" "}
            *Required
          </label>
        </div>

        <div className="form-group was-validated mb-2">
          <label
            htmlFor="hotline"
            style={{
              marginLeft: "20px",
              textAlign: "left",
              width: "150px",
            }}
          >
            Hotline{" "}
          </label>
          <input
            type="text"
            name="hotline"
            style={{ marginLeft: "20px", width: "400px", marginTop: "15px" }}
            onClick={(e) => setHotline(e.target.value)}
            onChange={handleChange}
          ></input>
          <label className="form-control-sm" required style={{ color: "red" }}>
            {" "}
            *Required
          </label>
        </div>

        <div className="form-group was-validated mb-2">
          <label
            htmlFor="smsno"
            style={{
              marginLeft: "20px",
              textAlign: "left",
              width: "150px",
            }}
          >
            SMS Number{" "}
          </label>
          <input
            type="text"
            name="smsno"
            style={{ marginLeft: "20px", width: "400px", marginTop: "15px" }}
            onClick={(e) => setSMSNo(e.target.value)}
            onChange={handleChange}
          ></input>
          <label className="form-control-sm" required style={{ color: "red" }}>
            {" "}
            *Required
          </label>
        </div>

        <div className="form-group was-validated mb-2">
          <label
            htmlFor="email"
            style={{
              marginLeft: "20px",
              textAlign: "left",
              width: "150px",
            }}
          >
            Email{" "}
          </label>
          <input
            type="text"
            name="email"
            style={{ marginLeft: "20px", width: "400px", marginTop: "15px" }}
            onClick={(e) => setemail(e.target.value)}
            onChange={handleChange}
          ></input>
          <label className="form-control-sm" required style={{ color: "red" }}>
            {" "}
            *Required
          </label>
        </div>

        <div className="form-group">
          <label
            htmlFor="facebook"
            style={{
              marginLeft: "20px",
              textAlign: "left",
              width: "150px",
            }}
          >
            Facebook{" "}
          </label>
          <input
            type="text"
            name="facebook"
            className="form-control-sm"
            style={{ marginLeft: "20px", width: "400px", marginTop: "15px" }}
            onChange={handleChange}
          ></input>
          <label className="form-control-sm" style={{ width: "80px" }}>
            {" "}
          </label>
        </div>

        <div className="form-group was-validated">
          <label
            htmlFor="twitter"
            style={{
              marginLeft: "20px",
              textAlign: "left",
              width: "150px",
            }}
          >
            Twitter{" "}
          </label>
          <input
            type="text"
            name="twitter"
            className="form-control-sm"
            style={{ marginLeft: "20px", width: "400px", marginTop: "15px" }}
            onChange={handleChange}
          ></input>
          <label className="form-control-sm" style={{ width: "80px" }}>
            {" "}
          </label>
        </div>

        <div className="form-group">
          <label
            htmlFor="linkedin"
            style={{
              marginLeft: "20px",
              textAlign: "left",
              width: "150px",
            }}
          >
            LinkedIN{" "}
          </label>
          <input
            type="text"
            name="linkedin"
            className="form-control-sm"
            style={{ marginLeft: "20px", width: "400px", marginTop: "15px" }}
            onChange={handleChange}
          ></input>
          <label className="form-control-sm" style={{ width: "80px" }}>
            {" "}
          </label>
        </div>

        <div className="form-group was-validated mb-2">
          <label
            htmlFor="linkedin"
            style={{
              marginLeft: "20px",
              textAlign: "left",
              width: "150px",
            }}
          >
            Company Logo{" "}
          </label>
          <input
            type="file"
            name="logo"
            style={{ marginLeft: "20px", width: "400px", marginTop: "15px" }}
            onClick={(e) => setCompanyLogo(e.target.value)}
            onChange={handleChange}
          ></input>
          <label className="form-control-sm" required style={{ color: "red" }}>
            {" "}
            *Required
          </label>
        </div>

        <div className="form-group was-validated mb-2">
          <label
            htmlFor="businesstype"
            style={{
              marginLeft: "20px",
              textAlign: "left",
              width: "150px",
            }}
          >
            Business Type
          </label>
          <input
            type="text"
            name="businesstype"
            style={{ marginLeft: "20px", width: "400px", marginTop: "15px" }}
            onClick={(e) => setBusinesstype(e.target.value)}
            onChange={handleChange}
          ></input>
          <label className="form-control-sm" required style={{ color: "red" }}>
            {" "}
            *Required
          </label>
        </div>

        <button
          type="clear"
          className="btn1 btn-success w-10 mt-2 "
          onClick={handleClearForm}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="btn2 btn-success w-10 mt-2"
          onClick={handleSubmit}
        >
          Save
        </button>
      </div>
    </form>
  );
}

export default Registration;
