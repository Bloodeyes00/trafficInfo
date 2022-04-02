import React from "react";
import "../Home/Home.css";
import { Carousel } from 'react-bootstrap'
import { Card, Modal } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';
import { useEffect, useState } from 'react'
import firebase from "../utils/firebase";
import { storage } from '../utils/firebase'
import trafikinfo from '../../images/trafikinfo.png'


import { useHistory } from 'react-router'
import Footer from "../footer/Footer";
const Home = () => {
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState()
  const [progress, setProgress] = useState()

  let history = useHistory();
 
  const loadHome = () => {
    setLoading(true)
    const firestore = firebase.database().ref("/UploadAds");

    firestore.on('value', (snapshot) => {
      let data = { ...snapshot.val() };
      data = Object.values(data);
      setMovies(data);
      setLoading(false)
    });
  }

  useEffect(() => {
    loadHome();
    return {

    }
  }, [])
  const handleChange = (e, check) => {
    if (e.target.files[0]) {
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
          console.log("check", check);

          if (check == "first") {
            setUrl(url);
          }
         
        })
      });


  }
  const [movies, setMovies] = useState([]);

  const RenderCard = (card, index) => {
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

        <Card  key={index} style={{ display: 'flex', marginBottom: '5px', width: '18rem'  }}>
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
                {movies.map(card =>
                  <Carousel.Item>
                    <center><Card.Img variant="top" src={card?.url ? card.url : trafikinfo}
                     alt="No Image" className="cardimgs1"
                    />
                    </center>
                  </Carousel.Item>
                )}
              </Carousel>

            </Carousel>

          </div>
        </Card>

      </div>
    )
  }

  return (

    <div className="container-home">
      <div onClick={() => { history.push(`/chat/${11}`) }} className="img-logo">
       </div>
  
      <div className="row-home" style={{ alignItems: 'center', marginTop: '0px', borderRadius:"50px" }}>
        {<RenderCard />}
      </div>

<Footer />
    </div>
  );
}
export default Home;
