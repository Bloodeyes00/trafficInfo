import React, { isValidElement, useEffect, useState } from 'react'
import { Textarea } from 'react-bootstrap-icons'
import "./Taxijob.css"
// import Trafficinfo1 from "../../images/Trafficinfo1.png"
import { useHistory } from 'react-router-dom';
import { IoMdArrowBack } from "react-icons/io";
import firebase from "../utils/firebase";

function TaxiJobSeeker() {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([])
  const [updateexpernices, setupdateexpernices] = useState("");
    const [updatedetail, setUpdateDetail] = useState("");
    const [updatecellnumber, setUpdateCellNumber] = useState("");
    const [updateemail, setUpdateEmail] = useState("");


  let history = useHistory()
  const loadServices = () => {
    console.log("taxii12")
    setLoading(true)
    const firestore = firebase.database().ref("/TaxiJobseeker");
    console.log("taxii33")

    firestore.on('value', (snapshot) => {
      let data = { ...snapshot.val() };
      data = Object.values(data);
      console.log("data : ", data);
      setMovies(data);
      setLoading(false)
    });
  }

  useEffect(() => {
    loadServices();
    return {

    }
  }, [])

  const handleUserEdit = () =>{
    const firestore = firebase.database().ref("/TaxiJobseeker");
    let data = {
        updateexpernices: updateexpernices,
        updatedetail: updatedetail,
        updatecellnumber: updatecellnumber,
        updateemail: updateemail,

  };
  firestore
  .push(data)
  .then((res) => {
      history.push('/TaxiJobseeker');
      console.log("res after", res);
  })
  .catch((e) => {
      console.log("error in pushing data :", e);
  });


}


  return (

    <div className='container-taxijobs'>
      <div className='container-taxi'>
        <button style={{ color: "black" }}
          className="btnsss ms-3 mt-1 mb-1 "
          onClick={() => history.goBack()}>
          <IoMdArrowBack />
        </button>


        <br />
        <div className='row-taxidetailss ms-3'>
          <table className=" table ">
            <thead>
              <tr>
                <th scope="col">Email</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Expernices</th>
                <th scope="col">Details</th>
                <th>User edit</th>


              </tr>
            </thead>
            <tbody>
              {movies?.length > 0 && movies?.map((item, index) =>
                < tr key={index} >
                  <th scope="col"> {item?.email} </th>
                  <th scope="col">{item?.cellnumber}</th>
                  <th scope="col">{item?.expernices}</th>
                  <th scope="col">{item?.detail}</th>

                  <th>  <button className='bt' onClick={() => handleUserEdit()}>User Edit</button> </th>
                </tr >
              )}

            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
export default TaxiJobSeeker