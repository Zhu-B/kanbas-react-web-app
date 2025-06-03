import { ListGroup, Modal, Button } from "react-bootstrap";
import { MdDragIndicator } from "react-icons/md";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { FaSearch } from "react-icons/fa";
import { Link, useParams, useNavigate } from "react-router-dom";
import { deleteAssignment } from "./reducer";
import { IoTrash } from "react-icons/io5";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Assignments() {
  const { cid } = useParams<{ cid: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const courseAssignments = useSelector((state: any) =>
    state.assignmentsReducer.assignments.filter((a: any) => a.course === cid)
  );
  const [toDelete, setToDelete] = useState<string | null>(null);
  const groupOrder = ["ASSIGNMENTS", "QUIZZES", "EXAMS", "PROJECT"];
  const categories = groupOrder.map((grp) => ({
    key: grp,
    label: grp,
    percent: 40,
    items: courseAssignments.filter((a: any) => a.assignment_group === grp),
    pathSegment: grp.charAt(0) + grp.slice(1).toLowerCase(),
    listClass: grp === "ASSIGNMENTS" ? "wd-assignments" : "",
    linkClass: `wd-${grp.toLowerCase()}-link`,
  }));

  return (
    <div id="wd-assignments">
      <div className="mb-3">
        <FaSearch className="position-absolute text-secondary"/>
        <input
            placeholder="Search for Assignments"
            id="wd-search-assignment"
            className="ps-5"
            style={{ width: 250 }}/>
          
        <button id="wd-add-assignment-group" className="btn btn-secondary me-2">+ Group</button>
        <button
          id="wd-add-assignment"
          className="btn btn-danger"
          onClick={() => navigate(`/Kambaz/Courses/${cid}/Assignments/new`)}
        >
          + Assignment
        </button>
      </div>

      <ListGroup className="rounded-0">
        {categories.map((cat) => (
          <ListGroup.Item key={cat.key} className="wd-module p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
              <MdDragIndicator className="me-2 fs-3" />
              <span className="fw-bold flex-grow-1">
                {cat.label} {cat.percent}% of Total
              </span>
              <AssignmentControlButtons />
            </div>

            <ListGroup className={`${cat.listClass} rounded-0`}>
              {cat.items.map((item: any) => (
                <ListGroup.Item
                  key={item._id}
                  className={`p-3 ps-1 d-flex align-items-center wd-${cat.key.toLowerCase()}`}
                >
                  <MdDragIndicator className="me-2 fs-3" />
                  <span className="flex-grow-1">
                    <Link
                      to={`/Kambaz/Courses/${cid}/${cat.pathSegment}/${item._id}`}
                      className={cat.linkClass}
                    >
                      {item.title}
                    </Link>
                    <br />
                    <h6>
                      {item.description?.slice(0, 30)}… | {item.points}/100
                      <br />
                      Due {item.due_date}
                    </h6>
                  </span>
                  <AssignmentControlButtons />
                  <IoTrash
                    className="fs-4 text-danger ms-2"
                    style={{ cursor: "pointer" }}
                    onClick={() => setToDelete(item._id)}
                  />
                </ListGroup.Item>
              ))}

              {cat.items.length === 0 && (
                <ListGroup.Item className="text-center">
                  No {cat.label.toLowerCase()} found.
                </ListGroup.Item>
              )}
            </ListGroup>
          </ListGroup.Item>
        ))}
      </ListGroup>

      <Modal show={!!toDelete} onHide={() => setToDelete(null)}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Assignment?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to remove this assignment?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setToDelete(null)}>
            Cancel
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              dispatch(deleteAssignment(toDelete!));
              setToDelete(null);
            }}
          >
            Yes, Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}