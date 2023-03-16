
import {get, post, put} from './commmon.service';
import {constant} from '../constant/common.constant';



async function signUp(data) {
    // data= {aadhar: null, email: null}
    const res = await post(constant.URL.BASE_URL+constant.URL.SIGN_UP, data);
    if(res.ok) {
        const resData = await res.json();
        return resData.status === 'success' ?  {status: 'success'} : {...resData} ;
    } else {
        return {status: 'fail'}
    }
}


async function login(data) {
    // data= {aadhar: null}
    const res=  await post(constant.URL.BASE_URL+constant.URL.LOGIN, data);
    if(res.ok) {
        const resData = await res.json();
        return resData.status === 'success' ?  {status: 'success', role: resData.role} : {...resData} ;
    } else {
        return {status: 'fail'}
    }
}

async function verifyUser(data) {
    // 1. data= {aadhar: null}
    const res = await post(constant.URL.BASE_URL+constant.URL.VERIFY_USER, data);
    if(res.ok) {
        const resData = await res.json();
        return resData.status === 'success' ? {...resData, status: 'success'} : {status: 'fail'};
    } else {
        return {status: 'fail'}
    }
  
}

export {signUp,login, verifyUser};