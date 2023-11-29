import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Home() {

  return (
    <div>
      <div className="list-group flex-column align-items-start pt-1 mr-4">
      <Link
        to="/project/home"
        className="list-group-item d-flex w-100 "
      >
        Home
      </Link>
      <Link
        to="/project/search"
        className="list-group-item d-flex w-100 "
      >
        Search
      </Link>
      <Link
        to="/project/signin"
        className="list-group-item d-flex w-100"
      >
        SignIn
      </Link>
      <Link
        to="/project/signup"
        className="list-group-item d-flex w-100"
      >
        Signup
      </Link>
      <Link
        to="/project/account"
        className="list-group-item d-flex w-100"
      >
        Account
      </Link>
    </div>
    </div>
  );
}
export default Home;