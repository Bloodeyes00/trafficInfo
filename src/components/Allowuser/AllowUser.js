import React from 'react'
import { useHistory } from 'react-router'
import { IoMdArrowBack } from "react-icons/io";

function AllowUser() {
let history = useHistory () ;
   

return (
        <div className="container-fluid-Allow">
            <div className="container-Allow ms-4 mt-5">
                <div className="row-allow ms-1">
                    <div className='table-responsive'>
                        <table class=" table ">
                            <thead>
                                <tr>
                                    <th scope="col">First Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">City</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Allow</th>
                                    <th scope="col">Deny</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="col"> Ehtisham </th>
                                    <th scope="col">Ul Haq</th>
                                    <th scope="col">ihteshamu11@gmail.com</th>
                                    <th scope="col">Swabi</th>
                                    <th scope="col">23/11/2021</th>
                                    <th scope="col">
                                        <input class="form-check-input" type="checkbox" id="check1" name="option1" value="something" />
                                    </th>
                                    <th scope="col">
                                        <input class="form-check-input" type="checkbox" id="check1" name="option1" value="something" />
                                    </th>
                                </tr>

                                <tr>
                                    <th scope="col"> Ehtisham </th>
                                    <th scope="col">Ul Haq</th>
                                    <th scope="col">ihteshamu11@gmail.com</th>
                                    <th scope="col">Swabi</th>
                                    <th scope="col">23/11/2021</th>
                                    <th scope="col">
                                        <input class="form-check-input" type="checkbox" id="check1" name="option1" value="something" />
                                    </th>
                                    <th scope="col">
                                        <input class="form-check-input" type="checkbox" id="check1" name="option1" value="something" />
                                    </th>
                                </tr>

                                <tr>
                                    <th scope="col"> Ehtisham </th>
                                    <th scope="col">Ul Haq</th>
                                    <th scope="col">ihteshamu11@gmail.com</th>
                                    <th scope="col">Swabi</th>
                                    <th scope="col">23/11/2021</th>
                                    <th scope="col">
                                        <input class="form-check-input" type="checkbox" id="check1" name="option1" value="something" />
                                    </th>
                                    <th scope="col">
                                        <input class="form-check-input" type="checkbox" id="check1" name="option1" value="something" />
                                    </th>
                                </tr>

                                <tr>
                                    <th scope="col"> Ehtisham </th>
                                    <th scope="col">Ul Haq</th>
                                    <th scope="col">ihteshamu11@gmail.com</th>
                                    <th scope="col">Swabi</th>
                                    <th scope="col">23/11/2021</th>
                                    <th scope="col">
                                        <input class="form-check-input" type="checkbox" id="check1" name="option1" value="something" />
                                    </th>
                                    <th scope="col">
                                        <input class="form-check-input" type="checkbox" id="check1" name="option1" value="something" />
                                    </th>
                                </tr>
                                <tr>
                                    <th scope="col"> Ehtisham </th>
                                    <th scope="col">Ul Haq</th>
                                    <th scope="col">ihteshamu11@gmail.com</th>
                                    <th scope="col">Swabi</th>
                                    <th scope="col">23/11/2021</th>
                                    <th scope="col">
                                        <input class="form-check-input" type="checkbox" id="check1" name="option1" value="something" />
                                    </th>
                                    <th scope="col">
                                        <input class="form-check-input" type="checkbox" id="check1" name="option1" value="something" />
                                    </th>
                                </tr>




                            </tbody>
                        </table>

                    </div>
                    <button className="btnsss mt-2 "  onClick={() => history.goBack()}><IoMdArrowBack /></button>

                </div>
            </div>
        </div>

    )
}

export default AllowUser
