import React from "react"
import ContactCard from "../Card/ContactCard"

class Form extends React.Component {
  constructor() {
    super();
    this.state = {users: [], potentialUser: { name: "", number: "", email: "" }, counter: 0}

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){ 
    event.preventDefault();
    const newUser = this.state.potentialUser;
    console.log(newUser);
 
    this.setState(
      {
        ...this.state,
        users: [
          ...this.state.users,
          newUser],
        
    } 
    )
    console.log(this.state.users);
  }
  
  handleChange = (event) => {
    const value = event.target.value
    this.setState({ 
    potentialUser: {
      ...this.state.potentialUser,
      [event.target.name]: value 
    }
  })
}

  render() {
    return ( 
      <div>
      <form> 
      <div> 
        <label htmlFor='email'>Email</label> 
        <input  
          name='email'
          placeholder='Email' 
          value = {this.state.email} 
          onChange={this.handleChange} 
        /> 
      </div> 
      <div> 
        <label htmlFor='name'>Name</label> 
        <input 
          name='name' 
          placeholder='Name'
          value={this.state.name} 
          onChange={this.handleChange} 
        /> 
      </div> 
      <div> 
        <label htmlFor='number'>Number </label> 
        <input 
          name='number' 
          placeholder='Number'
          value={this.state.number} 
          onChange={this.handleChange} 
        /> 
      </div>
      <div> 
          <button onClick={(e) => this.handleSubmit(e)}>Submit</button> 
        </div> 
      </form>
      { 
        this.state.users.map(user => {
        const {name, email, number} = user;
        return <ContactCard name ={name} email = {email} number = {number} />
      } 
      )} 
      </div>
    );
  }
}

export default Form;
