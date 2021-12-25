import React from 'react'
import { useHistory } from 'react-router'
import { IoMdArrowBack } from "react-icons/io";
import { useEffect, useState } from 'react';
import firebase from '../utils/firebase';


function AllowUser() {
    let history = useHistory();
    const [usersList, setUsersList] = useState([]);
    const loadProfile = () => {
        // setLoading(true)
        const firestore = firebase.database().ref("/UserProfile");
        firestore.on('value', (snapshot) => {
            if (snapshot?.val()) {
                let data = { ...snapshot.val() };
                data = Object.values(data);
                let keys = Object.keys(snapshot.val());
                data.map((item, index) => item["key"] = keys[index])
                // console.log("data in allow user page : ", data);
                // console.log("keys in allow user page : ", keys);
                // console.log("Entries in allow user page : ", snapshot.val());
                setUsersList(data);
            }
        });
    }

    useEffect(() => {
        loadProfile();
        return {
        }
    }, [])

    return (
        <div className="container-fluid-Allow">
            <div className="container-Allow ms-4 mt-5">
                <div className="row-allow ms-1">
                    <div className='table-responsive'>
                        <table class=" table ">
                            <thead>
                                <tr>
                                    <th scope="col">User Name</th>
                                    <th scope="col">Phone Number</th>
                                    <th scope="col">Company Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">User</th>
                                    <th scope="col">Company Admin</th>
                                    <th scope="col">Super Admin</th>
                                </tr>
                            </thead>
                            <tbody>
                                {usersList?.length > 0 && usersList?.map((item, index) =>
                                    < tr key={index} >
                                        <th scope="col"> {item?.Name} </th>
                                        <th scope="col">{item?.adress}</th>
                                        <th scope="col">{item?.companyName}</th>
                                        <th scope="col">{item?.email}</th>

                                        <th scope="col">
                                            <input class="form-check-input" onClick={() => {
                                                item["role"] = true ? false : true
                                                firebase.database().ref("UserProfile").child(item.key).update(item);
                                            }} type="checkbox" id="check1" name="option1" value="something" />
                                        </th>
                                        <th scope="col">
                                            <input class="form-check-input" onClick={() => {
                                                item["role2"] = true ? false : true;
                                                firebase.database().ref("UserProfile").child(item.key).update(item);
                                            }} type="checkbox" id="check1" name="option1" value={item?.role2} />
                                        </th>
                                        <th scope="col">
                                            <input class="form-check-input" onClick={() => {
                                                item["role3"] = true ? false : true;
                                                firebase.database().ref("UserProfile").child(item.key).update(item);
                                            }} type="checkbox" value={true} />
                                        </th>
                                    </tr >
                                )}

                            </tbody>
                        </table>

                    </div>
                    {/* <button className="btnsss mt-2 "  onClick={() => history.goBack()}><IoMdArrowBack /></button> */}

                </div>
            </div>
        </div >

    )
}

export default AllowUser
