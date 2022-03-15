import React, { isValidElement, useEffect, useState } from 'react'
import { Textarea } from 'react-bootstrap-icons'
import "./Taxijob.css"
// import Trafficinfo1 from "../../images/Trafficinfo1.png"
import { useHistory } from 'react-router-dom';
import { IoMdArrowBack } from "react-icons/io";
import firebase from "../utils/firebase";
import {db} from './../utils/firebase'
import {Table} from  'react-bootstrap'


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
      
        // dateAndTime: updatedDateAndTime,
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

    <div className='container-taxijobs'>
        
      <div className='container-taxi'>
        <button style={{ color: "black" }}
          className="btnsss ms-3 mt-1 mb-1 "
          onClick={() => history.goBack()}>
          <IoMdArrowBack />
        </button>


        <br />
        <div className='row-taxidetailss ms-3'>
        <Table className='max' id='max' responsive>

<thead>
    <tr>
        <th>#</th>
        <th>Email</th>
        <th>Phone Number</th>
        <th>Expernices</th>
        <th>Detail</th>
        {/* <th>User Edit</th> */}
        
  

    </tr>
</thead>
<tbody>
    {data.map((item, index) => (
        <tr key={item.id}>
            <td>{index + 1}</td>
            <td>{item.data.email}</td>
            <td>{item.data.cellnumber}</td>
            <td>{item.data.expernices}</td>
            <td>{item.data.detail}</td>
          
            {/* <td>  <button className='bt' >User Edit</button></td> */}
        </tr>
    ))}
</tbody>



</Table>
        </div>
      </div>
    </div>
  )
}
export default TaxiJobSeeker