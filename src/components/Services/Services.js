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
import { storage } from '../utils/firebase'
import trafikinfo from '../../images/trafikinfo.png';

const Services = () => {
    const [smShow, setSmShow] = useState(false);
    const [lgShow, setLgShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [url, setUrl] = useState()
    const [progress, setProgress] = useState()

    let history = useHistory();

   const  loadServices = () => {
       console.log("check 3")
        setLoading(true)    
        const firestore = firebase.database().ref("/CarInput");
        console.log("check 4")

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
return {

}
    }, [])
    const handleChange = (e, check) => {
        console.log("check 1");
        if (e.target.files[0]) {
          console.log("check 2");
          const image = e.target.files[0];
    
          handleUpload(image, check);
    
    
        }
      }
      const handleUpload = (image, check) => {
        const uploadTask = storage.ref(`imges/${image.name}`).put(image);
        uploadTask.on('state_changed',
          (snapshot) => {
    
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            setProgress(progress);
          },
          (error) => {
            console.log(error);
          },
          () => {
            storage.ref('imges').child(image.name).getDownloadURL().then(url => {
              console.log(url);
              console.log("check 5", check);
    
              if (check == "first") {
                setUrl(url);
              }
          
            })
          });
    
    
      }
    const [movies, setMovies] = useState([])
    const renderCard = (card, index) => {
        const responsive = {
            superLargeDesktop: {
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
          responsive={responsive}
          ssr={true} 
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          customTransition="all .5"
          transitionDuration={700}>
          <Carousel variant="dark">

            <Carousel.Item>
            <center><Card.Img className='cardimg0' variant="top" src={card?.url ? card.url: trafikinfo} /></center>
            </Carousel.Item>
            <Carousel.Item>
            <center><Card.Img className='cardimg0' variant="top" src={card?.url2 ? card.url: trafikinfo} /></center>
            </Carousel.Item>
            <Carousel.Item>
            <center><Card.Img className='cardimg0' variant="top" src={card?.url3 ? card.url: trafikinfo} /></center>
             </Carousel.Item>
             <Carousel.Item>
            <center><Card.Img className='cardimg0' variant="top" src={card?.url4 ? card.url: trafikinfo}  /></center>
             </Carousel.Item>
          </Carousel>

        </Carousel>

      </div>
                    
                    <Card.Body className="cardbody"> 
                        <Card.Title>
                        Title :
                        {card.title}
                        </Card.Title>
                        <Card.Text>
                            <div className="container-title mt-4">
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
     
      <div className="container ">
      <div className='abc1'>
            <button style={{color:"black"}} className="btnsss ms-3 mt-1 mb-1 " onClick={() => history.goBack()}><IoMdArrowBack /></button>
      </div>
            {loading && <Loader />}
            <div className='container-fluid-car'>
                <div className='container-car'>
                    <div className="col">
                      <button className='btns'  onClick={() => { history.push("/carinput") }}>Cars</button>
                        {/* <Button onClick={() => { history.push("/carinput") }}
                            className="btns ">Cars</Button> */}
                        <Button
                        
                            className="btns  ">Other</Button>
                        <div className="form-controlsa " >
                            <Input type="search" placeholder=" Search Services" aria-label="Seahrc"></Input>
                           
                            <Button style={{
                                position: 'absolute', marginBottom: "20px", color: 'white', borderRadius: '4px',
                                backgroundColor: "rgb(80 109 139)"
                            }}
                                className="btnsss ">Search</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="list-group" style={{ marginTop: '20px' }}>
            </div>
        </div>
      
        <div style={{ alignItems: 'center', marginTop: '20px' }}>
            {movies.map(renderCard)}
            <br />
            <br />
            <br />
            <br />
             </div>
             </div>
             )
            
};
export default Services;