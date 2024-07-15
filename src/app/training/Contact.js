import React, { useState } from "react";
import axios from "axios";
import "react-phone-number-input/style.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import PhoneInput from "react-phone-number-input";
import { Container, Row, Col, Input, Label } from "reactstrap";
import SEO from "../../components/SEO";

const courses = [
  {
    title: "AWS CERTIFIED DEVELOPER COURSE",
    duration: "2 days",
  },
  {
    title: "AWS CERTIFIED SOLUTIONS ARCHITECT COURSE",
    duration: "3 days",
  },
  {
    title: "AWS CERTIFIED CLOUD PRACTIONER COURSE",
    duration: "2 days",
  },
  {
    title: "AWS SYSOPS ADMINISTRATOR COURSE",
    duration: " 3 days",
  },
  {
    title: "AWS CERTIFIED DEVOPS ENGINEER ASSOCIATE COURSE ",
    duration: " 3 days",
  },
  {
    title: "AWS CERTIFIED SOLUTIONS ARCHITECT PROFESSIONAL COURSE",
    duration: " 4 days",
  },
  {
    title: "AWS ADVANCED NETWORKING COURSE",
    duration: " 4 days",
  },
  {
    title: "AWS CERTIFIED SECURITY COURSE",
    duration: " 3 days",
  },
  {
    title: "AWS CERTIFIED MACHINE LEARNING COURSE",
    duration: " 4 days",
  },
  {
    title: "AWS CERTIFIED DATABASE COURSE",
    duration: " 3 days",
  },
  {
    title: "AWS CERTIFIED DATA ANALYTICS COURSE",
    duration: " 3 days",
  },
  {
    title: "FUNDAMENTALS OF AWS",
    duration: " 1 day",
  },
  {
    title: "Big Data Advanced Hadoop Ecosystem",
    duration: " 1 day",
  },
  {
    id: 3,
    title: "Complete Data Science and Machine Learning with R",
  },

  {
    id: 4,
    title: "Relational Databases & PostGRESQL",
  },
  {
    id: 5,
    title: "Devops with Ansible",
  },

  {
    id: 6,
    title: "Edge Computing: Driving the next evolution of internet Technology",
  },
  {
    id: 7,
    title: "Machine Learning",
  },
  {
    id: 8,
    title: "Networking CCNA",
  },
  {
    id: 9,
    title: "Non Relational Databases - NoSQL & MongoDB",
  },
  {
    id: 10,
    title: "Automated Software Testing Using Selenium",
  },
  {
    id: 11,
    title: "Kubernetes",
  },
  {
    id: 12,
    title: "Python for Data Science",
  },
  {
    id: 13,
    title: "Introduction to version control Git/Github",
  },
  {
    id: 14,
    title: "Java programming",
  },
  {
    id: 15,
    title: "Leveraging Cloud for business growth",
  },
  {
    id: 16,
    title: "Introduction to Continous Integration CI-Jenkins",
  },
  {
    id: 17,
    title: "Bigdata Beginner Hadoop ecosystem",
  },
  {
    id: 18,
    title: "Bigdata with Spark",
  },
  {
    id: 19,
    title: "Unix Shell Scripting",
  },
  {
    id: 20,
    title: "Microsoft Azure Fundamentals",
  },
  {
    id: 21,
    title: "Power Bi Analytics",
  },
];

