
import "../Jobs/Jobs.css"
import React, { Component } from 'react'
import { getJobs } from '../Jobs/JobInput'
class Jobs extends Component {
    constructor() {
        super();
    }
    state = {
        movies: getJobs()
    };
    render() {
        return (
        

            <div className="container ">
                <div className=" col-xl-9 col-lg-8 mb-5" style={{ fontsize: '16px', fontweight: 400, color: '#6f6f6f' }}>

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
                                        <th scope="col">Company</th>
                                        <th scope="col">Day/Night</th>
                                        <th scope="col">Location </th>
                                        <th scope="col">Contact</th>
                                        <th scope="col">Salary</th>
                                        <th scope="col">Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                        {this.state.movies.map(movie => (<tr>
                            <td>{movie.jobeTitle}</td>
                            <td>{movie.company}</td>
                            <td>{movie.day}</td>
                            <td>{movie.Location}</td>
                            <td>{movie.contact}</td>
                            <td>{movie.salary}</td>
                            <td>{movie.date}</td>
                        </tr>
                        ))}

                    </tbody>
                            </table>

                        </div>
                        <div>
                            <div class="float-right">
                            <nav aria-label="Page navigation example" style={{float:'right'}}>
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
}
export default Jobs;