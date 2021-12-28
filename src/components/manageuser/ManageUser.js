import React from 'react'
import { useHistory } from 'react-router'
import { IoMdArrowBack } from "react-icons/io";
import { useEffect, useState } from 'react';
import firebase from '../utils/firebase';


function ManageUser() {
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
                        <table className=" table ">
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
                                            <input className="form-check-input" onClick={() => {
                                                item["role"] = !item?.role;
                                                firebase.database().ref("UserProfile").child(item.key).update(item).then(res => {
                                                    console.log("res : ", usersList);
                                                }).catch(e => { console.error(e) });
                                            }} type="checkbox" checked={item?.role} id="check1" name="option1" />
                                        </th>
                                        <th scope="col">
                                            <input className="form-check-input" onClick={() => {
                                                item["role2"] = !item?.role2;
                                                firebase.database().ref("UserProfile").child(item.key).update(item);
                                            }} type="checkbox" id="check1" name="option1" checked={item?.role2} />
                                        </th>
                                        <th scope="col">
                                            <input onClick={() => {
                                                item["role3"] = !item?.role3;
                                                firebase.database().ref("UserProfile").child(item.key).update(item);
                                            }} type="checkbox" checked={item?.role3} />
                                        </th>
                                    </tr >
                                )}

                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div >

    )
}

export default ManageUser
