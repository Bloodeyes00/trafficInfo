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
          <div className='jobheader'>
          <h1 className='inputh1 mt-4'>&nbsp;Input:</h1>
          <img className='taxijobimage mt-2' src={Trafficinfo1} />
          </div>
            <Tabs
                    defaultActiveKey="home"
                    transition={false}
                    id="noanim-tab-example"
                    className="Tabss"
                >
                    <Tab eventKey="home" title="Job Giver">
                    <h1 className='inputh1 ms-4'>Available Jobs:</h1>
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
                    </Tab>
                    <Tab eventKey="profile" title="Job Seeker">
                        <TaxiJobSeeker />
                    </Tab>

                </Tabs>
                <br />

        </div>
  )
}
export default TaxiJob