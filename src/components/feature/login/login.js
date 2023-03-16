import React, { useState } from 'react'
import AlertPopUp from '../../common/alertPopUp/AlertPopUp';
import Loader from '../../common/loader/loader';
import * as authService from '../../../services/auth.service';
import { withNavigation } from '../../common/wrapper/navigationWrapper';
import './login.css';

const Login = (props) => {

  const [aadhar, setAadhar]= useState('');
  const [isLoading, setLoading]= useState(null);
  const [popUpData, setPopUpData] = useState(null);
  const [formError, setFormError]= useState({aadhar: null,email: ''});


  const closePopUp = () => {
    setPopUpData(null);
  }
  
  const redirect =(path) => {
    setPopUpData(null);
    if(path=='/userDetails') {
      props.navigate(path, {state:{ data: {'aadhar':aadhar}}});
    } else {
      props.navigate(path);
    }
  }

  const login = async (e) => {
    e.preventDefault();
    console.log(aadhar);
    setLoading(true);
    const res = await authService.login({aadhar: aadhar});
    if (res.status== 'success')  {
            const authData  = {'aadhar': aadhar, role: res.role};
            localStorage.setItem('authData', JSON.stringify(authData));
          const data ={
            headerObj: {text:'Login successfully.', className:'sucsess'},
            msgObj: {text: res.role == 1? 'Verify Users details':'Press below button to check your profile.', className:''},
            btnObj: {
                  primary: {text: res.role == 1? 'Verify users': 'Get Profile', className:'', func: () =>  res.role == 1 ? redirect('/userList') :redirect('/userDetails')}
              }
          };
          setLoading(false);
          setPopUpData(data);

    } else {
      const data ={
        headerObj: {text: 'Login Failed', className:'failed'},
        msgObj: {text: 'Invalid Credential.', className:''},
        btnObj: {
              primary: {text:'Try Login..', className:'', func: closePopUp}
          }
      };
      setLoading(false);
      setPopUpData(data);
    }
  };

  const handleChange = (e) => {
    const fieldName = e.target.name;
    const fielValue = e.target.value;
    if(fieldName == 'aadhar') {
      setAadhar(fielValue);
    }
    validatefield(fieldName, fielValue);
  }

  const validatefield = function(fieldName, fielValue) {
    switch(fieldName) {
      case 'aadhar':
        if(!fielValue) {
          setFormError({[fieldName]: "Aadhar is required."});
        } else if(!(/^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$/.test(fielValue))) {
          setFormError({[fieldName]: "Enter valid aadhar."});
        } else {
          setFormError({[fieldName]: ""});
        }
        break;
      case 'email':
        if(!fielValue) {
          setFormError({...formError, [fieldName]:"Email is required."});
        } else if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(fielValue))) {
          setFormError({...formError, [fieldName]: "Enter valid email."});
        } else {
          setFormError({...formError, [fieldName]: ""});
        }
        break;
    };
  }

  return (
    <div>
    <div className='login'>
      <form onSubmit={login} className='form-group'>
        <h3>Log In </h3>
        {/* <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div> */}
        <div className="mb-3">
          <label className='form-label'>Aadhar Number</label>
          <input
            type="text"
            name="aadhar"
            className="form-control"
            placeholder="Enter Aadhar"
            onChange={(e)=> handleChange(e)}
          />
          {formError.aadhar && <div className="form-error">{formError.aadhar}</div>}
        </div>
        <div className="mb-3 remember-me">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary" disabled={formError.aadhar==null || formError.aadhar}>
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
    </div>
    {isLoading && <Loader isLoading={isLoading}/>}
    {popUpData && <AlertPopUp {...popUpData}/>}
    </div>
  )
}

export default withNavigation(Login);