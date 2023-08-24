import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import React, { useState, useRef } from "react";
import {
  Lock,
  Mail,
  User,
  Calendar,
  CreditCard,
  Image,
  Phone,
} from "react-feather";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import { useRouter } from "next/router";
import SignatureCanvas from "react-signature-canvas";
import axios from "axios";

const SignUp = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const [signature, setSignature] = useState(null);

  const signatureRef = useRef();
  //const signatureImage = signatureRef.current.toDataURL();
  const handleClear = () => {
    if (signature) {
      signature.clear();
      setSignature(null);
    }
  };

  const handleSave = () => {
    if (signature) {
      const signatureImage = signature.toDataURL();
      console.log(signatureImage);
      // Do something with the captured signature image
    }
  };
  const handleSubmit = async (values, { setSubmitting }) => {
    // setIsSubmittingForm(true);
    try {
      const response = await axios.post(
        "http://localhost:5000/ownercustomers",
        {
          email: values.email,
          password: values.password,
          name: values.name,
          date_of_birth: values.date_of_birth,
          nid: values.nid,
          // gender: values.gender,
          role: values.role,
          mobile_number: values.number,
          runner: values.runner,
        }
      );
      console.log(response.data);
      const token = response.data.token;
      const role = response.data.role;

      localStorage.setItem("role", role);
      // dispatch(setRole(role));
      localStorage.setItem("token", token); // Save token to localStorage
      toast.success("Login successful");
      router.push("/dashboard");
    } catch (error) {
      toast.error("Please check your email and password..!");
    } finally {
    //   setIsSubmittingForm(false);
      setSubmitting(false);
    }
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedMemberOption, setSelectedMemberOption] = useState("");
  const [selectedGenderoption, setSelectedGenderoption] = useState("");
  const handleMemberOptionChange = (event) => {
    setSelectedMemberOption(event.target.value);
  };
  const handleGenderOptionChange = (event) => {
    setSelectedGenderoption(event.target.value);
  };
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const [mainArea, setMainArea] = useState("");
  const [subArea, setSubArea] = useState([]);

  const handleMainAreaChange = (event) => {
    const selectedValue = event.target.value;
    setMainArea(selectedValue);

    if (selectedValue === "Area1") {
      setSubArea(["Sub Area 1", "Sub Area 2", "Sub Area 3"]);
    } else if (selectedValue === "Area2") {
      setSubArea(["Sub Area 4", "Sub Area 5"]);
    } else {
      setSubArea([]);
    }
  };
  const [showpassword, setShowpassword] = useState(false);
  const router = useRouter();
  return (
    <div className="authentication-box">
      <Container fluid={true}>
        <Row className="log-in" style={{ marginTop: "150px" }}>
          <Col xxl="3" xl="4" lg="5" md="6" sm="8" className="form-login">
            <Card className="card">
              <CardBody className="card-body">
                <div className="title-3 text-start">
                  <h2>Sign up</h2>
                </div>
                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    password: "",
                    date_of_birth: "",
                    nid: "",
                    // gender: "",
                    role: "",
                    mobile: "",
                    runner: "",
                  }}
                  validationSchema={Yup.object().shape({
                    name: Yup.string().required("Name is Required..!"),
                    email: Yup.string()
                      .email("Invalid Email")
                      .required("Email is required"),
                    password: Yup.string().required("Password is required..!"),
                    date_of_birth: Yup.string().required("Date of Birth is required..!"),
                    nid: Yup.string().required("NID is required..!"),
                    profession: Yup.string().required(
                      "Profession is required..!"
                    ),
                    runner: Yup.string().required("Runner is required..!"),
                    gender: Yup.string().required("Gender is required...!"),
                  })}
                  onSubmit={handleSubmit}
                >
                  {({ values, setFieldValue, isSubmitting }) => (
                    <Form>
                      <div className="row">
                        <div className="col-md-4">
                          <div className="form-group"></div>
                          <label htmlFor="role" style={{ marginRight: "5px" }}>
                            {/* Select Role :{" "} */}
                          </label>
                          <Field
                          id="role"
                            as="select"
                            name="role"
                            className="form-control"
                          >
                            {/* <select
                        id="role"
                        value={selectedOption}
                        onChange={handleOptionChange}
                      > */}
                            <option value="" disabled hidden>
                              Select role
                            </option>
                            <option value="owner">Owner</option>
                            <option value="customer">Customer</option>
                            {/* </select> */}
                          </Field>
                          <ErrorMessage
                            name="role"
                            component="div"
                            className="text-danger"
                          />
                        </div>
                      </div>
                      {values.role === "owner" && (
                        <div>
                          <div className="form-group">
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <User size={20} />
                              </div>
                              <Field
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="input-group">
                              {/* /<div className="input-group-prepend"> */}
                                <label htmlFor="date_of_birth">
                                  Date of Birth
                                </label>
                                {/* <Calendar size={20} />
                              </div> */}
                              <Field
                               id="date_of_birth"
                                type="date"
                                name="date_of_birth"
                                className="form-control"
                              />
                              <ErrorMessage
                                name="date_of_birth"
                                component="div"
                                className="text-danger"
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <Mail size={20} />
                              </div>
                              <Field
                                type="email"
                                name="email"
                                className="form-control"
                              />
                              <ErrorMessage
                                name="email"
                                component="div"
                                className="text-danger"
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="input-group">
                              <div
                                className="input-group-prepend"
                                style={{ marginRight: "2px" }}
                              >
                                <CreditCard size={20} />
                              </div>
                              <Field
                                type="number"
                                name="nid"
                                placeholder="Enter NID Number"
                              />
                               <ErrorMessage
                                name="nid"
                                component="div"
                                className="text-danger"
                              />
                            </div>
                          </div>
                          {/* <div className="form-group">
                            <div className="input-group">
                              <div
                                className="input-group-prepend"
                                style={{ marginRight: "2px" }}
                              >
                                <Phone size={20} />
                              </div>
                              <Field
                                type="number"
                                name="mobile_number"
                                placeholder="Enter Mobile Number"
                              />
                               <ErrorMessage
                                name="nid"
                                component="div"
                                className="text-danger"
                              />
                            </div>
                          </div> */}
                          {/* <label
                            htmlFor="membertype"
                            style={{ marginRight: "5px" }}
                          >
                            Select Membership :{" "}
                          </label>
                          <Field
                            as="select"
                            name="membertype"
                            className="form-control"
                          >
                         
                            <option value="premium">Premium</option>
                            <option value="free">Free</option>
                          
                          </Field>
                          <ErrorMessage 
                            name="membertype" component="div" className="text-danger" /> */}
                          {/* <div className="form-group">
                            <div className="input-group">
                              <div
                                className="input-group-prepend"
                                style={{ marginRight: "2px" }}
                              >
                                <Image size={20} />
                              </div>
                              <input
                                type="file"
                                id="imageUpload"
                                accept="image/*"
                                onChange={handleImageChange}
                              />
                              {selectedImage && (
                                <img
                                  src={selectedImage}
                                  alt="Selected"
                                  style={{ width: "300px", height: "auto" }}
                                />
                              )}
                            </div>
                          </div> */}
                          {/* <div className="form-group">
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <User size={20} />
                              </div>
                              <Field
                                type="text"
                                name="profession"
                                placeholder="Enter your Profession"
                              />
                            </div>
                          </div> */}
                          <div className="form-group">
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <CreditCard
                                  size={20}
                                  style={{ marginRight: "5px" }}
                                />
                              </div>
                              <Field
                                type="text"
                                name="runner"
                                placeholder="Enter your Runner ID"
                              />
                            </div>
                          </div>
                          <label
                            htmlFor="gender"
                            
                            style={{ marginRight: "5px" }}
                          >
                            Select Gender :{" "}
                          </label>
                          <Field
                          id="gender"
                            as="select"
                            name="gender"
                            className="form-control"
                          >
                         
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                          
                          </Field>

                          {/* <div className="form-group">
                            <div className="input-group">
                              <div
                                className="input-group-prepend"
                                style={{ marginRight: "2px" }}
                              >
                                <h3>Signature Input</h3>
                                <SignatureCanvas
                                  penColor="black"
                                  canvasProps={{
                                    width: 500,
                                    height: 200,
                                    className: "signature-canvas",
                                  }}
                                  onEnd={() => setSignature(signature)}
                                />
                                <div>
                                  <button
                                    onClick={handleClear}
                                    style={{ marginRight: "2px" }}
                                  >
                                    Clear
                                  </button>
                                  <button onClick={handleSave}>Save</button>
                                </div>
                              </div>
                            </div>
                          </div> */}
                          {/* <label
                            htmlFor="main-list"
                            style={{ marginRight: "2px" }}
                          >
                            Main List :{" "}
                          </label>
                          <select
                            id="main-list"
                            value={mainArea}
                            onChange={handleMainAreaChange}
                          >
                            <option value="">Select an option</option>
                            <option value="Area1">Area 1</option>
                            <option value="Area2">Area 2</option>
                            <option value="Area3">Area 3</option>
                          </select>

                          <label
                            htmlFor="sub-list"
                            style={{ marginRight: "2px" }}
                          >
                            Sub List :{" "}
                          </label>
                          <select id="sub-list">
                            {subArea.map((option, index) => (
                              <option key={index} value={option}>
                                {option}
                              </option>
                            ))}
                          </select> */}
                          <div className="form-group">
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <Lock size={20} />
                              </div>
                              <Field
                                type={`${showpassword ? "text" : "password"}`}
                                name="password"
                                id="pwd-input"
                                placeholder="Password"
                              />
                              <div className="input-group-apend">
                                <i
                                  id="pwd-icon"
                                  className={`far fa-eye${
                                    !showpassword ? "-slash" : ""
                                  }`}
                                  onClick={() => {
                                    setShowpassword(!showpassword);
                                  }}
                                />
                              </div>
                            </div>

                            <div className="important-note">
                              password should be a minimum of 8 characters and
                              should contains letters and numbers
                            </div>
                          </div>
                        </div>
                      )}

                      {selectedOption === "customer" && (
                        <div>
                          <div className="form-group">
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <User size={20} />
                              </div>
                              <Field
                                type="text"
                                name="name"
                                className={`form-control ${
                                  errors.name && touched.name
                                    ? "is-invalid"
                                    : ""
                                }`}
                                placeholder="Enter your name"
                              />
                            </div>
                            {errors.name && touched.name && (
                              <div className="text-danger ms-4">
                                {errors.name}
                              </div>
                            )}
                          </div>
                          <div className="form-group">
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <Calendar size={20} />
                              </div>
                              <Field
                                type="date"
                                name="dob"
                                className={`form-control ${
                                  errors.dob && touched.dob ? "is-invalid" : ""
                                }`}
                                placeholder="Enter your Date of Birth"
                              />
                            </div>
                            {errors.dob && touched.dob && (
                              <div className="text-danger ms-4">
                                {errors.dob}
                              </div>
                            )}
                          </div>
                          <div className="form-group">
                            <div className="input-group">
                              <div
                                className="input-group-prepend"
                                style={{ marginRight: "2px" }}
                              >
                                <Phone size={20} />
                              </div>
                              <Field
                                type="number"
                                className={`form-control ${
                                  errors.mobile && touched.mobile
                                    ? "is-invalid"
                                    : ""
                                }`}
                                name="mobile_number"
                                placeholder="Enter Mobile Number"
                              />
                            </div>
                            {errors.mobile && touched.mobile && (
                              <div className="text-danger ms-4">
                                {errors.mobile}
                              </div>
                            )}
                          </div>
                          <div className="form-group">
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <Mail size={20} />
                              </div>
                              <Field
                                type="email"
                                className={`form-control ${
                                  errors.email && touched.email
                                    ? "is-invalid"
                                    : ""
                                }`}
                                name="email"
                                placeholder="Enter email address"
                              />
                            </div>
                            {errors.email && touched.email && (
                              <div className="text-danger ms-4">
                                {errors.email}
                              </div>
                            )}
                          </div>
                          <div className="form-group">
                            <div className="input-group">
                              <div
                                className="input-group-prepend"
                                style={{ marginRight: "2px" }}
                              >
                                <CreditCard size={20} />
                              </div>
                              <Field
                                type="number"
                                className={`form-control ${
                                  errors.nid && touched.nid ? "is-invalid" : ""
                                }`}
                                name="nid"
                                placeholder="Enter NID Number"
                              />
                            </div>
                            {errors.nid && touched.nid && (
                              <div className="text-danger ms-4">
                                {errors.nid}
                              </div>
                            )}
                          </div>
                          <div className="form-group">
                            <div className="input-group">
                              <div
                                className="input-group-prepend"
                                style={{ marginRight: "2px" }}
                              >
                                <Image size={20} />
                              </div>
                              <input
                                type="file"
                                id="imageUpload"
                                accept="image/*"
                                onChange={handleImageChange}
                              />
                              {selectedImage && (
                                <img
                                  src={selectedImage}
                                  alt="Selected"
                                  style={{ width: "300px", height: "auto" }}
                                />
                              )}
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <Lock size={20} />
                              </div>
                              <Field
                                type={`${showpassword ? "text" : "password"}`}
                                name="password"
                                id="pwd-input"
                                className={`form-control ${
                                  errors.password && touched.password
                                    ? "is-invalid"
                                    : ""
                                }`}
                                placeholder="Password"
                              />
                              <div className="input-group-apend">
                                <i
                                  id="pwd-icon"
                                  className={`far fa-eye${
                                    !showpassword ? "-slash" : ""
                                  }`}
                                  onClick={() => {
                                    setShowpassword(!showpassword);
                                  }}
                                />
                              </div>
                            </div>
                            {errors.password && touched.password && (
                              <div className="text-danger ms-4">
                                {errors.password}
                              </div>
                            )}
                            <div className="important-note">
                              password should be a minimum of 8 characters and
                              should contains letters and numbers
                            </div>
                          </div>
                        </div>
                      )}

                      <div>
                        <button
                          type="submit"
                          className="btn btn-primary"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Submitting..." : "Submit"}
                        </button>
                        <Link
                          href="/authentication/login"
                          className="btn btn-dashed btn-pill"
                        >
                          Log in
                        </Link>
                      </div>
                    </Form>
                  )}
                </Formik>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignUp;

SignUp.getLayout = function getLayout(SignUp) {
  return <>{SignUp}</>;
};