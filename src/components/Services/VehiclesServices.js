import React from 'react'
import './Services.css';
import tire from "../../images/tire.png"
import towing from "../../images/towing.png"
import carwash from "../../images/carwash.png"
import cardealers from "../../images/cardealers.png"
import carser from "../../images/carser.png"
import { TiPlus } from "react-icons/ti";
import { IoMdArrowBack } from "react-icons/io";
import { useHistory } from 'react-router'
import Footer from '../footer/Footer';


function MainPage() {


    let history = useHistory()

    
    return (
        <div className='container-fluid-s'>
            
            <div className='container-s'>
           
                <div className='row-s'>
                
                <div className='col-back ' >
                <button className="btnsss ms-5 mt-1 mb-1 " onClick={() => history.goBack()}><IoMdArrowBack /></button>
                </div>
                    <div  className='col-s '>
                    <h1 style={{color:"white"}}><b>Vehicles Services</b></h1>
                    </div>
                </div>
                <div className='row-c'>
                    <div className='plus'> <TiPlus /></div>
                    <div type="button" className='find'><h2  onClick={() => { history.push("/vehicleservices") }}>Mechanics</h2></div>
                    <div className='imgssss'>
                        <img onClick={() => { history.push("/vehicleservices") }}  style={{border:"none",borderRadius:"2px",}} src={carser} />
                    </div>
                    
                </div>

                <div className='row-c'>
                    <div className='plus '> <TiPlus /></div>
                    <div type="button" className='find'><h2 onClick={() => { history.push("/vehicleservices") }}>Car Sapareparts</h2></div>
                    <div className='imgssss'>
                    <img onClick={() => { history.push("/vehicleservices") }} style={{border:"none",borderRadius:"2px",}} src={carser} />                    </div>
                    
                </div>

                <div className='row-c'>
                    <div className='plus '> <TiPlus /></div>
                    <div type="button" className='find'><h2 onClick={()=>{ history.push("/vehicleservices")}} >Car Wash</h2></div>
                    <div className='imgssss'>
                    <img  style={{border:"none",borderRadius:"2px",}} src={carwash} />   
                 </div>
                    
                </div>

                <div className='row-c'>
                    <div className='plus '> <TiPlus /></div>
                    <div type="button" className='find'><h2 onClick={() => { history.push("/vehicleservices") }}>Car Towing</h2></div>
                    <div className='imgssss'>
                    <img onClick={() => { history.push("/vehicleservices") }}  style={{border:"none",borderRadius:"2px",}} src={towing} />  
                         </div>
                    
                </div>

                <div className='row-c'>
                    <div className='plus '> <TiPlus /></div>
                    <div type="button" className='find'><h2 onClick={() => { history.push("/vehicleservices") }}>Car Dealers</h2></div>
                    <div className='imgssss'>
                    <img  onClick={() => { history.push("/vehicleservices") }} style={{border:"none",borderRadius:"2px",}} src={cardealers} />  
                         </div>
                </div>

                <div className='row-c'>
                    <div className='plus '> <TiPlus /></div>
                    <div type="button" className='find'><h2 onClick={() => { history.push("/vehicleservices") }}>Tier Dealers</h2></div>
                    <div className='imgssss'>
                    <img  onClick={() => { history.push("/vehicleservices") }} style={{border:"none",borderRadius:"2px",}} src={tire} />  
                         </div>
                </div>

                <div className='row-c'>
                    <div className='plus '> <TiPlus /></div>
                    <div className='find'><h2></h2></div>
                    <div className='imgssss'> </div>
                    
                </div>

                
                  </div>   
                <Footer />
        </div>  
     
    )
}

export default MainPage
