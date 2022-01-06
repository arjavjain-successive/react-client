import React from 'react';
import './AppCss.css'
import { TextField,Button,Form,FormLayout} from '@shopify/polaris';
import { useState } from 'react';
const  Login = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const onSubmitt = () =>{
    window.alert("Email:"+ email + "  Password:" + password);
    setEmail('');
    setPassword('');
  }
  return( 
    <div className = "form">
    <h1 className = "heading">Welcome to my Login Page</h1>
      <Form onSubmit = {onSubmitt}> 
          <FormLayout>
            <div className = "textfield">
     <TextField label="Email" autoComplete="off" align="left" type="email" value= {email}
      onChange ={ (newValue) => setEmail(newValue)} />
            <br/>
            <TextField label="Password" autoComplete="off" align="left" type="password" value = {password}
      onChange ={ (newValue) => setPassword(newValue)} />
      </div>
      <div className="submit">
            <Button submit >Submit</Button>
            </div>
            </FormLayout>
        </Form>
      </div>
  );

}
export default Login;
