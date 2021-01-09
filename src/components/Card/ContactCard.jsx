import React from "react"
import "./ContactCard.css"

const ContactCard = (props) => {
  
  return (
    <div className="card">
      <h1>Name: {props.name}</h1>
      <h2>Phone Number: {props.number}</h2>
      <h2>Email: {props.email}</h2>
    </div>
  ) 

}



export default ContactCard;