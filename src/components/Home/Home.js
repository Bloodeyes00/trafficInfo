import React from 'react'
import "../Home/Home.css"
import taxi1 from '../../assets/Home/taxi1.jpeg'
import taxi2 from '../../assets/Home/taxi2.jpeg'
import taxi3 from '../../assets/Home/taxi3.jpeg'
import taxi4 from '../../assets/Home/taxi4.jpeg'
export default function Home() {
    return (
        <div className='container-fluid custom_bg_Home'>
        <div className='container '>
            <h3>Start SocialLising</h3>
            <h4>Join Groups</h4>
            <div className='row'>
                <div className='col-sm-6 col-xs-6'> 
                <img src={taxi1} className='img-thumbnail' alt='taxi1' />
          
                <h1 style={{fontsize:"50px"}}>I am John Doe</h1>
                 
                
                </div>
                <div className='col-sm-6 col-xs-6'>
                    <img src={taxi2} className='img-thumbnail' alt='taxi2' />
                </div>
            </div>
            <div className='row mt-3'>
                <div className='col-sm-6 col-xs-6'> 
                    <img src={taxi3} className='img-thumbnail custom_img' alt='taxi1'/>
                </div>
                <div className='col-sm-6 col-xs-6'>
                    <img src={taxi4} className='img-thumbnail' alt='taxi2' />
                </div>
            </div>
        </div>
      
    </div>
    )
}
