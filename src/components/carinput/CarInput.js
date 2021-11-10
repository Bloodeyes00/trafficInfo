import React from 'react'
import './CarInput.css'
import camra from "../carinput/camra.png"
function CarInput() {
    return (
        <div className="container-fluid-carinput">
             <h1 style={{ textAlign: "center" }}>POST YOUR AD</h1>
              <div className="container-carinput">
              <div className="row-header ms-3 mt-1">
          <h3 >SELECTED CATEGORY</h3>
          <p className="form-text text-muted mt-4" > Vehicles / Cars</p>
          </div>
          <div className="row-main ms-3">
          <h3>INCLUDE SOME DETAILS</h3>
          <div className="form-group">
            <p>Ad title</p>
            <input className="form-controlsss" id="exampleInputtext" aria-describedby="textHelp" placeholder="" />
            <p className="form-text text-muted">Mention the key features of your item (e.g. brand, model, age, type)</p>
          </div>

          <div className="form-group">
            <p>Description</p>
            <textarea id="description" name="description" spellcheck="false" className="form-contrlsss" maxlength="4096" autocomplete="off"></textarea>
            <p className="form-text text-muted">Include condition, features and reason for selling</p>
          </div>
    
          <p className="form-text text-muted">Year</p>
          <input type="" className="form-controlsss" id="exampleInputtext" aria-describedby="textHelp" placeholder="" />
          <br/>
          <br/>
          <p className="form-text text-muted">KM's Driven</p>
          <input type="" className="form-controlsss" id="exampleInputtext" aria-describedby="textHelp" placeholder="" />
          <br/>
          <br/>
          <p className="form-text text-muted">Make</p>
          <select className="selectes mt-2" name="Job" id="Job">
            <option value="other">  </option>
            <option value="Day">Audi</option>
            <option value="Night">BMW</option>
            <option value="Night">Honda</option>
            <option value="Night">Daewoo</option>
            <option value="Night">Changan</option>
            <option value="Night">toyota</option>
            <option value="Night">Other Brands</option>
             </select>
             <br/>
             <br/>
             <div className="row-Condition mt-3">
        
             <p className="form-text text-muted">Fuel</p>

          <select className="Conditions mt-2" name="Job" id="Job">
            <option className="abc" value="other">  </option>
            <option className="abc" value="Day">CNG</option>
            <option className="abc" value="Day">Diesel</option>
            <option className="abc" value="other">Petrol</option>
            <option className="abc" value="other">Hybrid</option>
            <option className="abc" value="other">LPG</option>


            </select>
            </div>
            <br/>


       <p className="form-text text-muted">Registered in</p>
          <select className="selectes mt-2" name="Job" id="Job">
            <option value="space">  </option>
            <option value="abbottabad">Abbottabad</option>
            <option value="ahmadpureast">Ahmadpur East</option>
            <option value="alimasjid">Ali Masjid</option>
            <option value="arifwala">Arifwala</option>
            <option value="askoley">Askoley</option>
            <option value="attock">Attock</option>
            <option value="badin">Badin</option>
            <option value="bagh">Bagh</option>
            <option value="bahawalnagar">Bahawalnagar</option>
            <option value="bahawalpur">Bahawalpur</option>
            <option value="bannu">Bannu</option>
            <option value="batagram">Batagram</option>
            <option value="bela">Bela</option>
            <option value="bhakkar">Bhakkar</option>
            <option value="bhimber">Bhimber</option>
            <option value="buner">Buner</option>
            <option value="burewala">Burewala</option>
            <option value="charsadda">Charsadda</option>
            <option value="chichawatni">Chichawatni</option>
            <option value="chilas">Chilas</option>
            <option value="chiniot">Chiniot</option>
            <option value="chishtianmandi">Chishtian Mandi</option>
            <option value="chitral">Chitral</option>
            <option value="dadu">Dadu</option>
            <option value="darraadamkhel">Darra Adam Khel</option>
            <option value="daska">Daska</option>
            <option value="deraghazikhan">Dera Ghazi Khan</option>
            <option value="deraismailkhan">Dera Ismail Khan</option>
            <option value="faisalabad">Faisalabad</option>
            <option value="ghanche">Ghanche</option>
            <option value="ghizer">Ghizer</option>
            <option value="gilgit">Gilgit</option>
            <option value="gojra">Gojra</option>
            <option value="gujranwala">Gujranwala</option>
            <option value="gujrat">Gujrat</option><option value="gwadar">Gwadar</option><option value="hafizabad">Hafizabad</option><option value="hala">Hala</option><option value="hangu">Hangu</option><option value="haripur">Haripur</option><option value="hasilpur">Hasilpur</option><option value="havelilakha">Haveli lakha</option><option value="hyderabad">Hyderabad</option><option value="islamabad">Islamabad</option><option value="jacobabad">Jacobabad</option><option value="jamrud">Jamrud</option><option value="jamshoro">Jamshoro</option><option value="jandola">Jandola</option><option value="jaranwala">Jaranwala</option><option value="jhangsadar">Jhang Sadar</option><option value="jhelum">Jhelum</option><option value="jiwani">Jiwani</option><option value="kalat">Kalat</option><option value="kamoke">Kamoke</option><option value="kandhura">Kandhura</option><option value="karachi">Karachi</option><option value="karak">Karak</option><option value="kasur-punjab">Kasur</option><option value="khairpur">Khairpur</option><option value="khanewal">Khanewal</option><option value="khanpur">Khanpur</option><option value="khaplu">Khaplu</option><option value="khushab">Khushab</option><option value="khuzdar">Khuzdar</option><option value="kohat">Kohat</option><option value="kohistan">Kohistan</option><option value="kot-addu">Kot Addu</option><option value="lahore">Lahore</option><option value="lakkimarwat">Lakki Marwat</option><option value="landikotal">Landi Kotal</option><option value="larkana">Larkana</option><option value="lasbela">Lasbela</option><option value="layyah">Layyah</option><option value="lowerdir">Lower Dir</option><option value="malakand">Malakand</option><option value="mandi-bahauddin">Mandi Bahauddin</option><option value="manshera">Mansehra</option><option value="mardan">Mardan</option><option value="mianwali">Mianwali</option><option value="mingaora">Mingaora</option><option value="miramshah">Miram Shah</option><option value="mirpur">Mirpur</option><option value="mirpurkhas">Mirpur Khas</option><option value="mithi">Mithi</option><option value="multan">Multan</option><option value="muridike">Muridike</option><option value="muzaffarabad">Muzaffarabad</option><option value="muzaffargarh">Muzaffargarh</option><option value="nawabshah">Nawabshah</option><option value="nowshera">Nowshera</option>
            <option value="nowshera">Nowshera</option><option value="okara">Okara</option><option value="ormara">Ormara</option><option value="pakpattan">Pakpattan</option><option value="parachinar">Parachinar</option><option value="pasni">Pasni</option><option value="peshawar">Peshawar</option><option value="pirmahal">Pirmahal</option><option value="quetta">Quetta</option><option value="rahimyarkhan">Rahimyar Khan</option><option value="ratodero">Ratodero</option><option value="rawalpindi">Rawalpindi</option><option value="sadiqabad">Sadiqabad</option><option value="safdarabad">Safdar Abad</option>
             </select>
             <br/>
             <br/>
        </div>
        <div className="row-Condition ms-3 mt-3">
        <p className="form-text text-muted">Condition</p>


          <select className="Conditions mt-2" name="Job" id="Job">
            <option className="abc" value="other">  </option>
            <option className="abc" value="Day">New</option>
            <option className="abc" value="Day">Used</option>
            </select>
            </div>
       <br/>
       <br/>

<h3 className="price ms-3">SET A PRICE</h3>
          <div className="form-group ms-3">
            <p>Price</p>
            <input className="form-controlsss" id="exampleInputtext" aria-describedby="textHelp" placeholder="Rs" />
</div>


       
           <h3 className="upload ms-3 mt-3">UPLOAD UP TO 4 PHOTOS</h3>
           <div className="row-camra pb-3 d-flex">
            <div className="col-camra sm-4">
           <div className="camra ms-3 mt-4">
           {/* <img style={{height:"60px", width:"60px"}} src={camra} alt="" /> */}
           <input className="input-cars"  style={{height:"100%",width:"100%",}} type="file" />
           </div>
           </div>
           <div className="col-camra sm-4">
           <div className="camra ms-3 mt-4 ">
           {/* <img style={{height:"60px", width:"60px"}} src={camra} alt="" /> */}
           <input className="input-cars"  style={{height:"100%",width:"100%"}} type="file"/>
           </div>
           </div>
           <div className="col-camra sm-4">
           <div className="camra d-flex ms-3 mt-4">
           <input className="input-cars"  style={{height:"120%",width:"120%"}} type="file"/>
           </div>
           </div>
           <div className="col-camra ">
           <div className="camra d-flex ms-3 mt-4">
           {/* <img style={{height:"60px", width:"60px"}} src={camra} alt="" /> */}
           <input className="input-cars" style={{height:"100%",width:"100%"}} type="file"/>
           </div>
           </div>
          
           </div>
   
         <div className="let mt-3 ms-3">
          <h4>Let's verify your account</h4>
          <p>We will send you a confirmation code by sms on the next step.</p>

          <p className="form-text text-muted mt-3">Mobile Phone Number</p>
          <input type="number" className="form-controlsss" id="exampleInputtext" aria-describedby="textHelp" placeholder="+92" />
          <p>Show my phone number in ads</p>
        </div>
        <center>
          <button className="btnnss"><b>Post now</b></button>
        </center>
        <br />
        <br />

      
          <br/>
          <br/>

        <br/>
        
                 <br/> 
                </div> 
                <br/>
                 <br/>   
        </div>
    )
}

export default CarInput
