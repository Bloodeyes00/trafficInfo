import React, { isValidElement, useEffect, useState } from 'react'
import { Textarea } from 'react-bootstrap-icons'
import "./Taxijob.css"
import { useHistory } from 'react-router-dom';
import { IoMdArrowBack } from "react-icons/io";
import { db } from "../utils/firebase";
import { Table } from 'react-bootstrap'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import TaxiJobSeeker from './TaxiJobSeeker';
import JobFooter from '../jobfooter/JobFooter';
import Trafficinfo1 from "../../images/Trafficinfo1.png"
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { ImMail } from "react-icons/im";
import { AiFillDelete } from "react-icons/ai";



function TaxiJob() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);





  let history = useHistory()

  useEffect(() => {
    db.collection("taxiJob").onSnapshot((snapshot) => {
      setData(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
    console.log("job giver:", data);
  }, []);

  const deleteData = (id) => {
    db.collection("taxiJob").doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }

  return (
        <div className='container-taxijob'>
           <button style={{ color: "black" }}
         className="btnsss ms-3 mt-1 mb-1 "
         onClick={() => history.goBack()}>
         <IoMdArrowBack />
       </button>

  {/* <Tabs
                    defaultActiveKey="home"
                    transition={false}
                    id="noanim-tab-example"
                    className="Tabss"
                >
                    <Tab eventKey="home" title="Post job" onClick={() => { history.push("/taxijob") }}>
                    
                    </Tab>
                    <Tab eventKey="profile" title="Job Seeker">
                    </Tab>

                </Tabs> */}

          <div className='jobheader ms-3'>
            <div className='col-8 mt-5'>
          <h1 className='inputh1'>Available Jobs:</h1>
          </div>
          <div className='col-4'>
          <img className='taxijobimage' src={Trafficinfo1} />
          </div>
          </div>


                    {data.map((item, index) => (

                    <div className='row-taxijob ms-3 '>
                      <div className='closebtns' onClick={() => deleteData(item?.id)}><AiFillDelete /></div>
                      
              <h5 className='rowtext1 mt-3 d-flex justify-content-center' style={{ color: "#cc0000" }}> Job Giver</h5>
                      <div className='d-flex'>
                        <div className='col-4 mt-2 driver12'>
                      <h2 className='rowtext1'>DRIVER</h2>
                      </div>
                      <div className='col-4 giver12 offset-3'>
                    </div>
                    </div>
                      <h5 className='rowtext'>{item.data.detail}</h5>
                      <h5 className='rowtext'>{item.data.companyName}</h5>
                      <h5 className='rowtext'>{item.data.email}</h5>
                      <h5 className='rowtext'>{item.data.cellnumber}</h5>

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
                        <br />
                <br />
      
                <TaxiJobSeeker />
                <br />
      <br />
      <br />
      <br />
                <JobFooter />
        </div>
  )
}
export default TaxiJob