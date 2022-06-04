import React from 'react'
import './Services.css';
import findjob from "../../images/findjob.png"
import carsales from "../../images/carsales.png"
import item from "../../images/item.png"
import inumber from "../../images/inumber.png"
import carser from "../../images/carser.png"
import emergencybtn from "../../images/emergencybtn.png"
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
                <button className="btnsss ms-3 mt-1 mb-1 " onClick={() => history.goBack()}><IoMdArrowBack /></button>
                </div>
                    <div  className='col-s offset-1'>
                    <h1 style={{color:"white"}}><b>SERVICES</b></h1>
                    </div>
                </div>
                <div className='row-c'>
                    <div className='plus'> <TiPlus /></div>
                    <div type="button" className='find'><h2  onClick={() => { history.push("/taxijob") }}>Find and input Jobs</h2></div>
                    <div className='imgssss'>
                        <img onClick={() => { history.push("/taxijob") }}  style={{border:"none",borderRadius:"2px",}} src={findjob} />
                    </div>
                    
                </div>

                <div className='row-c'>
                    <div className='plus '> <TiPlus /></div>
                    <div type="button" className='find'><h2 onClick={() => { history.push("/Services") }}>Car Sales</h2></div>
                    <div className='imgssss'>
                    <img onClick={() => { history.push("/Services") }} style={{border:"none",borderRadius:"2px",}} src={carsales} />                    </div>
                    
                </div>

                <div className='row-c'>
                    <div className='plus '> <TiPlus /></div>
                    <div type="button" className='find'><h2 onClick={()=>{ history.push("/OtherItem")}} >Other Item</h2></div>
                    <div className='imgssss'>
                    <img onClick={()=>{ history.push("/OtherItem")}} style={{border:"none",borderRadius:"2px",}} src={item} />   
                 </div>
                    
                </div>

                <div className='row-c'>
                    <div className='plus '> <TiPlus /></div>
                    <div type="button" className='find'><h2 onClick={() => { history.push("/VehiclesServices") }}>Vehicles Services</h2></div>
                    <div className='imgssss'>
                    <img onClick={() => { history.push("/VehiclesServices") }}  style={{border:"none",borderRadius:"2px",}} src={carser} />  
                         </div>
                    
                </div>

                <div className='row-c'>
                    <div className='plus '> <TiPlus /></div>
                    <div type="button" className='find'><h2 onClick={() => { history.push("/Emergencyservice") }}>Emergency Services</h2></div>
                    <div className='imgssss'>
                    <img  onClick={() => { history.push("/Emergencyservice") }} style={{border:"none",borderRadius:"2px",}} src={emergencybtn} />  
                         </div>
                </div>

                <div className='row-c'>
                    <div className='plus '> <TiPlus /></div>
                    <div type="button" className='find'><h2 onClick={() => { history.push("/importantcontacts") }}>Important Contacts</h2></div>
                    <div className='imgssss'>
                    <img  onClick={() => { history.push("/importantcontacts") }} style={{border:"none",borderRadius:"2px",}} src={emergencybtn} />  
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
