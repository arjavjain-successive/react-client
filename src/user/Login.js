import React from 'react';
import "./LoginCss.css"
import { TextField,Button,Form,FormLayout} from '@shopify/polaris';
// import { useState } from 'react';

// This is Class component
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


//This is Function Component

// const  Login = () => {
//   const [email,setEmail] = useState("");
//   const [password,setPassword] = useState("");
//   const [emailError, setEmailError] = useState("");
//   const [passwordError,setPasswordError] = useState("");
//   const emailValidation = () => {
//     const EmailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     if(email === ''){
//       setEmailError("email is required")
//     }
//     else if(email.match(EmailRegex)){
//       setEmailError('')
//     }
//     else{
//       setEmailError("please enter the valid email")
//     }
// }
// const passwordErrorrValidation = () => {
//   if(password === ''){
//     setPasswordError("Password is required");
//   }
//   else{
//     setPasswordError("");
//   }
// }
// const passwordValidation = () => {
//   var passwordregex = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
//   if(password.match(passwordregex)){
//     return true;
//   }
//   else{
//     return false;
//   }
// }
//   const onSubmitt = () =>{
//     var passwordValidationResult = passwordValidation();
//     if(emailError !== ""){
//       alert("Email is not in proper format please read the instruction")
//     }
//     else if (!passwordValidationResult){
//       alert("password is not in proper format")
//     }
//     else{
//       window.alert("Email:"+ email + "  Password:" + password);
//       setEmail('');
//       setPassword('');
//     }

//     }
  
//   return( 
//     <div className = "form">
//       <h1 className = "heading">Welcome to my Login Page</h1>
//       <Form onSubmit = {onSubmitt}> 
//         <FormLayout>
//           <div className = "textfield">
//             <TextField label="Email" autoComplete="off" align="left" type="email" value= {email}
//                 onChange ={ (newValue) => setEmail(newValue)} onBlur = {emailValidation}/>
//               <span className = "error">{emailError}</span>
//               <br/>
//             <TextField label="Password" autoComplete="off" align="left" type="password" value = {password}
//               onChange ={ (newValue) => setPassword(newValue)} onBlur = {passwordErrorrValidation} />
//               <span className = "error">{passwordError}</span>
//           </div>
//           <div className="submit">
//             <Button submit >Submit</Button>
//           </div>
//         </FormLayout>
//     </Form>
//   </div>
//   );

// }
export default Login;
