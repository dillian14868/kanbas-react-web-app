import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Home from "./home";
function Search() {
  return (
    <div className="row">
        <div className="col-4 w-50 ">
          <Home />
          
        </div> 
        <div className="w-50">
      <div className="col-8">
      <h1>Search</h1>
      <p>This page isn't implemented</p>
    </div>
    </div>
    </div>
  );
}
export default Search;