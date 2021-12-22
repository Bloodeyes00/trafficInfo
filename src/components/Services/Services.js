import { Input } from '@material-ui/core';
import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react'
import '../Services/Services.css'
import { Card, Modal } from 'react-bootstrap';
import Sverigetaxi from '../Services/Sverigetaxi.jpg'
import { useHistory } from 'react-router';
import { IoMdArrowBack } from "react-icons/io";
import firebase from "../utils/firebase";
import car3 from '../Services/car3.jpg';
import car4 from '../Services/car4.jpg';
import car5 from '../Services/car5.jpg';
import { Carousel } from 'react-bootstrap'
import Loader from '../loader/Loader';
const Services = () => {
    const [smShow, setSmShow] = useState(false);
    const [lgShow, setLgShow] = useState(false);
    const [loading, setLoading] = useState(false);

    let history = useHistory();

   const  loadServices = () => {
        setLoading(true)
        const firestore = firebase.database().ref("/CarInput");

        firestore.on('value', (snapshot) => {
            let data = { ...snapshot.val() };
            data = Object.values(data);
            console.log("data : ", data);
            setMovies(data);
            setLoading(false)
        });
     }

    useEffect(() => {
      loadServices();

    }, [])
    const [movies, setMovies] = useState([])
    const renderCard = (card, index) => {
        const responsive = {
            superLargeDesktop: {
              // the naming can be any, depends on you.
              breakpoint: { max: 4000, min: 3000 },
              items: 5
            },
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 3
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 2
            },
            mobisle: {
              breakpoint: { max: 464, min: 0 },
              items: 1
            }
          };
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
                <div className="carousel-container">
        <Carousel swipeable={false}
          draggable={false}
          // showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          // keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={700}>
          <Carousel variant="dark">

            <Carousel.Item>
            <center><Card.Img variant="top" src={card.url} style={{ width: '50%', height: '160px', borderRadius: '2px', display: 'flex' }} /></center>
            </Carousel.Item>
            <Carousel.Item>
            <center><Card.Img variant="top" src={card.url2} style={{ width: '50%', height: '160px', borderRadius: '2px', display: 'flex' }} /></center>
            </Carousel.Item>
            <Carousel.Item>
            <center><Card.Img variant="top" src={card.url3} style={{ width: '50%', height: '160px', borderRadius: '2px', display: 'flex' }} /></center>
             </Carousel.Item>
             <Carousel.Item>
            <center><Card.Img variant="top" src={card.url4} style={{ width: '50%', height: '160px', borderRadius: '2px', display: 'flex' }} /></center>
             </Carousel.Item>
          </Carousel>

        </Carousel>

      </div>
                  {/* <center><Card.Img variant="top" src={car3} style={{ width: '50%', height: '160px', borderRadius: '2px', display: 'flex' }} /></center> */}
                    
                    <Card.Body className="cardbody"> 
                        <Card.Title>
                        Title :
                        {card.title}
                        </Card.Title>
                        <Card.Text>
                            <div className="conta
                            iner-title mt-4">
                                <div className="row-title d-flex">
                                   <div className="col-title-6">
                                   <div className="col-sm"> Description: {card.description}</div>
                                   <div className="col-sm"> Price: {card.price}</div>
                                <div className="col-sm"> Year: {card.year}</div>
                                <div className="col-sm"> Kelometer:{card.km}</div>
                                </div> 
                                <div className="col-title-6 ms-5 ps-5">
                                <div className="col-sm"> Car Make:{card.make}</div>
                                <div className="col-sm"> Car Fuel: {card.fuel}</div>
                                <div className="col-sm">Registeration No: {card.regisration}</div>
                                <div className="col-sm"> Car Condition: {card.condition}</div></div> 
                                </div>
                            </div>
                            </Card.Text>
                        <Button className="bttnsss" onClick={() => setSmShow(true)} variant="primary">Go To Contact</Button> 
                        </Card.Body> 
                        </Card>

            </div>
        )
    }
    return (<div >

{/* <button className="btnsss ms-3 mt-2 mb-2"  onClick={() => history.goBack()}><IoMdArrowBack /></button> */}
        <div className="container ">
            {loading && <Loader />}
            <div className='container-fluid-car'>
                <div className='container-car'>
                    <div className="col">
                        <Button onClick={() => { history.push("/carinput") }} style={{
                            marginTop: '14px', paddingRight: "10px",
                            backgroundColor: "rgb(80 109 139)", borderRadius: '4px', color: 'white'
                        }}
                            className="btnsss btn-outline-success  ">Cars</Button>
                        <Button style={{
                            marginTop: '14px', backgroundColor: "rgb(80 109 139)",
                            borderRadius: '4px', color: 'white'
                        }}
                            className="btnsss btn-outline-success  ">Other</Button>
                        <div className="form-control " style={{
                            width: '40%', float: 'right', paddingTop: '11px',
                            backgroundColor: "rgb(248, 248, 248)", marginRight: '59px',
                            borderRadius: "4px"
                        }}>
                            <Input type="search" placeholder=" Search Services" aria-label="Seahrc"></Input>
                           
                            <Button style={{
                                position: 'absolute', marginBottom: "20px", color: 'white', borderRadius: '4px',
                                backgroundColor: "rgb(80 109 139)"
                            }}
                                className="btnsss btn-outline-success  ">Search</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="list-group" style={{ marginTop: '20px' }}>
            </div>
        </div>
      
        <div style={{ alignItems: 'center', marginTop: '20px' }}>
            {movies.map(renderCard)}
            
             </div>
             </div>)
            
};
export default Services;