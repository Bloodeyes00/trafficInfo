import React from "react";
import "../Home/Home.css";
import { Carousel } from 'react-bootstrap'
import { Card, Modal } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';
import { useEffect, useState } from 'react'
import firebase from "../utils/firebase";
import { storage } from '../utils/firebase'
import logo from "../../assets/logo.png";

import { useHistory } from 'react-router'
const Home = () => {
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState()
  const [progress, setProgress] = useState()

  let history = useHistory();

  const loadServices = () => {
    console.log("check 1")
    setLoading(true)
    const firestore = firebase.database().ref("/UploadAds");
    console.log("check 2")

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
    console.log("check1");
    if (e.target.files[0]) {
      console.log("check2");
      const image = e.target.files[0];
      // setImage(() => ({ image }));
      // setImage(image)

      handleUpload(image, check);


    }
  }
  const handleUpload = (image, check) => {
    const uploadTask = storage.ref(`imges/${image.name}`).put(image);
    uploadTask.on('state_changed',
      (snapshot) => {

        // progrss function ....
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setProgress(progress);
        // this.setState({ loading: true })
      },
      (error) => {
        // error function ....
        console.log(error);
      },
      () => {
        // complete function ....
        storage.ref('imges').child(image.name).getDownloadURL().then(url => {
          console.log(url);
          console.log("check", check);

          if (check == "first") {
            setUrl(url);
          }
          // if (check == "2nd") {
          //   setUrl2(url)
          // }
          // if (check == "3rd") {
          //   setUrl3(url)
          // }
          // if (check == "4th") {
          //   setUrl4(url)
          // }
          // this.props.setCurrentImgUrl(url);
          // this.ref = "";
          // this.setState({ loading: false })
        })
      });


  }
  const [movies, setMovies] = useState([]);

  const RenderCard = (card, index) => {
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
                {movies.map(card =>
                  <Carousel.Item>
                    <center><Card.Img variant="top" src={card?.url ? card.url : logo} alt="No Image"
                      style={{ width: '50%', height: '160px', borderRadius: '2px', display: 'flex' }} /></center>
                  </Carousel.Item>
                )}
                {/* <Carousel.Item>
                  <center><Card.Img variant="top" src={card.url2} style={{ width: '50%', height: '160px', borderRadius: '2px', display: 'flex' }} /></center>
                </Carousel.Item>
                <Carousel.Item>
                  <center><Card.Img variant="top" src={card.url3} style={{ width: '50%', height: '160px', borderRadius: '2px', display: 'flex' }} /></center>
                </Carousel.Item>
                <Carousel.Item>
                  <center><Card.Img variant="top" src={card.url4} style={{ width: '50%', height: '160px', borderRadius: '2px', display: 'flex' }} /></center>
                </Carousel.Item> */}
              </Carousel>

            </Carousel>

          </div>
        </Card>

      </div>
    )
  }

  return (

    <div className="container-fluid-home px-0 custom_bg_Home pb-3">

      <div className="row px-0">

        <div onClick={() => { history.push(`/chat/${11}`) }} className="img-logo mt-20">


        </div>
        <div className="container  py-2">


          <div className="container">
            <div className="row ">
              <div className='col '>
                <button type="button" className="home-btn btn-primary btn-lg " onClick={() => { history.push(`/chatroom`) }}
                >
                  <b> Company Room</b>
                </button>
              </div>
              <div className='col px-0'>
                <button type="button" onClick={() => { history.push("/Jobs") }}
                  className="home-btn btn-primary btn-lg mh-100 w-100" >
                  <b>Find jobs</b>
                </button>
              </div>
              <div className='col order-last'>
                <button type="button" onClick={() => { history.push("/Services") }}
                  className="home-btn btn-success px-0 custom_btn_company mh-100 w-100 ">
                  <b>Services</b>
                </button>
              </div>

            </div>
          </div>
          <div className="container-fluid ">
            <h2 style={{ textAlign: 'center' }}>
              Ads Components
            </h2>
          </div>
        </div>
      </div>
      <div style={{ alignItems: 'center', marginTop: '20px' }}>
        {<RenderCard />}
      </div>


    </div>
  );
}
export default Home;
