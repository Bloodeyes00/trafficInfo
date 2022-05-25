import React, { isValidElement, useEffect, useState } from 'react'
import { Textarea } from 'react-bootstrap-icons'
import "./Taxijob.css"
import { useHistory } from 'react-router-dom';
import { IoMdArrowBack } from "react-icons/io";
import { db } from './../utils/firebase'
import { Table } from 'react-bootstrap'
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { ImMail } from "react-icons/im";
import { AiFillDelete } from "react-icons/ai";
import firebase from "../../components/utils/firebase";
import { toast } from 'react-toastify';


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
    console.log("job seeker 2:", data);
  },
    []);

    const deleteData = (item) => {
      console.log("item 2:", item);
      let id = item?.id;
      if (firebase.auth().currentUser.uid == item.data?.posterdID) {
        db.collection("JobSeeker").doc(id). delete().then(() => {
          console.log("Document successfully deleted!");
        }).catch((error) => {
          console.error("Error removing document: ", error);
        });
      } else {
        toast.warning("You don't have permission to delete this.")
      }
    }

  return (

    <div className='container-taxijobseeker12'>
    

      {/* <h1 className='inputh1 ms-4'>Available Jobs:</h1> */}

      {data.map((item, index) => (
        <div className='row-taxijob ms-3'>
          <div className='closebtns' onClick={() => deleteData(item)}><AiFillDelete style={firebase.auth().currentUser.uid !== item?.data?.posterdID && { color: "gray" }}  /></div>
          <h5 className='rowtext1 mt-3 d-flex justify-content-center' style={{ color: "#cc0000" }}> Job Seeker</h5>
          <div className='d-flex'>
            <div className='col-4 mt-2 driver12'>
              <h2 className='rowtext1'  style={{fontSize:"15px",fontWeight:"bold",color:"#ffcc00"}}>TAXI DRIVER</h2>
            </div>
            <div className='col-6 giver12 offset-3'>
            </div>
          </div>
          <h5 className='rowtext'><b style={{color:"#3b9bf7"}}>Work As:</b>&nbsp;&nbsp; {item.data.selectcompnay}</h5>
          <h5 className='rowtext'><b style={{color:"#3b9bf7"}}>Profession 2:</b>&nbsp;&nbsp; {item.data.profision}</h5>
          <h5 className='rowtext'><b style={{color:"#3b9bf7"}}>Details:</b>:&nbsp;&nbsp; {item.data.detail}</h5>
          <h5 className='rowtext'><b style={{color:"#3b9bf7"}}>Email:</b>:&nbsp;&nbsp; {item.data.email}</h5>
          <h5 className='rowtext'><b style={{color:"#3b9bf7"}}>Cell:</b>:&nbsp;&nbsp; {item.data.cellnumber}</h5>
          {/* <br /> */}
          <div className='phoneicon'> <a className="phone_float" href="tel:+923439262289"> <FaPhoneSquareAlt /></a>

            <a
              href="https://wa.me/923439262289"
              className="whatsapp_float"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsappSquare />
            </a>

            <a
              href="mailto:ihteshamu11@gmail.com"
              className="mail_float"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImMail /> 
            </a>
          </div>
          <br />
        </div>
      ))}
    </div>

  )
}
export default TaxiJobSeeker


