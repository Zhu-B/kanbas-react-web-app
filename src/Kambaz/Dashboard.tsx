import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
            <Link to="/Kambaz/Courses/1234/Home"
                  className="wd-dashboard-course-link text-decoration-none text-dark">
              <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160}/>
              <Card.Body>
              <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS1234 React JS</Card.Title>
              <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                Full Stack software developer</Card.Text>
              <Button variant="primary">Go</Button>
              </Card.Body>
            </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
            <Link to="/Kambaz/Courses/7777/Home"
                  className="wd-dashboard-course-link text-decoration-none text-dark">
              <Card.Img variant="top" src="/images/luckwillneveraworddescribeme.jpg" width="100%" height={160}/>
              <Card.Body>
              <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">LUCK7777 React JS</Card.Title>
              <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                teach you how to keep yourselve away from luck</Card.Text>
              <Button variant="primary">Go</Button>
              </Card.Body>
            </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
            <Link to="/Kambaz/Courses/1000/Home"
                  className="wd-dashboard-course-link text-decoration-none text-dark">
              <Card.Img variant="top" src="/images/noSigno.jpg" width="100%" height={160}/>
              <Card.Body>
              <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CAT1000 React JS</Card.Title>
              <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                teach you how to become a cat</Card.Text>
              <Button variant="primary">Go</Button>
              </Card.Body>
            </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
            <Link to="/Kambaz/Courses/2000/Home"
                  className="wd-dashboard-course-link text-decoration-none text-dark">
              <Card.Img variant="top" src="/images/2am.jpg" width="100%" height={160}/>
              <Card.Body>
              <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">LIFE2000 React JS</Card.Title>
              <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                teach you how to make you awake at 2 am</Card.Text>
              <Button variant="primary">Go</Button>
              </Card.Body>
            </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
            <Link to="/Kambaz/Courses/3000/Home"
                  className="wd-dashboard-course-link text-decoration-none text-dark">
              <Card.Img variant="top" src="/images/Gallery-8.jpg" width="100%" height={160}/>
              <Card.Body>
              <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">MEC3000 React JS</Card.Title>
              <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                teach you how to build a Perseus</Card.Text>
              <Button variant="primary">Go</Button>
              </Card.Body>
            </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
            <Link to="/Kambaz/Courses/4000/Home"
                  className="wd-dashboard-course-link text-decoration-none text-dark">
              <Card.Img variant="top" src="/images/Odyssey.jpg" width="100%" height={160}/>
              <Card.Body>
              <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">AIR4000 React JS</Card.Title>
              <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                teach you how to landing Odyssey</Card.Text>
              <Button variant="primary">Go</Button>
              </Card.Body>
            </Link>
            </Card>
          </Col>
          <Col className="wd-dashboard-course" style={{ width: "300px" }}>
            <Card>
            <Link to="/Kambaz/Courses/0000/Home"
                  className="wd-dashboard-course-link text-decoration-none text-dark">
              <Card.Img variant="top" src="/images/han.jpg" width="100%" height={160}/>
              <Card.Body>
              <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">LIFE0000 React JS</Card.Title>
              <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                teach you how to sweating and laughing</Card.Text>
              <Button variant="primary">Go</Button>
              </Card.Body>
            </Link>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
);}
