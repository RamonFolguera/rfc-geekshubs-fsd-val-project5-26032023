import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { bringMyAppointmentsAsDoctor } from '../../services/apiCalls';
import { userData } from '../userSlice';

export const MyAppointmentsAsDoctor = () => {
  
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  const credentialsRdx = useSelector(userData)
  
  useEffect(() => {
  if(appointments.length === 0){
    bringMyAppointmentsAsDoctor(credentialsRdx.credentials.token)
      .then(
        result => {
          setLoading(false);
          setAppointments(result.data.data)
        }
      )
      .catch(error => console.log(error))
  }

},[appointments])
  
if (loading) {
  return (
    <div className="spinnerDesign d-flex justify-content-center align-items-center flex-column">
      <div>
        {" "}
        <Spinner animation="border" variant="primary" />
      </div>
      <div>
        {" "}
        <h4>Loading...</h4>
      </div>
    </div>
  );
} else if (appointments.length > 0) {
  return (
    <div className="d-flex justify-content-center flex-column align-items-center">
      <h2>My appointments:</h2>
      <div className="cardsContainer">

      
        {
          appointments.map(
            appointment => {
              return (
                  <div
                    onClick = {() => appointmentSelected(appointment)}
                    className= "appointmentCardDesign"
                    key={appointment.id}>
                       <div className="d-flex flex-column">
                  <p>
                    <span className="pe-4 nameFieldDesign">Date:</span>
                    {appointment.date}
                  </p>
                  <p>
                    <span className="pe-4 nameFieldDesign">Treatment:</span>{" "}
                    {appointment.Service.name}
                  </p>
                  <p>
                  <span className="pe-4 nameFieldDesign">Doctor name:</span>{" "}
                    {appointment.Doctor.User.name}{" "}
                    {appointment.Doctor.User.first_surname}{" "}
                    {appointment.Doctor.User.second_surname}
                  </p>
                  <p>  
                  <span className="pe-4 nameFieldDesign">Patient name:</span>{" "}
                    {appointment.User.name}{" "}
                    {appointment.User.first_surname}{" "}
                    {appointment.User.second_surname}
                  </p>
                  <p>  
                  <span className="pe-4 nameFieldDesign">Patient phone:</span>{" "}
                    {appointment.User.phone}
                  </p>
                  <p>  
                  <span className="pe-4 nameFieldDesign">Patient email:</span>{" "}
                    {appointment.User.email}
                  </p>
                  <p>
                  <span className="pe-4 nameFieldDesign">Comments:</span>{" "}
                    {appointment.comments}
                  </p>
                </div>
              </div>
            );
          })}
          </div>
        </div>
      );
    } else {
      return (
        <div className="noAppoDesign d-flex justify-content-center flex-column align-items-center">
          <h2 className="mb-4">Your appointments:</h2>
          <h4>You don't have any appointments.</h4>
          <div className="mt-5">
            <Link className="btnNoAppBookDesign me-4" to="/create-appointment">
              <p className="text-white buttonLogoutTextDesign">
                Book Appointment
              </p>
            </Link>
          </div>
        </div>
      );
    }
  };
  