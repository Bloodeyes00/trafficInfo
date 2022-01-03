import React, {useState} from 'react'
import './Services.css'
import { Card, Modal }  from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';
import servicesonwheel from "../../images/servicesonwheel.jpg"
import towing from "../../images/towing.jpg"
import carwashing from "../../images/carwashing.jpg"
import carmech from "../../images/carmech.jpg"
import { IoMdArrowBack } from "react-icons/io";
import { useHistory } from "react-router"

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
            <h3>Phone Number</h3>
            <p>03001234567</p>
            <br />
            <h3>Address</h3>
            <p>mohallah hamzakhile village dagai tehsil razar distt swabi KPK Paksitan</p>
            </Modal.Body>
        <Modal.Footer>
        
        </Modal.Footer>
      </Modal>
    </>

            <div className='container-vehicles mt-2 ms-4'>
                <div className='row-veh'>
                
            <Card className='Cardb'>
  <Card.Img className='imge-top' variant="top" src={servicesonwheel} />
  <Card.Body>
    <Card.Title><h1>Services On Wheel</h1></Card.Title>
    <Card.Text>
    <p>Schedule car servicing at time and place of your convenience, save time and money. Over 15,000 assistance per month.</p>
    </Card.Text>
    <button className='btns1' onClick={handleShow}><b>Information</b></button>
  </Card.Body>
</Card>

<br />

            <Card className='Cardb '>
            <Card.Img className='imge-top' variant="top" src={towing} />
  <Card.Body>
    <Card.Title><h1>Towing</h1></Card.Title>
    <Card.Text>
        &nbsp;
 <p>Get connected to nearest tow truck, track on real time, pay cash less.</p> </Card.Text>
    <button className='btns1'  onClick={handleShow}><b>Information</b></button>
  </Card.Body>
</Card>



</div>
<br />
<br />
<div className='row-veh '>

            <Card className='Cardb'>
  <Card.Img className='imge-top' variant="top" src={carwashing} />
  <Card.Body>
    <Card.Title><h1>Car Wash</h1></Card.Title>
    <Card.Text>
    <p>The best cleaning your car can get is a careful washing by hand. Unfortunately, that is only the case if done correctly, which most drivers do not.</p>
    </Card.Text>
    <button className='btns1'  onClick={handleShow}><b>Information</b></button>
  </Card.Body>
</Card>

<br />

            <Card className='Cardb'>
  <Card.Img className='imge-top' variant="top" src={carmech} />
  <Card.Body>
    <Card.Title><h1>Car Mechanic</h1></Card.Title>
    <Card.Text>
    <p>Moin Motor Workshop provides car mechanic services at most affordable prices in Karachi.</p>
    </Card.Text>
    <button className='btns1'  onClick={handleShow}><b>Information</b></button>
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
