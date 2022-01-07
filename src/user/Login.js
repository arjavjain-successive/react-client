import React from 'react';
import './AppCss.css'
import { TextField,Button,Form,FormLayout} from '@shopify/polaris';
import { useState } from 'react';
/*
This is Class component
class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.onSubmitt = this.onSubmitt.bind(this);
  }
  onSubmitt(event) {
    window.alert("email:" + this.state.email)
    this.setState({email:"",password:""});
    event.preventDefault();
  }
  render(){
  return( 
    <div className = "form">
    <h1 className = "heading">Welcome to my Login Page</h1>
      <Form onSubmit = {this.onSubmitt}> 
          <FormLayout>
            <div className = "textfield">
     <TextField label="Email" autoComplete="off" align="left" type="email" value= {this.state.email}
      onChange = {(newValue) => this.setState({email:newValue})} />
            <br/>
            <TextField label="Password" autoComplete="off" align="left" type="password" value = {this.state.password}
     onChange = {(newValue) => this.setState({password:newValue})} />
      </div>
      <div className="submit">
            <Button submit >Submit</Button>
            </div>
            </FormLayout>
        </Form>
      </div>
  );
  }
}
*/

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
