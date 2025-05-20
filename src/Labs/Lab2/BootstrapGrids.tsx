import { Button, Col, Form, FormControl, FormGroup, FormLabel, FormSelect, InputGroup, ListGroup, Nav, Row, Table } from "react-bootstrap";
import FormRange from "react-bootstrap/esm/FormRange";

export default function BootstrapGrids() {
    return(
        <div id="wd-bootstrap-grids">
            <h2>Bootstrap</h2>
            <div id="wd-bs-grid-system">
            <h2>Grid system</h2>
            <Row>
                <Col className="bg-danger text-white">
                <h3>Left half</h3>
                </Col>
                <Col className="bg-primary text-white">
                <h3>Right half</h3>
                </Col>
            </Row>
            <Row>
                <Col xs={4} className="bg-warning">
                <h3>One third</h3>
                </Col>
                <Col xs={8} className="bg-success text-white">
                <h3>Two thirds</h3>
                </Col>
            </Row>
            <Row>
                <Col xs={2} className="bg-black text-white">
                <h3>Sidebar</h3>
                </Col>
                <Col xs={8} className="bg-secondary text-white">
                <h3>Main content</h3>
                </Col>
                <Col xs={2} className="bg-info">
                <h3>Sidebar</h3>
                </Col>  </Row>  
            </div>
            <div id="wd-bs-responsive-grids">
                <h2>Responsive grid system</h2>
                <Row>
                    <Col xs={12} md={6} xl={3}
                        className="bg-warning">
                        <h3>Column A</h3>
                    </Col>
                    <Col xs={12} md={6} xl={3}
                        className="bg-primary text-white">
                        <h3>Column B</h3>
                    </Col>
                    <Col xs={12} md={6} xl={3}
                        className="bg-danger text-white">
                        <h3>Column C</h3>
                    </Col>
                    <Col xs={12} md={6} xl={3}
                        className="bg-success text-white">
                        <h3>Column D</h3>
                    </Col>
                </Row>
            </div>
            <div id="wd-bs-responsive-dramatic">
                <h2>Responsive grid system</h2>
                <Row>
                    <Col xs={12} sm={6} md={4} lg={3} xl={2} xxl={1} 
                        className="bg-warning">
                        <h4>1</h4></Col>
                    <Col xs={12} sm={6} md={4} lg={3} xl={2} xxl={1}
                        className="bg-primary text-white">
                        <h4>2</h4></Col>
                    <Col xs={12} sm={6} md={4} lg={3} xl={2} xxl={1}
                        className="bg-danger text-white">
                        <h4>3</h4></Col>
                    <Col xs={12} sm={6} md={4} lg={3} xl={2} xxl={1}
                        className="bg-success text-white">
                        <h4>4</h4></Col>
                    <Col xs={12} sm={6} md={4} lg={3} xl={2} xxl={1}
                        className="bg-warning">
                        <h4>5</h4></Col>
                    <Col xs={12} sm={6} md={4} lg={3} xl={2} xxl={1}
                        className="bg-primary text-white">
                        <h4>6</h4></Col>
                    <Col xs={12} sm={6} md={4} lg={3} xl={2} xxl={1}
                        className="bg-danger text-white">
                        <h4>7</h4></Col>
                    <Col xs={12} sm={6} md={4} lg={3} xl={2} xxl={1}
                        className="bg-success text-white">
                        <h4>8</h4></Col>
                    <Col xs={12} sm={6} md={4} lg={3} xl={2} xxl={1}
                        className="bg-warning">
                        <h4>9</h4></Col>
                    <Col xs={12} sm={6} md={4} lg={3} xl={2} xxl={1}
                        className="bg-primary text-white">
                        <h4>10</h4></Col>
                    <Col xs={12} sm={6} md={4} lg={3} xl={2} xxl={1}
                        className="bg-danger text-white">
                        <h4>11</h4></Col>
                <Col  xs={12} sm={6} md={4} lg={3} xl={2} xxl={1}
                        className="bg-success text-white">
                        <h4>12</h4></Col>
                </Row>
            </div>
            <div id="wd-css-styling-tables">
                <h2>Tables</h2>
                <Table>
                    <thead>
                    <tr className="table-dark"><th>Quiz</th><th>Topic</th><th>Date</th><th>Grade</th></tr>
                    </thead>
                    <tbody>
                    <tr className="table-warning"><td>Q1</td><td>HTML</td><td>2/3/21</td><td>85</td></tr>
                    <tr className="table-danger"><td>Q2</td><td>CSS</td><td>2/10/21</td><td>90</td></tr>
                    <tr className="table-primary"><td>Q3</td><td>JavaScript</td><td>2/17/21</td><td>90</td></tr>
                    </tbody>
                    <tfoot>
                    <tr className="table-success"><td colSpan={3}>Average</td><td>90</td></tr>
                    </tfoot>
                </Table>
            </div>
            <div id="wd-css-responsive-tables">
                <h2>Responsive tables</h2>
                <Table responsive>
                    <thead>
                    <tr><th>Very</th><th>long</th><th>set</th><th>of</th><th>columns</th>
                        <th>Very</th><th>long</th><th>set</th><th>of</th><th>columns</th>
                        <th>Very</th><th>long</th><th>set</th><th>of</th><th>columns</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Very</td><td>long</td><td>set</td><td>of</td><td>columns</td>
                        <td>Very</td><td>long</td><td>set</td><td>of</td><td>columns</td>
                        <td>Very</td><td>long</td><td>set</td><td>of</td><td>columns</td>
                    </tr>
                    </tbody>
                </Table>
            </div>
            <div id="wd-css-styling-lists">
                <h2>Favorite movies</h2>
                <ListGroup>
                    <ListGroup.Item active>Aliens</ListGroup.Item>
                    <ListGroup.Item>Terminator</ListGroup.Item>
                    <ListGroup.Item>Blade Runner</ListGroup.Item>
                    <ListGroup.Item>Lord of the Ring</ListGroup.Item>
                    <ListGroup.Item disabled>Star Wars</ListGroup.Item>
                </ListGroup>
            </div>
            <div id="wd-css-hyperlink-list">
                <h3>Favorite books</h3>
                <ListGroup>
                    <ListGroup.Item   action active
                    href="https://en.wikipedia.org/wiki/Dune_(novel)">
                    Dune                 </ListGroup.Item>
                    <ListGroup.Item   action
                    href="https://en.wikipedia.org/wiki/The_Lord_of_the_Rings">
                    Lord of the Rings    </ListGroup.Item>
                    <ListGroup.Item   action
                    href="https://en.wikipedia.org/wiki/The_Forever_War">
                    The Forever War      </ListGroup.Item>
                    <ListGroup.Item   action
                href="https://en.wikipedia.org/wiki/2001:_A_Space_Odyssey_(novel)">
                    2001 A Space Odyssey </ListGroup.Item>
                    <ListGroup.Item   action   disabled
                    href="https://en.wikipedia.org/wiki/Ender%27s_Game">
                    Ender's Game         </ListGroup.Item>
                    <ListGroup.Item action onClick={() => alert("New book added")}>
                    Add another book     </ListGroup.Item>
                </ListGroup>
            </div>
            <div id="wd-css-styling-forms">
                <h2>Forms</h2>
                <FormGroup className="mb-3" controlId="wd-email">
                    <FormLabel>Email address</FormLabel>
                    <FormControl type="email" placeholder="name@example.com" />
                </FormGroup>
                <FormGroup className="mb-3" controlId="wd-textarea">
                    <FormLabel>Example textarea</FormLabel>
                    <FormControl as="textarea" rows={3} />
                </FormGroup>
            </div>
            <div id="wd-css-styling-dropdowns">
                <h3>Dropdowns</h3>
                <FormSelect>
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </FormSelect>
            </div>
            <div id="wd-css-styling-switches">
                <h3>Switches</h3>
                <Form.Check type="switch" checked={false} id="wd-switch-1"
                            label="Unchecked switch checkbox input"/>
                <Form.Check type="switch" checked={true}  id="wd-switch-2"
                            label="Checked switch checkbox input"/>
                <Form.Check type="switch" checked={false} disabled
                            id="custom-switch"
                            label="Unchecked disabled switch checkbox input"/>
                <Form.Check type="switch" checked={true} disabled 
                            id="custom-switch"
                            label="Checked disabled switch checkbox input"/>
            </div>
            <div id="wd-css-styling-range-and-sliders">
                <h3>Range</h3>
                <FormGroup controlId="wd-range1">
                    <FormLabel>Example range</FormLabel>
                    <FormRange min="0" max="5" step="0.5" />
                </FormGroup>
            </div>
            <div id="wd-css-styling-addons">
                <h3>Addons</h3>
                <InputGroup className="mb-3">
                    <InputGroup.Text>$</InputGroup.Text>
                    <InputGroup.Text>0.00</InputGroup.Text>
                    <FormControl />
                </InputGroup>
                <InputGroup>
                    <FormControl />
                    <InputGroup.Text>$</InputGroup.Text>
                    <InputGroup.Text>0.00</InputGroup.Text>
                </InputGroup>
            </div>
            <div id="wd-css-responsive-forms-1">
                <h3>Responsive forms</h3>
                <Form.Group as={Row} className="mb-3" controlId="email1">
                    <Form.Label column sm={2}>
                    Email
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control type="email" value="email@example.com" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="password1">
                    <Form.Label column sm={2}>
                    Password
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control type="password" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="textarea2">
                    <Form.Label column sm={2}>
                    Bio
                    </Form.Label>
                    <Col sm={10}>
                    <Form.Control as="textarea" style={{height: "100px"}}/>
                    </Col>
                </Form.Group>
            </div>
            <div id="wd-css-responsive-forms-2">
                <h3>Responsive forms</h3>
                <Form>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={2}> Email </Form.Label>
                    <Col sm={10}>
                    <Form.Control type="email" placeholder="Email" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={2}> Password </Form.Label>
                    <Col sm={10}>
                    <Form.Control type="password" placeholder="Password" />
                    </Col>
                </Form.Group>
                <fieldset>
                    <Form.Group as={Row} className="mb-3">
                    <Form.Label as="legend" column sm={2}>
                        Radios </Form.Label>
                    <Col sm={10}>
                        <Form.Check type="radio" label="first radio"
                        checked name="formHorizontalRadios"/>
                        <Form.Check type="radio" label="second radio"
                        name="formHorizontalRadios"/>
                        <Form.Check type="radio" label="third radio"
                        name="formHorizontalRadios"/>
                    </Col>
                    </Form.Group>
                </fieldset>
                <Form.Group as={Row} className="mb-3">
                    <Col sm={{ span: 10, offset: 2 }}>
                    <Form.Check label="Remember me" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Col>
                    <Button type="submit">Sign in</Button>
                    </Col>
                </Form.Group>
                </Form>
            </div>
            <div id="wd-css-navigating-with-tabs">
                <h2>Tabs</h2>
                <Nav variant="tabs">
                    <Nav.Item>
                    <Nav.Link href="#/Labs/Lab2/Active">Active</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link href="#/Labs/Lab2/Link1">Link 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link href="#/Labs/Lab2/Link2">Link 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link href="#/Labs/Lab2/Disabled" disabled>Disabled</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        </div>
    );
}