import React from 'react'
import "./OtherItem.css"
import { useHistory } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import emergencybtn from "../../images/emergencybtn.png"
import { TiPlus } from "react-icons/ti";
import Footer from '../footer/Footer';
import tire from "../../images/tire.png"
import appliances from "../../images/appliances.png"
import watches from "../../images/watches.png"
import sport from "../../images/sport.png"


function OtherItem() {

let history = useHistory()

    return (
        <div className='container-fluid-oitem'>
            
        <div className='container-oitem'>
       
            <div className='row-oitem'>
            
            <div className='col-bak' >
            <button className="btnsss mt-1 mb-1 " onClick={() => history.goBack()}><IoMdArrowBack /></button>
            </div>
                <div  className='col-oitem'>
                <h1 style={{color:"white"}}><b>Other Item</b></h1>
                </div>
            </div>
            <div className='row-carss'>
                <div className='plus'> <TiPlus /></div>
                <div type="button" className='find'><h2  onClick={() => { history.push() }}>Car Spare Part</h2></div>
                <div className='imgssss'>
                    <img onClick={() => { history.push() }}  style={{border:"none",borderRadius:"2px",}} src={tire} />
                </div>
                
            </div>

            <div className='row-carss'>
                <div className='plus '> <TiPlus /></div>
                <div type="button" className='find'><h2 onClick={() => { history.push() }}>Home Appliances</h2></div>
                <div className='imgssss'>
                <img onClick={() => { history.push() }} style={{border:"none",borderRadius:"2px",}} src={appliances} />                    </div>
                
            </div>

            <div className='row-carss'>
                <div className='plus '> <TiPlus /></div>
                <div type="button" className='find'><h2 onClick={()=>{ history.push()}} >Watches & Bags </h2></div>
                <div className='imgssss'>
                <img  style={{border:"none",borderRadius:"2px",}} src={watches} />   
             </div>
                
            </div>

            <div className='row-carss'>
                <div className='plus '> <TiPlus /></div>
                <div type="button" className='find'><h2 onClick={() => { history.push() }}>Sport & Outdoor</h2></div>
                <div className='imgssss'>
                <img onClick={() => { history.push() }}  style={{border:"none",borderRadius:"2px",}} src={sport} />  
                     </div>
                
            </div>

            <div className='row-c'>
                <div className='plus '></div>
                <div className='find'><h2></h2></div>
                <div className='imgssss'> </div>
                
            </div>

            
              </div>   
            <Footer />
    </div>  
    )
}

export default OtherItem
