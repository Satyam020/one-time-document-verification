import React, { Component } from "react";
import "./userDetails.css";

import * as dataService from '../../../services/data.service';
import { withService } from "../../common/wrapper/commonWapper";
import Loader from "../../common/loader/loader";
import AlertPopUp from "../../common/alertPopUp/AlertPopUp";

class UserDetails extends Component {

  isAdmin = false;

  constructor() {
    super();
    this.state = {
      isEditMode: false,
      isDataFetched: false,
      isLoading: false,
      popUpData: null,
      data:{
          aadhar: '',
          firstName: '',
          lastName:'', 
          fatherName:'', 
          motherName:'', 
          dob:'', 
          currentQualification:'', 
          higherQualification: '', 
          higherQualificationYear:'',
          currentCourseName:'', 
          mobileNumber:'',
          homeAddress:'',
          enrollNumber: ''
      }
    }
  }

  async componentDidMount() {
      const authData= JSON.parse(localStorage.getItem('authData'))
      const params = this.props.location;
      if (params?.state?.data?.aadhar && authData) {
        const userDetailsRes = await dataService.getUserData(params.state.data.aadhar);
        if(userDetailsRes.status == 'success') {
         this.setUserDetails(userDetailsRes.data);
         this.setState((prevState) => {return {...prevState, isDataFetched: true}});
        } else {
          this.setState({...this.state, data:{...this.state.data, aadhar: params.state.data.aadhar}});
        }
      } else {
        setTimeout(()=> this.props.navigate('/login'), 0);
      }
      
      if(authData) {
        this.isAdmin = authData.role == 1? true: false;
      }
   }

   async setUserDetails(data) {
    const dataKeys = Object.keys(data);
    dataKeys.map(key=> {
      // if(key== 'dob') {
      //   data[key] = moment().format('YYYY-MM-DD');
      // }
      this.setState((prevState)=>{return {...prevState, data:{...prevState.data, [key]: data[key]}}})});
   }

   closePopUp = (status) => {
    if(status=='success') {
      this.setState({...this.state, popUpData: null, isDataFetched: true, isEditMode: true});
    } else {
      this.setState((prevState) => {return {...this.state, popUpData: null, isDataFetched: prevState.isDataFetched, isEditMode: prevState.isEditMode}});
    }
  }

  submit = async () => {
    var apiRes= null;
    const mode  = this.state.isDataFetched && this.state.isEditMode ? 'update' : 'save';
    console.log(this.state.data, mode);
    this.setState({...this.state, isLoading: true});
    if(mode=='save') {
      apiRes = await dataService.setUserData({...this.state.data, verificationStatus: ''})
    } else {
      apiRes = await dataService.updateUserData({...this.state.data, verificationStatus: ''})
    }

    if(apiRes.status= "success") {
      const data ={
        headerObj: {text: mode=='save'?'Data saved successfully.': 'Data updated successfully.', className:'sucsess'},
        msgObj: {text: '', className:''},
        btnObj: {
              primary: {text:'close', className:'', func: ()=>this.closePopUp('success')}
          }
      };
      this.setState({...this.state, isLoading: false, popUpData:data});
    } else {
      const data ={
        headerObj: {text:mode=='save'?'Data save failed.': 'Data updatation failed.', className:'failed'},
        msgObj: {text: apiRes.error, className:''},
        btnObj: {
              primary: {text:'Try again.', className:'', func: ()=>this.closePopUp('fail')}
          }
      };
      this.setState({...this.state, isLoading: false, popUpData:data});
    }
  }


  handleChange = (e) => {
    this.setState({...this.state, data:{...this.state.data,[e.target.name]: e.target.value}})
  }

  shouldDisabled(fieldName) {
    const editableField = ['higherQualification','higherQualificationYear', 'currentQualification', 'currentCourseName'];
    // if(this.state.isDataFetched && !this.state.isEditMode && !editableField.includes(fieldName)) {
    if(this.state.isDataFetched) {
      return true;
    }
  }


  editDetails() {
    this.setState({...this.state, 'isEditMode': true});
  }

   redirect = (path) => {
    this.setState({
      isEditMode: false,
      isDataFetched: false,
      isLoading: false,
      popUpData: null,
      data:{
          aadhar: '',
          firstName: '',
          lastName:'', 
          fatherName:'', 
          motherName:'', 
          dob:'', 
          currentQualification:'', 
          higherQualification: '', 
          higherQualificationYear:'',
          currentCourseName:'', 
          mobileNumber:'',
          homeAddress:'',
          enrollNumber: ''
      }
    });
    this.props.navigate(path);
  }

  async submitVerification(status) {
    console.log(status)
    var apiRes= null;
    this.setState({...this.state, isLoading: true});
    apiRes = await dataService.updateVerificationStatus(this.state.data.aadhar, status = status == 'Accept' ? 1 : 0)
    if(apiRes.status= "success") {
      const data ={
        headerObj: {text: 'Updated successfully.', className:'success'},
        msgObj: {text: '', className:''},
        btnObj: {
              primary: {text:'Redirect...', className:'', func: ()=>this.redirect('/userList')}
          }
      };
      this.setState({...this.state, isLoading: false, popUpData:data});
    } else {
      const data ={
        headerObj: {text:'updatation failed.', className:'failed'},
        msgObj: {text: 'Please try again.', className:''},
        btnObj: {
              primary: {text:'Try again.', className:'', func: ()=>this.closePopUp('failed')}
          }
      };
      this.setState({...this.state, isLoading: false, popUpData:data});
    }
  }

