import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <input defaultValue="Boxun" placeholder="username" className="wd-username"/><br/>
      <input defaultValue="123"   placeholder="password" type="password"
             className="wd-password" /><br/>
      <input defaultValue="Boxun" placeholder="First Name" id="wd-firstname" /><br/>
      <input defaultValue="Zhu" placeholder="Last Name" id="wd-lastname" /><br/>
      <input defaultValue="2003-03-03" type="date" id="wd-dob" /><br/>
      <input defaultValue="zhu@box" type="email" id="wd-email" /><br/>
      <select defaultValue="Student" id="wd-role">
        <option value="USER">User</option>       <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option> <option value="STUDENT">Student</option>
      </select><br/>
      <Link to="/Kambaz/Account/Signin" >Sign out</Link>
    </div>
);}
