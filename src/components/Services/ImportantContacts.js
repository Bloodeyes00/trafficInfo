import React from 'react';
import './Services.css'
import brainspk from "../../images/brainspk.jpg"
import trafikinfo from "../../images/trafikinfo.png"
import pakfon from "../../images/pakfon.png"
import apca from "../../images/apca.png"
import { useHistory } from 'react-router-dom';
import { IoMdArrowBack } from "react-icons/io";


function ImportantContacts() {
    let history = useHistory()

  return (
  <div className='container-impotrant'>
 <button className="btnsss ms-3 mt-1 mb-1 " style={{color:"black"}} onClick={() => history.goBack()}><IoMdArrowBack /></button>

      <br />
      <h1>Important Contacts</h1>
      <div className='row-important pt-4 ms-2'>
        <div className='col-4 col-important'>
            <img className='imagess' src={brainspk} />
            <div className='txts'>
                <>2135415</>
                <br />
                <>branspk.com</>
                <br />
                </div>
        </div>
        <div className='col-4 col-important'>
        <img className='imagess' src={brainspk} />
        <div className='txts'>
                <>2135415</>
                <br />
                <>branspk.com</>
                <br />
                </div>
        </div>
        <div className='col-4 col-important'>
        <img className='imagess' src={brainspk} />
        <div className='txts'>
                <>2135415</>
                <br />
                <>branspk.com</>
                <br />
                </div>
        </div>
      </div>

      <div className='row-important pt-4 ms-2'>
        <div className='col-4 col-important'>
        <img className='imagess' src={trafikinfo} />
        <div className='txts'>
                <>2135425</>
                <br />
                <>trafikinfo.com</>
                <br />
                </div>
        </div>
        <div className='col-4 col-important'>
        <img className='imagess' src={trafikinfo} />
        <div className='txts'>
                <>2135425</>
                <br />
                <>trafikinfo.com</>
                <br />
                </div>
        </div>
        <div className='col-4 col-important'>
        <img className='imagess' src={trafikinfo} />
        <div className='txts'>
                <>2135425</>
                <br />
                <>trafikinfo.com</>
                <br />
                </div>
        </div>
      </div>

      <div className='row-important pt-4 ms-2'>
        <div className='col-4 col-important'>
        <img className='imagess' src={pakfon} />
        <div className='txts'>
                <>2135415</>
                <br />
                <>pakfon.com</>
                <br />
                </div>
        </div>
        <div className='col-4 col-important'>
        <img className='imagess' src={pakfon} />
        <div className='txts'>
                <>2135415</>
                <br />
                <>pakfon.com</>
                <br />
                </div>
        </div>
        <div className='col-4 col-important'>
        <img className='imagess' src={pakfon} />
        <div className='txts'>
                <>2135415</>
                <br />
                <>pakfon.com</>
                <br />
                </div>
        </div>
      </div>

      <div className='row-important pt-4 ms-2'>
        <div className='col-4 col-important'>
        <img className='imagess' src={apca} />
        <div className='txts'>
                <>2135415</>
                <br />
                <>deofswabi.com</>
                <br />
                </div>
        </div>
        <div className='col-4 col-important'>
        <img className='imagess' src={apca} />
        <div className='txts'>
                <>2135415</>
                <br />
                <>deofswabi.com</>
                <br />
                </div>
        </div>
        <div className='col-4 col-important'>
        <img className='imagess' src={apca} />
        <div className='txts'>
                <>2135415</>
                <br />
                <>deofswabi.com</>
                <br />
                </div>
        </div>
      </div>
  </div>
  );
}

export default ImportantContacts;
