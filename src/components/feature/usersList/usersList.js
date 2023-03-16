import { useEffect, useState } from "react";
import"./usersList.css";

import { withNavigation } from '../../common/wrapper/navigationWrapper';

import * as dataService from '../../../services/data.service';
import Loader from "../../common/loader/loader";



const UserList = (props) => {
const [isLoading, setLoading] = useState(false);

// const [userList, setUserList] = useState([{
//     "aadhar":"825155221935",
//     "enrollNumber": "sdsdsd",
// "firstName":"Aman","lastName":"Patel","fatherName":"Rakesh","motherName":"Soni",
// "dob":"2022-08-11","currentQualification":"B.tech","higherQualification":"Diploma in enginering",
// "higherQualificationYear":"2021",
// "currentCourseName":"Cse","mobileNumber":"8959697952","homeAddress":"Fhgfgg", "verificationStatus": '1'}]);

const [userList, setUserList] = useState([]);
useEffect(()=> {
    const authData= JSON.parse(localStorage.getItem('authData'))
    if (!authData) {
        setTimeout(()=> props.navigate('/login'), 0);       
    }
    async function fetchData() {
        setLoading(true);
        const userDetailsRes = await dataService.getAllUsersData();
        if(userDetailsRes.status == 'success') {
            setUserList(userDetailsRes.data);
        } else {
            setUserList([]);
        }
        setLoading(false);
    }
    fetchData();
},[]);

const redirect = (aadhar) => {
    console.log(aadhar);    
    props.navigate('/userDetails', {state:{ data: {'aadhar':aadhar}}});
}

  return (
    <div className="users-list-wrapper">
      <h2 className="align-center">List Of Users</h2>
      {userList.length > 0 &&
        <div className="user-list">
            <table className="table">
            <thead className="thead-light">
                <tr>
                <th scope="col">#</th>
                <th scope="col">Aadhar number</th>
                <th scope="col">Email </th>
                <th scope="col">Verification Status</th>
                </tr>
            </thead>
            <tbody>
                {
                userList.map(data=> 
                    <tr key={data.aadhar}>
                        <th scope="row">1</th>
                        <td>{data.aadhar}</td>
                        <td>{data.enrollNumber}</td>
                        <td>
                            { data.verificationStatus == '-1' &&
                                <button className="btn btn-info" onClick={()=> redirect(data.aadhar)}>Check</button>
                            }
                            {
                                data.verificationStatus !== '-1' && <>{data.verificationStatus == 1? <span className="text-success font-weight-bold">Verified</span>: <span className="text-warning font-weight-bold">Rejected</span>} </>
                            }
                        </td>
                    </tr>
                )
                }
            
            </tbody>
            </table>
        </div>
      }
      {userList.length == 0 && 
      <div className="no-list-container text-info"> No User Found!</div>
      }
      {isLoading && <Loader isLoading={isLoading}/>}
    </div>
  );
};

export default withNavigation(UserList);