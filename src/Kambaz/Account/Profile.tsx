import { Form, FormSelect } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <Form.Control defaultValue="Boxun" placeholder="username" className="wd-username"/>
      <Form.Control defaultValue="123"   placeholder="password" type="password"
             className="wd-password" />
      <Form.Control defaultValue="Boxun" placeholder="First Name" id="wd-firstname" />
      <Form.Control defaultValue="Zhu" placeholder="Last Name" id="wd-lastname" />
      <Form.Control defaultValue="2003-03-03" type="date" id="wd-dob" />
      <Form.Control defaultValue="zhu@box" type="email" id="wd-email" />
      <FormSelect defaultValue="Student" id="wd-role">
        <option value="USER">User</option>       <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option> <option value="STUDENT">Student</option>
      </FormSelect>
      <Link id="wd-signout-btn"
            to="/Kambaz/Account/Signin"
            className="btn btn-danger w-100 mb-2">
            Sign out </Link>
    </div>
);}
