import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/7777/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/luckwillneveraworddescribeme.jpg" width={200} />
            <div>
              <h5> LUCK7777 React JS </h5>
              <p className="wd-dashboard-course-title">
                teach you how to keep yourselve away from luck  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1000/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/noSigno.jpg" width={200} />
            <div>
              <h5> CAT1000 React JS </h5>
              <p className="wd-dashboard-course-title">
                teach you how to become a cat  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/2000/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/2am.jpg" width={200} />
            <div>
              <h5> LIFE2000 React JS </h5>
              <p className="wd-dashboard-course-title">
                teach you how to make you awake at 2 am  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/3000/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/Gallery-8.jpg" width={200} />
            <div>
              <h5> MEC3000 React JS </h5>
              <p className="wd-dashboard-course-title">
                teach you how to build a Perseus  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/4000/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/Odyssey.jpg" width={200} />
            <div>
              <h5> AIR4000 React JS </h5>
              <p className="wd-dashboard-course-title">
                teach you how to landing Odyssey  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/0000/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/han.jpg" width={200} />
            <div>
              <h5> LIFE0000 React JS </h5>
              <p className="wd-dashboard-course-title">
                teach you how to sweating and laughing  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
);}
