import { Form, Button, Container, Col, Row } from 'react-bootstrap';

export default function AssignmentEditor() {
  return (
    <Container className="py-4" id="wd-assignments-editor">
      <Form>
        {/* Assignment Name */}
        <Form.Group controlId="wd-name" className="mb-4">
          <Form.Label>Assignment Name</Form.Label>
          <Form.Control type="text" defaultValue="A1 - ENV + HTML" />
        </Form.Group>

        {/* Description */}
        <Form.Group controlId="wd-description" className="mb-4">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            defaultValue="The assignment is available online. Submit a link to the landing page of your Web application running on Netlify."
          />
        </Form.Group>

        {/* Points, Assignment Group, Display Grade (stacked) */}
        <div className="border rounded p-3 mb-4">
          <Form.Group controlId="wd-points" className="mb-3">
            <Form.Label>Points</Form.Label>
            <Form.Control type="number" defaultValue={100} />
          </Form.Group>

          <Form.Group controlId="wd-group" className="mb-3">
            <Form.Label>Assignment Group</Form.Label>
            <Form.Select defaultValue="ASSIGNMENTS">
              <option>ASSIGNMENTS</option>
              <option>QUIZZES</option>
              <option>EXAMS</option>
              <option>PROJECT</option>
            </Form.Select>
          </Form.Group>

          <Form.Group controlId="wd-display-grade-as">
            <Form.Label>Display Grade as</Form.Label>
            <Form.Select defaultValue="PERCENTAGE">
              <option>Percentage</option>
              <option>Letter Grade</option>
              <option>Complete/Incomplete</option>
            </Form.Select>
          </Form.Group>
        </div>

        {/* Submission Type + Online Entry Options */}
        <div className="border rounded p-3 mb-4">
          <Form.Label className="fw-bold d-block mb-2">Submission Type</Form.Label>
          <Form.Select id="wd-submission-type" className="mb-3" defaultValue="ONLINE">
            <option value="ONLINE">Online</option>
            <option value="OFFLINE">Offline</option>
          </Form.Select>

          <Form.Label className="fw-bold d-block">Online Entry Options</Form.Label>
          <Form.Check type="checkbox" id="wd-text-entry" label="Text Entry" />
          <Form.Check type="checkbox" id="wd-website-url" label="Website URL" defaultChecked />
          <Form.Check type="checkbox" id="wd-media-recordings" label="Media Recordings" />
          <Form.Check type="checkbox" id="wd-student-annotation" label="Student Annotation" />
          <Form.Check type="checkbox" id="wd-file-upload" label="File Upload" />
        </div>

        {/* Assign + Dates */}
        <div className="border rounded p-3 mb-4">
          <Form.Label className="fw-bold d-block mb-2">Assign</Form.Label>
          <Form.Group controlId="wd-assign-to" className="mb-3">
            <Form.Label>Assign To</Form.Label>
            <Form.Control type="text" defaultValue="Everyone" />
          </Form.Group>

          <Form.Group controlId="wd-due-date" className="mb-3">
            <Form.Label>Due</Form.Label>
            <Form.Control type="date" defaultValue="2024-05-13" />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="wd-available-from">
              <Form.Label>Available From</Form.Label>
              <Form.Control type="date" defaultValue="2024-05-06" />
            </Form.Group>
            <Form.Group as={Col} controlId="wd-available-until">
              <Form.Label>Until</Form.Label>
              <Form.Control type="date" defaultValue="2024-05-20" />
            </Form.Group>
          </Row>
        </div>

        {/* Action Buttons */}
        <div className="d-flex justify-content-end">
          <Button variant="secondary" className="me-2">Cancel</Button>
          <Button variant="primary">Save</Button>
        </div>
      </Form>
    </Container>
  );
}
