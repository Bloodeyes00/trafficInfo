import React from 'react'
import './Services.css';
import findjob from "../../images/findjob.png"
import carsales from "../../images/carsales.png"
import item from "../../images/item.png"
import inumber from "../../images/inumber.png"
import { TiPlus } from "react-icons/ti";
import Footer from '../footer/Footer';


function MainPage() {
    return (
        <div className='container-fluid-s'>
            
            <div className='container-s'>
           
                <div className='row-s'>
                    <h1><b>SERVICES</b></h1>
                </div>
                <div className='row-c'>
                    <div className='plus '> <TiPlus /></div>
                    <div className='find'><h2> Input & Find Job</h2></div>
                    <div className='imgsss'>
                        <img  style={{border:"none",borderRadius:"2px",}} src={findjob} />
                    </div>
                    
                </div>

                <div className='row-c'>
                    <div className='plus '> <TiPlus /></div>
                    <div className='find'><h2>Car Sales</h2></div>
                    <div className='imgsss'>
                    <img  style={{border:"none",borderRadius:"2px",}} src={carsales} />                    </div>
                    
                </div>

                <div className='row-c'>
                    <div className='plus '> <TiPlus /></div>
                    <div className='find'><h2>Other Item</h2></div>
                    <div className='imgsss'>
                    <img  style={{border:"none",borderRadius:"2px",}} src={item} />                    </div>
                    
                </div>

                <div className='row-c'>
                    <div className='plus '> <TiPlus /></div>
                    <div className='find'><h2>Information Numbers</h2></div>
                    <div className='imgsss'>
                    <img  style={{border:"none",borderRadius:"2px",}} src={inumber} />                    </div>
                    
                </div>

                <div className='row-c'>
                    <div className='plus '> <TiPlus /></div>
                    <div className='find'><h2></h2></div>
                    <div className='imgsss'> </div>
                    
                </div>

                <div className='row-c'>
                    <div className='plus '> <TiPlus /></div>
                    <div className='find'><h2></h2></div>
                    <div className='imgsss'> </div>
                    
                </div>
                <div className='row-c'>
                    <div className='plus '> <TiPlus /></div>
                    <div className='find'><h2></h2></div>
                    <div className='imgsss'> </div>
                    
                </div>

                
                  </div>   
                  {/* <Footer /> */}
        </div>  
     
    )
}

export default MainPage
