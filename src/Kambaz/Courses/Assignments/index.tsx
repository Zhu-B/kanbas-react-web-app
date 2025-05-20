import { ListGroup } from "react-bootstrap";
import { MdDragIndicator } from "react-icons/md";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { FaSearch } from "react-icons/fa";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <div className="mb-3">
        <FaSearch
            className="position-absolute text-secondary"
          />
        <input
            placeholder="Search for Assignments"
            id="wd-search-assignment"
            className="ps-5"
            style={{ width: 250 }}/>
          
        <button id="wd-add-assignment-group" className="btn btn-secondary me-2">+ Group</button>
        <button id="wd-add-assignment" className="btn btn-danger">+ Assignment</button>
      </div>
      <ListGroup className="rounded-0">
        
        <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
            <MdDragIndicator className="me-2 fs-3" />
            <span className="fw-bold flex-grow-1">ASSIGNMENTS 40% of Total</span>
            <AssignmentControlButtons />
          </div>
          <ListGroup className="wd-assignments rounded-0">
            <ListGroup.Item className="wd-assignment p-3 ps-1 d-flex align-items-center">
              <MdDragIndicator className="me-2 fs-3" />
              <span className="flex-grow-1">
                <a href="#/Kambaz/Courses/1234/Assignments/123" className="wd-assignment-link">
                  A1 - ENV + HTML
                </a>
                <br />
                <h6>Multiple Modules | Not available | 0/10
                  <br />
                Due......</h6>
              </span>
              <AssignmentControlButtons />
            </ListGroup.Item>
            <ListGroup.Item className="wd-assignment p-3 ps-1 d-flex align-items-center">
              <MdDragIndicator className="me-2 fs-3" />
              <span className="flex-grow-1">
                <a href="#/Kambaz/Courses/1234/Assignments/124" className="wd-assignment-link">
                  A2 - Whatever it is
                </a>
                <br />
                <h6>Multiple Modules | Not available | 0/10
                  <br />
                Due......</h6>
              </span>
              <AssignmentControlButtons />
            </ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>

        <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
            <MdDragIndicator className="me-2 fs-3" />
            <span className="fw-bold flex-grow-1">QUIZ 40% of Total</span>
            <AssignmentControlButtons />
          </div>
          <ListGroup className="wd-assignment rounded-0">
            <ListGroup.Item className="wd-quiz p-3 ps-1 d-flex align-items-center">
              <MdDragIndicator className="me-2 fs-3" />
              <span className="flex-grow-1">
                <a href="#/Kambaz/Courses/1234/Quiz/123" className="wd-quiz-link">
                  Q1
                </a>
                <br />
                <h6>Quiz | Not available | 0/10
                  <br />
                Due......
                </h6>
              </span>
              <AssignmentControlButtons />
            </ListGroup.Item>
            <ListGroup.Item className="wd-quiz p-3 ps-1 d-flex align-items-center">
              <MdDragIndicator className="me-2 fs-3" />
              <span className="flex-grow-1">
                <a href="#/Kambaz/Courses/1234/Quiz/124" className="wd-quiz-link">
                  Q2
                </a>
                <br />
                <h6>Quiz | Not available | 0/10
                  <br />
                Due......
                </h6>
              </span>
              <AssignmentControlButtons />
            </ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>

        <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
            <MdDragIndicator className="me-2 fs-3" />
            <span className="fw-bold flex-grow-1">EXAMS 40% of Total</span>
            <AssignmentControlButtons />
          </div>
          <ListGroup className="wd-assignment rounded-0">
            <ListGroup.Item className="wd-exams p-3 ps-1 d-flex align-items-center">
              <MdDragIndicator className="me-2 fs-3" />
              <span className="flex-grow-1">
                <a href="#/Kambaz/Courses/1234/Exams/123" className="wd-exam-link">
                  E1
                </a>
                <br />
                <h6>Exam | Not available | 0/10
                  <br />
                Due......</h6>
              </span>
              <AssignmentControlButtons />
            </ListGroup.Item>
            <ListGroup.Item className="wd-exams p-3 ps-1 d-flex align-items-center">
              <MdDragIndicator className="me-2 fs-3" />
              <span className="flex-grow-1">
                <a href="#/Kambaz/Courses/1234/Exams/124" className="wd-exam-link">
                  E2
                </a>
                <br />
                <h6>Exam | Not available | 0/10
                  <br />
                Due......</h6>
              </span>
              <AssignmentControlButtons />
            </ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>

        <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
            <MdDragIndicator className="me-2 fs-3" />
            <span className="fw-bold flex-grow-1">PROJECTS 40% of Total</span>
            <AssignmentControlButtons />
          </div>
          <ListGroup className="wd-assignment rounded-0">
            <ListGroup.Item className="wd-exams p-3 ps-1 d-flex align-items-center">
              <MdDragIndicator className="me-2 fs-3" />
              <span className="flex-grow-1">
                <a href="#/Kambaz/Courses/1234/Project/123" className="wd-project-link">
                  P1
                </a>
                <br />
                <h6>Project | Not available | 0/10
                  <br />
                Due......
                </h6>
              </span>
              <AssignmentControlButtons />
            </ListGroup.Item>
            <ListGroup.Item className="wd-projects p-3 ps-1 d-flex align-items-center">
              <MdDragIndicator className="me-2 fs-3" />
              <span className="flex-grow-1">
                <a href="#/Kambaz/Courses/1234/Project/124" className="wd-project-link">
                  P2
                </a>
                <br />
                <h6>Project | Not available | 0/10
                  <br />
                Due......
                </h6>
              </span>
              <AssignmentControlButtons />
            </ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>

      </ListGroup>
    </div>
  );
}