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

                    <div className='row-taxijob ms-3'>
                      <h2 className='rowtext1'>DRIVER</h2>
                      <h5 className='rowtext'>{item.data.detail}</h5>
                      <h5 className='rowtext'>{item.data.companyName}</h5>
                      <h5 className='rowtext'>{item.data.email}</h5>
                      <h5 className='rowtext'>{item.data.cellnumber}</h5>

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