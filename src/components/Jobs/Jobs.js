
import "../Jobs/Jobs.css"
import React, { Component, useEffect, useState } from 'react'
import { getJobs } from '../Jobs/JobInput'
import { Input } from '@material-ui/core';
import Button from '@restart/ui/esm/Button';
import { useHistory } from "react-router";
import firebase from "../utils/firebase";
import { IoMdArrowBack } from "react-icons/io";
import Loader from "../loader/Loader";



function Jobs() {

    const [loading, setLoading] = useState(false)

    let history = useHistory();

    const loadJobs = () => {
        setLoading(true)
        const firestore = firebase.database().ref("/Jobs");

        firestore.on('value', (snapshot) => {
            let data = { ...snapshot.val() };
            data = Object.values(data);
            console.log("data : ", data);
            setMovies(data);
            setLoading(false)
        });
    }

    useEffect(() => {
        loadJobs();

    }, [])
    const [movies, setMovies] = useState([])
    return (
        <div className="container-jobs ">
            {loading && <Loader />}
            <div className='container-fluid-car'>
                <div className="abc1" >
                    <button 
                    style={{color:"black"}}
                    className="btnsss ms-3 mt-1 mb-1 "
                        onClick={() => history.goBack()}>
                        <IoMdArrowBack />
                    </button>

                </div>
                <div className='container-car'>

                    <div className="col">

                        <Button onClick={() => { history.push("/Job") }}
                            className="btn-job" >Add Jobs</Button>

                        <div className="form-control-job ">
                            <Input type="search" placeholder=" Search Services" aria-label="Search"      >

                            </Input>
                            <Button
                                className="btn-job-serach btn-outline-success">Search</Button>
                        </div>


                    </div>
                </div>
            </div>
            <div className=" col-xl-9 col-lg-8" style={{ fontsize: '16px', marginTop: '5px', fontweight: 400, color: '#6f6f6f' }}>

                <div className=" table-job-bx browse-job clearfix" style={{ backgroundColor: 'rgb(233 226 228)' }}>

                    <div className="job-bx-title clearfix">
                        <h5 className="font-weight-700  text-uppercase" style={{ marginLeft: '10px' }}>Job Alerts</h5>
                        <div className="float-right">
                            <span className="select-title" style={{ marginLeft: '10px' }}>Sort by freshness</span>
                            <select className="custom-btn" style={{ marginRight: '10px' }}>
                                <option>Last 2 Months</option>
                                <option>Last Months</option>
                                <option>Last Weeks</option>
                                <option>Last 3 Days</option>
                            </select>
                        </div>
                    </div>
                    <div className='table-responsive'>
                        <table class=" table ">
                            <thead>
                                <tr>
                                    <th scope="col"> Title</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Day/Night</th>
                                    <th scope="col">SalaryFrom </th>
                                    <th scope="col">SalaryTo</th>
                                    <th scope="col">Sate</th>
                                    <th scope="col">Conatact</th>
                                </tr>
                            </thead>
                            <tbody>
                                {movies.map(movie => (<tr>
                                    <td>{movie.title}</td>
                                    <td>{movie.description}</td>
                                    <td>{movie.positionType}</td>
                                    <td>{movie.salaryForm}</td>
                                    <td>{movie.salaryto}</td>
                                    <td>{movie.state}</td>
                                    <td>{movie.cNumber}</td>
                                </tr>
                                ))}

                            </tbody>
                        </table>

                    </div>
                    <div>
                        <div class="float-right">
                            <nav aria-label="Page navigation example" style={{ float: 'right' }}>
                                <ul class="pagination">
                                    <li class="page-item">
                                        <a class="page-link" href="#" aria-label="Previous">
                                            <span aria-hidden="true">&laquo;</span>
                                            <span class="sr-only"></span>
                                        </a>
                                    </li>
                                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                                    <li class="page-item">
                                        <a class="page-link" href="#" aria-label="Next">
                                            <span aria-hidden="true">&raquo;</span>
                                            <span class="sr-only"></span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Jobs;