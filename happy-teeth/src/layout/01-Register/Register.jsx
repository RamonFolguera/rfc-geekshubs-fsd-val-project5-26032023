import { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { InputText } from "../../components/InputText/InputText";
import { validate } from "../../helpers/useful";
import "./Register.css";

export const Register = () => {

  const [credentials, setCredentials] = useState({
    name: "",
    first_surname: "",
    second_surname: "",
    phone: "",
    address: "",
    email: "",
    password: "",
  });

  const [valiCredentials, setValiCredentials] = useState({
    nameVali: false,
    first_surnameVali: false,
    second_surnameVali: false,
    phoneVali: false,
    addressVali: false,
    emailVali: false,
    passwordVali: false,
    
  })

  const [credentialsError, setCredentialsError] = useState({
    nameError: "",
    first_surnameError: "",
    second_surnameError: "",
    phoneError: "",
    addressError: "",
    emailError: "",
    passwordError: "",
  });

  const [registerAct, setRegisterAct] = useState(false);

  const inputHandler = ({ target }) => {
    const { name, value } = target;
    setCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

useEffect(() => {
  for(let error in credentialsError) {
    if(credentialsError[error] != "") {
      setRegisterAct(false);
      return;
    }
  }

  for(let empty in credentials){
    if(credentials[empty] === ""){
      setRegisterAct(false);
      return;
    }
  }

  for(let validated in valiCredentials) {
    if(valiCredentials[validated] === false) {
      setRegisterAct(false);
      return;
    }
  }
  setRegisterAct(true);
});

const checkError = (e) => {
  let error = "";

  let checked = validate(
    e.target.name,
    e.target.value,
    e.target.required
  );

  error = checked.message;
  console.log(error)

  console.log("aqui seteamos el hook de las validaciones", valiCredentials);

  setValiCredentials((prevState) => ({
    ...prevState,
    [e.target.name + "Vali"]: checked.validated,
  }));

  setCredentialsError((prevState) => ({
    ...prevState,
    [e.target.name + "Error"]: error,
  }));
};

const fakeRegister = () => {

  console.log("registrado correctamente");
}

  return (
    <div className="registerBody">
      <div className="registerTitle w-100 text-center bg-dark text-white pt-3 pb-3">
      <h1>Register with Happy Teeth</h1>
      </div>
      <div className="registerContent">
        
        <div className="registerInfo">
          HAPPY TEETH. DENTAL CLINIC
          <p>Plaza América, 5 . 46006 València america@idim.es</p>
          <p>How to get there by public transport</p>
          <p>Bus lines</p>
          <p>
            Pl. América – Conde Salvatierra: lines 1 – 4 – 10 América – Marqués
            del Turia: lines 25 – 47 – 95
          </p>
          <p>Underground</p>
          <p>Alameda or Colón stations</p>
          <p>Parking</p>
          <p>Paseo Alameda area (between 3pm and 4pm)</p>
          <p>Mercado de Colón parking lot</p>
        </div>
        <div className="registerFormBox">
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Name</Form.Label>
                <InputText
                  className={
                    credentialsError.nameError === ""
                      ? "inputBasicDesign"
                      
                      : "inputBasicDesign inputErrorDesign"
                  }
                  type={"text"}
                  name={"name"}
                  placeholder="Name"
                  required={false}
                  changeFunction={(e) => inputHandler(e)}
                  blurFunction={(e) => checkError(e)}
                />
                <div>{credentialsError.nameError}</div>

              </Form.Group>

              <Form.Group as={Col} controlId="formGridFirstSurname">
                <Form.Label>First Surname</Form.Label>
                <InputText
                  className={
                    credentialsError.first_surnameError === ""
                      ? "inputBasicDesign"
                      : "inputBasicDesign inputErrorDesign"
                  }
                  type={"text"}
                  name={"first_surname"}
                  required={false}
                  placeholder="First Surname"
                  changeFunction={(e) => inputHandler(e)}
                  blurFunction={(e) => checkError(e)}
                />
                <div>{credentialsError.first_surnameError}</div>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridSecondSurname">
                <Form.Label>Second Surname</Form.Label>
                <InputText
                  className={
                    credentialsError.second_surnameError === ""
                      ? "inputBasicDesign"
                      : "inputBasicDesign inputErrorDesign"
                  }
                  type={"text"}
                  name={"second_surname"}
                  required={false}
                  placeholder="Second Surname"
                  changeFunction={(e) => inputHandler(e)}
                  blurFunction={(e) => checkError(e)}
                />
                <div>{credentialsError.second_surnameError}</div>
              </Form.Group>

              
            </Row>
            <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridPhone">
                <Form.Label>Phone number</Form.Label>
                <InputText
                  className={
                    credentialsError.phoneError === ""
                      ? "inputBasicDesign"
                      : "inputBasicDesign inputErrorDesign"
                  }
                  type={"text"}
                  name={"phone"}
                  required={false}
                  placeholder="Phone number"
                  changeFunction={(e) => inputHandler(e)}
                  blurFunction={(e) => checkError(e)}
                />
                <div>{credentialsError.phoneError}</div>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email address</Form.Label>
                <InputText 
                className={
                  credentialsError.emailError === ""
                    ? "inputBasicDesign inputEmailDesign"
                    : "inputBasicDesign inputErrorDesign inputEmailDesign"
                }
                type={"email"}
                name={"email"}
                required={false}
                placeholder="Email"
                changeFunction={(e) => inputHandler(e)}
                blurFunction={(e) => checkError(e)}
              />
              <div>{credentialsError.emailError}</div>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <InputText 
                className={
                  credentialsError.passwordError === ""
                    ? "inputBasicDesign inputPasswordDesign"
                    : "inputBasicDesign inputErrorDesign inputPasswordDesign"
                }
                type={"password"}
                name={"password"}
                required={false}
                placeholder="Password"
                changeFunction={(e) => inputHandler(e)}
                blurFunction={(e) => checkError(e)}
              />
              <div>{credentialsError.passwordError}</div>
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress">
              <Form.Label>Address</Form.Label>
              <InputText 
                className={
                credentialsError.addressError === ""
                  ? "inputBasicDesign inputAddressDesign"
                  : "inputBasicDesign inputErrorDesign inputAddressDesign"
              }
              type={"text"}
              name={"address"}
              required={false}
              placeholder="Address"
              changeFunction={(e) => inputHandler(e)}
              blurFunction={(e) => checkError(e)}
            />
            <div>{credentialsError.addressError}</div>
            </Form.Group>

            <Form.Group
              as={Col}
              className="formsRegulations"
              controlId="formGridRegulations"
            >
              <Form.Label className="regulationsLabel">
                To comply with data protection regulations (2018), we are unable
                to store and use your information unless you give us your
                permission. Please select Yes to allow this. View our data
                protection policy for details.*
              </Form.Label>
              <Form.Select
                className="regulationsInput"
                defaultValue="Please select"
              >
                <option>Please select</option>
                <option>Yes</option>
                <option>No</option>
              </Form.Select>
            </Form.Group>

            <div 
              type="submit"
              className={
                registerAct ? "registerSendDeac registerSendAct text-center" : "registerSendDeac text-center"
              }
              onClick={
                registerAct
                  ? () => {
                    fakeRegister();
                  }
                  : () => {}
              }
              >
              Submit
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};