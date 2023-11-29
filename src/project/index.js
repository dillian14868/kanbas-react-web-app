import Signin from "../users/signin";
import Account from "../users/account";
import UserTable from "../users/table";
import Signup from "../users/signup"
import Home from "../users/home"
import Search from "../users/search"
import { Routes, Route, Navigate } from "react-router-dom";
import Nav from "../Nav";
function Project() {
  return (
    <><div className="row">
      <div className="col-12">
        <Nav />
      </div>
    </div><div className="row">
        <div className="col-2">
          <Routes>
            <Route path="/" element={<Navigate to="/project/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/search" element={<Search/>} />
            <Route path="/admin/users" element={<UserTable />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/account" element={<Account />} />
            <Route path="/account/:id" element={<Account />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </div></>
  );
}
export default Project;