import React, { isValidElement, useEffect, useState } from 'react'
import { Textarea } from 'react-bootstrap-icons'
import "./FactoryGiver.css"
import { useHistory } from 'react-router-dom';
import { IoMdArrowBack } from "react-icons/io";
import { db } from "../utils/firebase";
import Trafficinfo1 from "../../images/Trafficinfo1.png"
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { ImMail } from "react-icons/im";
import { AiFillDelete } from "react-icons/ai";
import firebase from "../../components/utils/firebase";
import _ from "lodash";

import { toast } from 'react-toastify';


function FactoryGiverData() {
  const [loading, setLoading] = useState(false);
  // const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState([]);
  // const [filteredUsers, setFilteredUsers] = useState(data);
  let history = useHistory();

  // const handleSearchFilter = (e) => {
  //   setSearchValue(e.target.value);
  // };



  useEffect(() => {
    
    db.collection("FactoryGiverData").onSnapshot((snapshot) => {
      setData(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
    console.log("job giver:", data);
  }, []);

  const deleteData = (item) => {
    console.log("item :", item);
    let id = item?.id;
    if (firebase.auth().currentUser.uid == item.data?.posterdID) {
      db.collection("FactoryGiverData").doc(id).delete().then(() => {
        console.log("Document successfully deleted!");
      }).catch((error) => {
        console.error("Error removing document: ", error);
      });
    } else {
      toast.warning("You don't have permission to delete this.")
    }
  }

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     const filter = _.filter(data, (user) => {
  //       return _.includes(
  //         _.lowerCase(JSON.stringify(_.values(user))),
  //         _.lowerCase(searchValue)
  //       );
  //     });
  //     setFilteredUsers(filter);
  //   }, 500);
  //   return () => clearTimeout(timeout);
  // }, [searchValue]);

  return (
    <div className='container-taxijob '>
      {data.map((item, index) => (
        <div className='row-taxijob ms-3 mt-2 '>
          <div className='closebtns' onClick={() => deleteData(item)}>
            <AiFillDelete style={firebase.auth().currentUser.uid !== item?.data?.posterdID && { color: "gray" }} />
            </div>

          <h5 className='rowtext1 mt-3 d-flex justify-content-center' style={{ color: "#cc0000" }}> Job Giver</h5>
          <div className='d-flex'>
            <div className='col-4 mt-2 driver12'>
              <h2 className='rowtext1'  style={{fontSize:"15px",fontWeight:"bold",color:"#ffcc00",width:"200px"}}>FACTORY, WAREHOUSE AND WORKER</h2>
            </div>
            <div className='col-4 giver12 offset-3'>
            </div>
          </div>
          <h5 className='rowtext'> <b style={{color:"#3b9bf7"}}>Profession</b>:&nbsp;&nbsp; {item.data.profision}</h5>
          <h5 className='rowtext' ><b style={{color:"#3b9bf7"}}>Details</b>:&nbsp;&nbsp; {item.data.detail}</h5>
          <h5 className='rowtext'> <b style={{color:"#3b9bf7"}}>Email</b>:&nbsp;&nbsp;{item.data.email}</h5>
          <h5 className='rowtext'> <b style={{color:"#3b9bf7"}}>Cell</b>:&nbsp;&nbsp;{item.data.cellnumber}</h5>

          <div className='phoneicon'> <a href="tel:+923439262289"> <FaPhoneSquareAlt /></a>
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
export default FactoryGiverData