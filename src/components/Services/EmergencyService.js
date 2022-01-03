import React, {useState} from 'react'
import './Services.css'
import { Card, Modal }  from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';
import policehelp from "../../images/policehelp.jpg"
import trafficpolice from "../../images/trafficpolice.jpg"
import Hospital from "../../images/Hospital.jpg"
import firebrigade from "../../images/firebrigade.jpg"
import { IoMdArrowBack } from "react-icons/io";
import {useHistory} from "react-router";

function VehiclesServices() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let history = useHistory()

    return (
        <div className='container-fluid-Vehicles'>
            <button className="btnsss ms-3 mt-1 mb-1 " onClick={() => history.goBack()}><IoMdArrowBack /></button>

<>
   

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h3>Help line </h3>
            <p>03001234567</p>
            <br />
            
            </Modal.Body>
        <Modal.Footer>
        
        </Modal.Footer>
      </Modal>
    </>

            <div className='container-vehicles mt-2 ms-4'>
                <div className='row-veh'>
                
            <Card className='Cardb'>
  <Card.Img className='imge-top' variant="top" src={policehelp} />
  <Card.Body>
    <Card.Title><h1>Police Helpline</h1></Card.Title>
    <Card.Text>
    <p>The terrorists, militants and criminals use vehicles which are either stolen or having fake number plates, thereby making it difficult for the investigation </p>
   
&nbsp;
    </Card.Text>
    <button className='btns1' onClick={handleShow}><b>Help Line</b></button>
  </Card.Body>
</Card>

<br />

            <Card className='Cardb '>
            <Card.Img className='imge-top' variant="top" src={trafficpolice} />
  <Card.Body>
    <Card.Title><h1>Traffice Police</h1></Card.Title>
    <Card.Text>
    
 <p>Traffic Warden Police Khyber Pakhtunkhwa, License Verification, BRT, Complaints, Mobile Driving Unit, Driving License Procedure, Traffic Education, ...</p> </Card.Text>
    <button className='btns1'  onClick={handleShow}><b>Help Line</b></button>
  </Card.Body>
</Card>



</div>
<br />
<br />
<div className='row-veh '>

            <Card className='Cardb'>
  <Card.Img className='imge-top' variant="top" src={firebrigade} />
  <Card.Body>
    <Card.Title><h1>Fire Brigade</h1></Card.Title>
    <Card.Text>
    <p>A fire department or fire brigade, also known as a fire authority, fire rescue, fire district, fire & rescue, or fire service in some areas, is an organization that provides firefighting services.</p>
    </Card.Text>
    <button className='btns1'  onClick={handleShow}><b>Help Line</b></button>
  </Card.Body>
</Card>

<br />

            <Card className='Cardb'>
  <Card.Img className='imge-top' variant="top" src={Hospital} />
  <Card.Body>
    <Card.Title><h1>Hospital</h1></Card.Title>
    <Card.Text>
    <p>A hospital is a health care institution providing patient treatment with specialized health science and auxiliary healthcare staff and medical equipment.  </p>
    <br />
    </Card.Text>
    <button className='btns1'  onClick={handleShow}><b>Help Line</b></button>
  </Card.Body>
</Card>


<br />
<br />
<br />
<br />
<br />
<br />



</div>
                </div>
        </div>
    )
}

export default VehiclesServices
