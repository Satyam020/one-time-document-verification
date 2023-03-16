
import {get, post, put} from './commmon.service';
import {constant} from '../constant/common.constant';

export async function getUserData(aadhar) {
    /* 1. aadhar */
    const res=  await get(constant.URL.BASE_URL+constant.URL.GET_USER_DETAILS+`/?aadhar=${aadhar}`);
    if(res.ok) {
        const resData = await res.json();
        return resData.status === 'success' ?  {data: resData.data, status: 'success'} : {status: 'fail'} ;
    } else {
        return {status: 'fail'}
    }
}

export async function setUserData(userData) {
   /*  
   1. data ={ 
        aadhar,
        firstName, lastName, fatherName, motherName, 
        dob, currentQualification, higherQualification, higherQualificationYear, currentCourseName, mobileNumber,
        homeAddress;
    } */
    const res = await post(constant.URL.BASE_URL+constant.URL.SAVE_USER_DETAILS, userData);
    if(res.ok) {
        const resData = await res.json();
        return resData.status === 'success' ?  {status: 'success'} : {...res, status: 'fail', } ;
    } else {
        return {status: 'fail'}
    }
}


export async function updateUserData(aadhar, userData) {
    /*
    1. aadhar number
    2. data ={ 
        aadhar,
        firstName, lastName, fatherName, motherName, 
        dob, currentQualification, higherQualification, currentCourseName, mobileNumber,
        homeAddress;
    } */
    const res = await put(`${constant.URL.BASE_URL}${constant.URL.UPDATE_USER_DETAILS.replace('{aadhar}', aadhar)}`, userData);
    if(res.ok) {
        const resData = await res.json();
        return resData.status === 'success' ?  {status: 'success'} : {...res, status: 'fail', } ;
    } else {
        return {status: 'fail'}
    }
}




export async function updateVerificationStatus(aadhar, status) {
    /*
    1. aadhar verificationStatus
     */
    const userData = {aadhar: aadhar, verificationStatus: status}
    const res = await post(`${constant.URL.BASE_URL}${constant.URL.UPDTAE_VERIFICATION_STATUS}`, userData);
    if(res.ok) {
        const resData = await res.json();
        return resData.status === 'success' ?  {status: 'success'} : {...res, status: 'fail', } ;
    } else {
        return {status: 'fail'}
    }
}


export async function getAllUsersData() {
    const res=  await get(constant.URL.BASE_URL+constant.URL.GET_ALL_USER_DATA);
    if(res.ok) {
        const resData = await res.json();
        return resData.status === 'success' ?  {data: resData.data, status: 'success'} : {status: 'fail'} ;
    } else {
        return {status: 'fail'}
    }
}