  render() {
    return (
    <div>
      <div className="user-details-container form  container-fluid">
      <h3 className="align-center">User Details</h3>
        <form className="form-group" >
            <div className="personaldetails">
              <div className="section-label">Personal Details:</div> 
              
              <div className="row">
                <div className="col-sm-6">
                    <label className="form-label">First Name: </label>
                    <input  className="form-control" type="text" name="firstName" 
                    onChange={(e)=> this.handleChange(e)} value={this.state.data.firstName} disabled={this.shouldDisabled('firstName')}/>
                </div>

                <div className="col-sm-6">
                  <label className="form-label">Last Name: </label>
                  <input type="text" name="lastName" className="form-control"
                  onChange={(e)=> this.handleChange(e)} value={this.state.data.lastName} disabled={this.shouldDisabled('lastName')}/>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-6">
                  <label className="form-label">Father Name: </label>
                  <input type="text" name="fatherName" className="form-control"
                  onChange={(e)=> this.handleChange(e)} value={this.state.data.fatherName} disabled={this.shouldDisabled('fatherName')}/>
                </div> 
                <div className="col-sm-6"> 
                  <label className="form-label">Mother Name: </label>
                  <input type="text" name="motherName" className="form-control"
                  onChange={(e)=> this.handleChange(e)} value={this.state.data.motherName} disabled={this.shouldDisabled('motherName')}/>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-6">
                  <label className="form-label">DOB: </label>
                  <input type="date" name="dob" className="form-control"
                  onChange={(e)=> this.handleChange(e)} value={this.state.data.dob} disabled={this.shouldDisabled('dob')}/>
                </div>
              </div>
            </div>


            <div className="contectdetails">
              <div className="section-label">Contect Details:</div>

              <div className="row">
                  <div className="col-sm-6">
                    <label className="form-label">Mobile Number: </label>
                    <input type="number" name="mobileNumber" className="form-control" 
                    onChange={(e)=> this.handleChange(e)} value={this.state.data.mobileNumber} disabled={this.shouldDisabled('mobileNumber')}/>
                  </div>

                  <div className="col-sm-6">
                    <label className="form-label">Aadhar card: </label>
                    <input type="text" name="aadhar" className="form-control"
                    onChange={(e)=> this.handleChange(e)} value={this.state.data.aadhar} disabled={true}/>
                  </div>
              </div>

              <div className="row">
                  <div className="col-sm-6">
                    <label className="form-label">Home Adderase: </label>
                    <input type="text" name="homeAddress" className="form-control"
                    onChange={(e)=> this.handleChange(e)} value={this.state.data.homeAddress} disabled={this.shouldDisabled('homeAddress')}/>
                  </div>
              </div>
            </div>
            
            <div className="Qulification">
                <div className="section-label">Qualification Details: </div>

                <div className="row">
                  <div className="col-sm-6">
                      <label className="form-label">Higher qulification: </label>
                      <input type="text" name="higherQualification" className="form-control"
                      onChange={(e)=> this.handleChange(e)} value={this.state.data.higherQualification}
                      disabled={this.shouldDisabled('higherQualification')} />
                  </div>

                  <div className="col-sm-6">
                      <label className="form-label">Higher qulification Year: </label>
                      <input type="Year" name="higherQualificationYear" className="form-control"
                      onChange={(e)=> this.handleChange(e)} value={this.state.data.higherQualificationYear}
                      disabled={this.shouldDisabled('higherQualificationYear')}/>
                  </div>
                </div>


                <div className="row">
                  <div className="col-sm-6">
                    <label className="form-label">Current qulification: </label>
                    <input type="text" name="currentQualification" className="form-control"
                    onChange={(e)=> this.handleChange(e)} value={this.state.data.currentQualification}
                    disabled={this.shouldDisabled('currentQualification')}/>
                  </div>
                  <div className="col-sm-6">
                    <label className="form-label">Course Name: </label>
                    <input type="text" name="currentCourseName" className="form-control"
                    onChange={(e)=> this.handleChange(e)} value={this.state.data.currentCourseName}
                    disabled={this.shouldDisabled('currentCourseName')}/>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-6">
                    <label className="form-label">Current Enrollment number: </label>
                    <input type="text" name="enrollNumber" className="form-control"
                    onChange={(e)=> this.handleChange(e)} value={this.state.data.enrollNumber}
                    disabled={this.shouldDisabled('enrollNumber')}/>
                  </div>
                </div>
            </div>

          {!this.state.isEditMode && !this.state.isDataFetched && !this.isAdmin && <button type="button" onClick={()=>this.submit()}>Save details</button>}
          {/* {this.state.isEditMode && <button type="button" onClick={()=> this.submit()}>Update Details</button>} */}

          {/* {!this.state.isEditMode && this.state.isDataFetched && <button type="button" onClick={()=>this.editDetails()}>Edit details</button> } */}
        </form>
        {this.isAdmin &&
          <div className="admin-btn-group align-center">

          <button type="button" className="btn btn-primary m-3" onClick={()=>this.submitVerification('Accept')}>Accept</button>
          <button type="button" className="btn btn-secondary m-3" onClick={()=>this.submitVerification('Reject')}>Reject</button>

        </div>
        }
      </div>
      {this.state.isLoading && <Loader isLoading={this.state.isLoading}/>}
      {this.state.popUpData && <AlertPopUp {...this.state.popUpData}/>}
    </div>
  );
  }
};

export default withService(UserDetails);
