import React from 'react'
import "./ManageCompnayUser"
import { useHistory } from 'react-router'
import firebase from '../utils/firebase';
import { useEffect, useState } from 'react';
import { auth } from '../utils/firebase';
import { IoMdArrowBack } from "react-icons/io";
import Loader from "../loader/Loader";


function ManageCompnayUser() {
    let history = useHistory();
    const [usersList, setUsersList] = useState([]);
    const [loading, setLoading] = useState([]);

    const [currentUserDetails, setuserdetails] = useState(null);
    const loadProfile = () => {
        setLoading(true)
        const firestore = firebase.database().ref("/UserProfile");
        firestore.on('value', (snapshot) => {
            if (snapshot?.val()) {
                let data = { ...snapshot.val() };
                data = Object.values(data);
                let keys = Object.keys(snapshot.val());
                data.map((item, index) => item["key"] = keys[index])
                let currentUserDetails = data.find(item => item.uid == auth?.currentUser.uid);
                setuserdetails(currentUserDetails);
                setLoading(false)
                let companyUsers = data?.filter(item => item?.companyName == currentUserDetails?.companyName);
                setUsersList(companyUsers);
                console.log("company users : ", companyUsers);
                setLoading(false)
            }
        });
    }
    useEffect(() => {
        loadProfile();
        return {
        }
    }, [])

    return (
        <div className="container-fluid-block">
        {loading && <Loader />  }

        <button 
        className="btnsss ms-3 mt-1 mb-1 " 
        onClick={() => history.goBack()}>
            <IoMdArrowBack />
            </button>
            
            <div className="container-block">
                <div className='table-responsive'>
                    <table class=" table ">
                        <thead>
                            <tr>
                                <th scope="col">User Name</th>
                                <th scope="col">Phone Number</th>
                                <th scope="col">Company Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Block User</th>
                                <th scope="col">Block From Chat</th>
                            </tr>
                        </thead>
                        <tbody>

                            {usersList?.length > 0 && usersList?.map((item, index) =>
                                < tr key={index} >
                                    <th scope="col">
                                        {item?.Name} 
                                        </th>
                                    <th scope="col">
                                        {item?.adress}
                                        </th>
                                    <th scope="col">
                                        {item?.companyName}
                                        </th>
                                    <th scope="col">
                                        {item?.email}
                                        </th>
                                   
                                    <th scope="col">
                                        <input 
                                        class="form-check-input" 
                                        type="checkbox" 
                                        id="check1" 
                                        name="option1" 
                                        value="something" />
                                    </th>

                                    <th scope="col">
                                        <input 
                                        class="form-check-input" 
                                        type="checkbox" 
                                        id="check1" 
                                        name="option1" 
                                        value="something" />
                                    </th>

                                </tr>
                            )}
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    )
} export default ManageCompnayUser