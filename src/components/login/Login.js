import React from "react";

export default function Login() {
  return (
    <div>
      <div className="Login">
        <div className="Profile d-flex flex-column justify-content-center align-items-center ">
          <div className="Heading d-flex justify-content-center mt-5">
            <h1>
              <b>Login</b>
            </h1>
          </div>
          <div className="Data d-flex justify-content-center  align-items-center py-4">
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label float-start">
                  <b>Email address</b>
                </label>
                <input
                  type="email"
                  class="form-control  d-flex  justify-content-center align-items-center "
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3">
                <label
                  for="exampleInputPassword1"
                  class="form-label float-start"
                >
                  <b> Password </b>
                </label>
                <input
                  type="password"
                  class="form-control d-flex justify-content-center align-items-center"
                  id="exampleInputPassword1"
                />
              </div>
              <div class="mb-3">
                <label for="exampleAddress" class="form-label float-start">
                  <b>Company Name</b>
                </label>
                <input
                  type="email"
                  class="form-control d-flex justify-content-center align-items-center"
                  id="exampleAddress"
                  aria-describedby="emailHelp"
                />
              </div>
              <button
                type="submit"
                class=" Button form-control btn btn-danger mt-3 mb-3"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
