import React, { Component } from "react";

import "./signUp.css";
import {signUp} from '../../../services/auth.service';
import Loader from "../../common/loader/loader";
import AlertPopUp from "../../common/alertPopUp/AlertPopUp";
import { withNavigation } from "../../common/wrapper/navigationWrapper";

class SignUp extends Component {
  constructor() {
    super();
    this.state= {
    isLoading: null,
    popUpData: null,
    formData: {aadhar: '', email:''},
    formError: {aadhar:'', email:''},
    formValid: false,
  }
}

handleInput = (e) => {
  const fieldName = e.target.name;
  const fielValue = e.target.value;
  this.setState({...this.state, formData:{...this.state.formData, [fieldName]: fielValue}});
  this.validatefield(fieldName, fielValue);
}

validatefield(fieldName, fielValue) {
  switch(fieldName) {
    case 'aadhar':
      if(!fielValue) {
        this.setState((prevState)=> {return {...prevState, formError:{...prevState.formError,[fieldName]: "Aadhar is required."}}});
      } else if(!(/^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$/.test(fielValue))) {
        this.setState((prevState)=> {return {...prevState, formError:{...prevState.formError,[fieldName]: "Enter valid aadhar."}}});
      } else {
        this.setState((prevState)=> {return {...prevState, formError:{...prevState.formError,[fieldName]: ""}}});
      }
      break;
    case 'email':
      if(!fielValue) {
        this.setState((prevState)=> {return {...prevState, formError:{...prevState.formError, [fieldName]:"Email is required."}}});
      } else if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(fielValue))) {
        this.setState((prevState)=> {return {...prevState, formError:{...prevState.formError, [fieldName]: "Enter valid email."}}});
      } else {
        this.setState((prevState)=> {return {...prevState, formError:{...prevState.formError, [fieldName]:""}}});
      }
      break;
  };

  if(!this.state.formError.email && !this.state.formError.aadhar) {
    this.setState((preState)=> {return {...preState, formValid: true}});
  } else {
    this.setState((preState)=> {return {...preState, formValid: false}});
  }
}

closePopUp = () => {
  this.setState({...this.state, popUpData: null});
}

redirect(path) {
  if(path=='/userDetails') {
    this.props.navigate(path, {state:{ data: {'aadhar':this.state.formData.aadhar}}});;
  } else {
    this.props.navigate(path);
  }
}

 submit = async (e) => {
  e.preventDefault();
  this.setState({...this.state, isLoading: true});
    const res = await signUp({aadhar: this.state.formData.aadhar, email: this.state.formData.email});
    if (res.status== 'success')  {
          const data ={
            headerObj: {text:'Sign up successfully.', className:'sucsess'},
            msgObj: {text: 'Press below button to complete your profile.', className:''},
            btnObj: {
                  primary: {text:'Complete Profile', className:'', func: ()=>this.redirect('/userDetails')}
              }
          };
          this.setState({...this.state, isLoading: false, popUpData:data});
    } else {
      const data ={
        headerObj: {text: res.reseon == 'alreadyRegistred'? 'User Already Exist.' : 'Signup Failed', className:'failed'},
        msgObj: {text: res.reseon == 'alreadyRegistred'? 'Please Login and continue.' : 'Technical Error.', className:''},
        btnObj: {
              primary: {text:res.reseon == 'alreadyRegistred'? 'Login': 'close', className:'', func: res.reseon == 'alreadyRegistred'? ()=>this.redirect('/login'): this.closePopUp}
          }
      };
      this.setState({...this.state, isLoading: false, popUpData:data});
    }

} 

  render() {
   return (
    <div>
    <div className="signup">
        <form onSubmit={this.submit} noValidate autoComplete="off" className="form-group">
          <h3>Sign Up</h3>
          <div className="mb-3">
            <label className="form-label">Aadhar number</label>
            <input
              type="text"
              name="aadhar"
              className="form-control"
              placeholder="Enter Aadhar"
              value={this.state.formData.aadhar}
              onInput={(e)=> this.handleInput(e)}
              autoComplete="off"
            />
            {this.state.formError.aadhar && <div className="form-error">{this.state.formError.aadhar}</div>}
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter email"
              value={this.state.formData.email}
              onInput={(e)=> this.handleInput(e)}
              autoComplete="off"
            />
            {this.state.formError.email && <div className="form-error">{this.state.formError.email}</div>}
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary" disabled={!this.state.formValid}>
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-right">
            Already registered <a href="/sign-in">sign in?</a>
          </p>
        </form>
      </div>

      {this.state.isLoading && <Loader isLoading={this.state.isLoading}/>}
      {this.state.popUpData && <AlertPopUp {...this.state.popUpData}/>}
    </div>
   )
  };
};



export default withNavigation(SignUp);
