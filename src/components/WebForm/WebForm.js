import React, {useState} from "react";
import './WebForm.css';
import AutoAddress from '../AutoAddress/AutoAddress'; 

//function that implements the web form format
export default function WebForm() {

 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [acceptedTerms, setAcceptedTerms] = useState(false);
  
 //Form component will pass the onSubmit handler (handleSubmit) an object that contains all the form’s data when the user submits the form
  const handleSubmit = (event) => {
    console.log(`
    Email: ${email}
    Password: ${password}
    Accepted Terms: ${acceptedTerms}
  `);

    event.preventDefault();
  }

  return (
    // No code is implemented for the Submit Button 
    <form onSubmit={handleSubmit}>
      <h1>Create Account</h1>
      <div className="full-name">
        <label>
            First Name:
            <input 
            type="text" 
            placeholder="Enter First Name" 
            required 
            />

        </label>

        <label>
            Last Name:
            <input 
            type="text" 
            placeholder="Enter Last Name" 
            required 
            />

        </label>
     </div>

      <label>
        Email:
        <input
          name="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required />
      </label>

      <label>
        Password:
        <input
          name="password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required />
      </label>

      {/* contains the address autocomplete textbox */}
      <label>
          Address:
        <AutoAddress/>
      </label>

      <label>
        <input
          name="acceptedTerms"
          type="checkbox"
          onChange={e => setAcceptedTerms(e.target.value)}
          required />
        I accept the terms of service
      </label>

      <button>Submit</button>
    </form>
  );
}