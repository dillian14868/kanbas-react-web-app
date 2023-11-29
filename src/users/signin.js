import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Home from "./home";
function Signin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const signin = async () => {
    await client.signin(credentials);
    navigate("/project/account");
  };
  return (
    <div className="row">
        <div className="col-4 w-50 ">
          <Home />
          
        </div> 
        <div className="w-50">
      <div className="col-8">
      <h1>Signin</h1>
      <input value={credentials.username} onChange={(e) => setCredentials({...credentials, username: e.target.value})}/>
      <input value={credentials.password} onChange={(e) => setCredentials({...credentials, password: e.target.value})}/>
      <button onClick={signin}> Signin </button>
    </div>
    </div>
    </div>
  );
}
export default Signin;