function Contact() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    businessEmail: "",
    comments: "",
  });
  const [marketing] = useState("not subscribing");
  const [checked, setChecked] = useState(false);
  const [courseFund, setCourseFund] = useState("");
  const [courseType, setCourseType] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const { firstName, lastName, businessEmail, comments } = state;

  const formHandler = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleCheckChange = () => {
    setChecked(!checked);
  };

  const handleSubmit = async () => {
    if (firstName && lastName && businessEmail && phoneNumber !== "") {
      let data = {
        trainingselection: courseType,
        coursefunding: courseFund,
        fname: firstName,
        lname: lastName,
        phone: phoneNumber,
        email: businessEmail,
        desc: comments,
        marketingInfo: checked.toString(),
      };
      const saveform = await axios.post(
        "https://rhinqcguqj.execute-api.eu-west-1.amazonaws.com/Prod/trainingformapi",
        data,
      );
      if (saveform.status === 200) {
        toast.success("Details received successfully", {
          position: "top-right",
          hideProgressBar: true,
          closeOnClick: true,
          autoClose: 2000,
        });
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else {
        alert("Form not submitted");
      }
    } else {
      alert("Please fill all details");
    }
  };

  return (
    <React.Fragment>
      <SEO
        title="Training - CloudPlexo"
        description="Complete the CloudPlexo Training Contact Form to inquire about our courses. Choose your course funding source, select the training course type, and provide your details."
        keywords="Course inquiry form, Training course enrollment, Contact us for courses"
      />
      <ToastContainer />
      <section style={{ padding: "150px 0 100px" }} className="contactTraining">
        <Container>
          <Row className="justify-content-center">
            <Col md={8}>
              <Row>
                <Col md={12}>
                  <h2>TRAINING CONTACT FORM</h2>
                  <div>
                    <p>
                      <span style={{ color: "red" }}>*</span>
                      WHO WILL BE FUNDING THE COURSE
                    </p>
                    <select
                      value={courseFund}
                      onChange={(e) => setCourseFund(e.target.value)}
                    >
                      <option value="">Select Course Funding</option>
                      <option value="My Employer">My employer</option>
                      <option value="I will">I will</option>
                      <option value="Not sure">Not Sure</option>
                    </select>
                    <br />
                  </div>
                  <div>
                    <p>
                      <span style={{ color: "red" }}>*</span>
                      TRAINING COURSE
                    </p>
                    <select
                      value={courseType}
                      onChange={(e) => setCourseType(e.target.value)}
                    >
                      <option>Select Course Type</option>
                      {courses.map((course) => {
                        return (
                          <option value={course.title}> {course.title} </option>
                        );
                      })}
                    </select>
                    <br />
                  </div>
                  <div className="text-left">
                    <Row>
                      <Col md={6}>
                        <p>
                          <span style={{ color: "red" }}>*</span>
                          First Name
                        </p>
                        <Input
                          name="firstName"
                          type="text"
                          value={firstName}
                          onChange={formHandler}
                        />
                      </Col>
                      <Col md={6}>
                        <p>
                          <span style={{ color: "red" }}>*</span>
                          Last Name
                        </p>
                        <Input
                          name="lastName"
                          type="text"
                          value={lastName}
                          onChange={formHandler}
                        />
                      </Col>
                    </Row>
                    <br />
                  </div>
                  <div className="text-left">
                    <p>
                      <span style={{ color: "red" }}>*</span>
                      MOBILE NUMBER
                    </p>
                    <PhoneInput
                      placeholder="Enter phone number"
                      international
                      defaultCountry="NG"
                      value={phoneNumber}
                      autoComplete="off"
                      onChange={setphoneNumber}
                    />
                    <br />
                  </div>
                  <div className="text-left">
                    <p>
                      <span style={{ color: "red" }}>*</span>
                      COMPANY EMAIL
                    </p>
                    <Input
                      name="businessEmail"
                      type="text"
                      value={businessEmail}
                      onChange={formHandler}
                    />
                    <br />
                  </div>
                  <div className="text-left">
                    <p>MESSAGE (OPTIONAL)</p>
                    <Input
                      name="comments"
                      type="textarea"
                      className="textarea"
                      value={comments}
                      onChange={formHandler}
                    />
                    <br />
                  </div>
                  <div className="text-left">
                    <input
                      type="checkbox"
                      className="mr-3"
                      value={marketing}
                      onChange={handleCheckChange}
                    />

                    <Label>
                      I wish to sign up to our marketing offers and discounts
                    </Label>
                  </div>
                  <p>
                    By submitting your details you agree to be contacted in
                    order to respond to your enquiry
                  </p>
                  <Row className="justify-content-center">
                    <Col md={6} className="text-center">
                      <button
                        type="submit"
                        aria-label="submit"
                        onClick={handleSubmit}
                      >
                        Submit
                      </button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <style jsx="true">
        {`
          select, input[type=tel]{
            display: block;
            width: 100%;
            height: calc(1.5em + 0.75rem + 2px);
            padding: 0.375rem 0.75rem;
            font-size: 1rem;
            font-weight: 400;
            line-height: 1.5;
            color: #495057;
            background-color: #fff;
            background-clip: padding-box;
            border: 1px solid #ced4da;
            border-radius: 0.25rem;
            transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
          }
          p{
            margin: 1rem 0 0.5rem;
          }
          .textarea{
            height: 150px !important;
          }
         .contactTraining button{
            background: #F9B326;
            color: white;
            border: 0;
            padding: 0.7rem 2rem;
          }
          .contactTraining button:disabled{
            background:rgba(19, 1, 1, 0.3));
          }
          `}
      </style>
    </React.Fragment>
  );
}

export default Contact;
