import React from 'react'
import findjob from "../../images/findjob.png"
import driver from "../../images/driver.png"
import busdriver from "../../images/busdriver.png"
import worker from "../../images/worker.png"
import carser from "../../images/carser.png"
import factory from "../../images/factory.png"
import technician from "../../images/technician.png"
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
                    <h1 style={{color:"white"}}><b>Input & Find Job</b></h1>
                    </div>
                </div>
                <div className='row-c'>
                    <div className='plus'> <TiPlus /></div>
                    <div type="button" className='find'><h2  onClick={() => { history.push("/Jobs") }}> Input & Find Job</h2></div>
                    <div className='imgssss'>
                        <img onClick={() => { history.push("/Jobs") }}  style={{border:"none",borderRadius:"2px",}} src={findjob} />
                    </div>
                    
                </div>

                <div className='row-c'>
                    <div className='plus '> <TiPlus /></div>
                    <div type="button" className='find'><h2 onClick={() => { history.push("/jobinput") }}>Taxi Drivers</h2></div>
                    <div className='imgssss'>
                    <img onClick={() => { history.push("/jobinput") }} style={{border:"none",borderRadius:"2px",}} src={driver} />                    </div>
                    
                </div>

                <div className='row-c'>
                    <div className='plus '> <TiPlus /></div>
                    <div type="button" className='find'><h2 onClick={()=>{ history.push("/jobinput")}} >Truck,Bud,Bus drivers</h2></div>
                    <div className='imgssss'>
                    <img  style={{border:"none",borderRadius:"2px",}} src={busdriver} />   
                 </div>
                    
                </div>

                <div className='row-c'>
                    <div className='plus '> <TiPlus /></div>
                    <div type="button" className='find'><h2 onClick={() => { history.push("/jobinput") }}>Mechanic</h2></div>
                    <div className='imgssss'>
                    <img onClick={() => { history.push("/jobinput") }}  style={{border:"none",borderRadius:"2px",}} src={carser} />  
                         </div>
                    
                </div>

                <div className='row-c'>
                    <div className='plus '> <TiPlus /></div>
                    <div type="button" className='find'><h2 onClick={() => { history.push("/jobinput") }}>Factory,Wherehouse Worker</h2></div>
                    <div className='imgssss'>
                    <img  onClick={() => { history.push("/jobinput") }} style={{border:"none",borderRadius:"2px",}} src={factory} />  
                         </div>
                </div>

                <div className='row-c'>
                    <div className='plus '> <TiPlus /></div>
                    <div type="button" className='find'><h2 onClick={() => { history.push("/jobinput") }}>Construction, painters</h2></div>
                    <div className='imgssss'>
                    <img  onClick={() => { history.push("/jobinput") }} style={{border:"none",borderRadius:"2px",}} src={worker} />  
                         </div>
                </div>

                <div className='row-c'>
                    <div className='plus '> <TiPlus /></div>
                    <div type="button" className='find'><h2 onClick={() => { history.push("/jobinput") }}>Technicians, IT</h2></div>
                    <div className='imgssss'>
                    <img  onClick={() => { history.push("/jobinput") }} style={{border:"none",borderRadius:"2px",}} src={technician} />  
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
