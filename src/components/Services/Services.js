import { Input } from '@material-ui/core';
import Button from '@restart/ui/esm/Button';
import React from 'react'
import '../Services/Services.css'
import { Card } from 'react-bootstrap';
import car3 from '../Services/car3.jpg'
import car4 from '../Services/car4.jpg'
import car5 from '../Services/car5.jpg'
import { Carousel } from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';

const Services = () => {
    const cardinfo = [
    { image: "", title: "Motor", price: 'RS:2000000', model: 'Model:2002', registeration: 'Reg/No:23232' },
    { image: "", title: "Motor",  price: 'RS:2000000', model: 'Model:2002', registeration: 'Reg/No:23232' },
    { image: "", title: "Motor",  price: 'RS:2000000', model: 'Model:2002', registeration: 'Reg/No:23232' },
    { image: "", title: "Motor",  price: 'RS:2000000', model: 'Model:2002', registeration: 'Reg/No:23232' },
    { image: "", title: "Motor",  price: 'RS:2000000', model: 'Model:2002', registeration: 'Reg/No:23232' },];
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
        <div className="container-card">
        <Card className="cardsss" style={{ width: '18rem' }} key={index} style={{ display: 'flex', marginBottom: '5px' }}>
       
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
            <center><Card.Img variant="top" src={car3} style={{ width: '60%', height: '150px', borderRadius: '2px', display: 'flex', marginTop:"10px" }} /></center>
            </Carousel.Item>
            <Carousel.Item>
            <center><Card.Img variant="top" src={car4} style={{ width: '60%', height: '150px', borderRadius: '2px', display: 'flex', marginTop:"10px" }} /></center>
            </Carousel.Item>
            <Carousel.Item>
            <center><Card.Img variant="top" src={car5} style={{ width: '60%', height: '150px', borderRadius: '2px', display: 'flex', marginTop:"10px" }} /></center>
            </Carousel.Item>
          </Carousel>
        </Carousel>

      </div>
            {/* <center><Card.Img variant="top" src={car3} style={{ width: '60%', height: '150px', borderRadius: '2px', display: 'flex', marginTop:"10px" }} /></center> */}
           
            <Card.Body className="body">
                <Card.Title>{card.title}</Card.Title>
                <Card.Text> {card.text}
                    <div className="col">
                        <div className="col-sm"> {card.price}
                        
                        </div>
                        <div className="col-sm"> {card.model}
                        </div>
                        <div className="col-sm"> {card.registeration}
                        </div>
                    </div>
                </Card.Text>
                <Button className="btnsss" variant="primary">Go To Contact</Button> 
                </Card.Body>
                 </Card>

                 
                
                </div>
                
                )
    }
    return (
        <div >
            <div className="container ">
                <div className='container-fluid-car'>
                    <div className='container-car'>
                        <div className="col">
                             <Button style={{ marginTop: '14px', paddingRight: "10px", backgroundColor: "rgb(80 109 139)", borderRadius: '4px', color: 'white' }}
                            className="btn btn-outline-success  ">Cars</Button> 
                            <Button style={{
                                marginTop: '14px', backgroundColor: "rgb(80 109 139)",
                                borderRadius: '4px', color: 'white'
                            }} className="btn btn-outline-success  ">Other</Button>
                             <div className="form-control "
                                style={{width: '166px', float: 'right', paddingTop: '11px', backgroundColor: "rgb(248, 248, 248)", marginRight: '59px',
                                    borderRadius: "4px"}}>
                                     <Input type="search" placeholder=" Search Services" aria-label="Seahrc"></Input>
                                <Button style={{ position: 'fixed', marginBottom: "20px", color: 'white', borderRadius: '4px', backgroundColor: "rgb(80 109 139)" }}
                                    className="btn btn-outline-success  ">Search</Button> 
                                    </div> 
                                    </div>
                                     </div>
                                      </div>
                <div className="list-group" style={{ marginTop: '20px' }}>
                     </div> 
                     </div>

            <div style={{ alignItems: 'center', marginTop: '20px' }}>
                {cardinfo.map(renderCard)} 
                </div>
                 </div>
                 )
};
export default Services;