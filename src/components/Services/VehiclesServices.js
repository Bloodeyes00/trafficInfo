import React from 'react'
import './Services.css'

function VehiclesServices() {
    return (
        <div className='container-fluid-Vehicles'>
            <div className='container-vehicles ms-4'>
                <div className='row-vehicles'>
                    <h1 className='crsev'>CAR SERVICES</h1>
                    <p style={{color:"white"}}>Book Your Car Service Online</p>
                </div>

                <div className='row-vehinput'></div>
                &nbsp;<b>Name</b>
            <input className="form-controlsss ms-1" id="exampleInputtext" aria-describedby="textHelp" placeholder=""/>

            &nbsp;<b>Phone</b>
            <input className="form-controlsss ms-1" id="exampleInputtext" aria-describedby="textHelp" placeholder=""/>

            &nbsp;<b>Email</b>
            <input className="form-controlsss ms-1" id="exampleInputtext" aria-describedby="textHelp" placeholder=""/>

            &nbsp;<b>Vehicles Make</b>
            <input className="form-controlsss ms-1" id="exampleInputtext" aria-describedby="textHelp" placeholder=""/>

            &nbsp;<b>Vehicles Model</b>
            <input className="form-controlsss ms-1" id="exampleInputtext" aria-describedby="textHelp" placeholder=""/>

            &nbsp;<b>Vehicles Reg</b>
            <input className="form-controlsss ms-1" id="exampleInputtext" aria-describedby="textHelp" placeholder=""/>

            &nbsp;<b>Date</b>
            <input className="form-controlsss ms-1" id="exampleInputtext" aria-describedby="textHelp" placeholder=""/>
            </div>

            <div className='row-time'>
            <p className="form-text text-muted">Make</p>
          <select className="selectes mt-2" name="Job" id="Job">
            <option value="other">  </option>
            <option value="Audi">Audi</option>
            <option value="BMW">BMW</option>
            <option value="Honda">Honda</option>
            <option value="Daewoo">Daewoo</option>
            <option value="Changan">Changan</option>
            <option value="toyota">toyota</option>
            <option value="Other Brands ">Other Brands</option>
          </select>
            </div>

        </div>
    )
}

export default VehiclesServices
