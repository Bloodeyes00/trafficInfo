import React, {useState} from 'react'
import './Services.css'
import { Card, Modal }  from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';
import policehelp from "../../images/policehelp.jpg"
import trafficpolice from "../../images/trafficpolice.jpg"
import Hospital from "../../images/Hospital.jpg"
import firebrigade from "../../images/firebrigade.jpg"

function VehiclesServices() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='container-fluid-Vehicles'>

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
        &nbsp;
 <p>Get connected to nearest tow truck, track on real time, pay cash less.</p> </Card.Text>
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
    <p>The best cleaning your car can get is a careful washing by hand. Unfortunately, that is only the case if done correctly, which most drivers do not.</p>
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
    <p>Moin Motor Workshop provides car mechanic services at most affordable prices in Karachi.</p>
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
