import React, { isValidElement, useEffect, useState } from 'react'
import { Textarea } from 'react-bootstrap-icons'
import "./Taxijob.css"
import { useHistory } from 'react-router-dom';
import { IoMdArrowBack } from "react-icons/io";
import firebase from "../utils/firebase";
import { db } from './../utils/firebase'
import { Table } from 'react-bootstrap'


function TaxiJobSeeker() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([])
  const [dataIdToBeUpdated, setDataIdToBeUpdated] = useState("");
  const [updatedEmail, setUpdatedEmail] = useState("");
  const [updatedCellNumber, setUpdatedCellNumber] = useState("");
  const [updatedExperience, setUpdatedExperience] = useState("");
  const [updatedDetail, setUpdatedDetail] = useState("");


  const updateData = (e) => {
    e.preventDefault();
    db.collection("JobSeeker").doc(dataIdToBeUpdated).update({
      email: updatedEmail,
      detail: updatedDetail,
      expernices: updatedExperience,
      cellnumber: updatedCellNumber,

    });
    setDataIdToBeUpdated("");
    setUpdatedEmail("");
    setUpdatedDetail("");
    setUpdatedExperience("");
    setUpdatedCellNumber("");

  };

  let history = useHistory()

  useEffect(() => {
    db.collection("JobSeeker").onSnapshot((snapshot) => {
      setData(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
    console.log("job seeker:", data);
  }, []);

  return (

    <div>
       <h1 className='inputh1 ms-4'>Available Jobs:</h1>
                    {data.map((item, index) => (

                    <div className='row-taxijob ms-3'>
                      <h2 className='rowtext1'>DRIVER</h2>
                      <h5 className='rowtext'>{item.data.detail}</h5>
                      <h5 className='rowtext'>{item.data.expernices}</h5>
                      <h5 className='rowtext'>{item.data.email}</h5>
                      <h5 className='rowtext'>{item.data.cellnumber}</h5>
                      {/* <br /> */}

                    </div>
                       ))}
    </div>

  )
}
export default TaxiJobSeeker