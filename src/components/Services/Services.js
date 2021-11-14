import { Input } from '@material-ui/core';
import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react'
import '../Services/Services.css'
import { Card, Modal } from 'react-bootstrap';
import Sverigetaxi from '../Services/Sverigetaxi.jpg'
import { useHistory } from 'react-router';
import firebase from "../utils/firebase";
const Services = () => {
    const [smShow, setSmShow] = useState(false);
    const [lgShow, setLgShow] = useState(false);
    let history = useHistory();


    useEffect(() => {
        const firestore = firebase.database().ref("/CarInput");

        firestore.on('value', (snapshot) => {
            let data = { ...snapshot.val() };
            data = Object.values(data);
            console.log("data : ", data);
            setMovies(data);
        });

    }, [])
    const [movies, setMovies] = useState([])
    const renderCard = (card, index) => {
        return (
            <div>
                <div>
                    <Modal
                        size="sm"
                        show={smShow}
                        onHide={() => setSmShow(false)}
                        aria-labelledby="example-modal-sizes-title-sm"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="example-modal-sizes-title-sm">
                                Contact
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            {card.number}
                        </Modal.Body>
                    </Modal>
                    <Modal
                        size="lg"
                        show={lgShow}
                        onHide={() => setLgShow(false)}
                        aria-labelledby="example-modal-sizes-title-lg"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="example-modal-sizes-title-lg">
                                Large Modal
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>...</Modal.Body>
                    </Modal>
                </div>

                <Card style={{ width: '18rem' }} key={index} style={{ display: 'flex', marginBottom: '5px' }}>
                    <Card.Img variant="top" src={card.url} style={{ width: '100%', height: '150px', borderRadius: '2px', display: 'flex' }} />
                    <Card.Img variant="top" src={card.url2} style={{ width: '100%', height: '150px', borderRadius: '2px', display: 'flex' }} />
                    <Card.Img variant="top" src={card.url3} style={{ width: '100%', height: '150px', borderRadius: '2px', display: 'flex' }} />
                    <Card.Img variant="top" src={card.url4} style={{ width: '100%', height: '150px', borderRadius: '2px', display: 'flex' }} />
                    <Card.Body> <Card.Title>
                        Title :
                        {card.title}</Card.Title>
                        <Card.Text> Description:{card.description}
                            <div class="col"><div className="col-sm"> Price: {card.price}
                            </div>
                                <div className="col-sm"> Year: {card.year}</div>
                                <div className="col-sm"> Kelometer:{card.km}</div>
                                <div className="col-sm"> Car Make:{card.make}</div>
                                <div className="col-sm"> Car Fuel: {card.fuel}</div>
                                <div className="col-sm">Registeration No: {card.regisration}</div>
                                <div className="col-sm"> Car Condition: {card.condition}</div>
                            </div> </Card.Text>
                        <Button onClick={() => setSmShow(true)} variant="primary">Go To Contact</Button> </Card.Body> </Card>

            </div>
        )
    }
    return (<div >


        <div className="container ">
            <div className='container-fluid-car'>
                <div className='container-car'>
                    <div className="col">
                        <Button onClick={() => { history.push("/carinput") }} style={{
                            marginTop: '14px', paddingRight: "10px",
                            backgroundColor: "rgb(80 109 139)", borderRadius: '4px', color: 'white'
                        }}
                            className="btn btn-outline-success  ">Cars</Button>
                        <Button style={{
                            marginTop: '14px', backgroundColor: "rgb(80 109 139)",
                            borderRadius: '4px', color: 'white'
                        }}
                            className="btn btn-outline-success  ">Other</Button>
                        <div className="form-control " style={{
                            width: '166px', float: 'right', paddingTop: '11px',
                            backgroundColor: "rgb(248, 248, 248)", marginRight: '59px',
                            borderRadius: "4px"
                        }}>
                            <Input type="search" placeholder=" Search Services" aria-label="Seahrc"></Input>
                            <Button style={{
                                position: 'fixed', marginBottom: "20px", color: 'white', borderRadius: '4px',
                                backgroundColor: "rgb(80 109 139)"
                            }}
                                className="btn btn-outline-success  ">Search</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="list-group" style={{ marginTop: '20px' }}>
            </div>
        </div>
        <div style={{ alignItems: 'center', marginTop: '20px' }}>
            {movies.map(renderCard)} </div> </div>)
};
export default Services;