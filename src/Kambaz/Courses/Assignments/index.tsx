import { ListGroup } from "react-bootstrap";
import { MdDragIndicator } from "react-icons/md";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { FaSearch } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";

export default function Assignments() {
  const { cid } = useParams<{ cid: string }>();
  const courseAssignments = assignments.filter((a) => a.course === cid);
  const groupOrder = ["ASSIGNMENTS", "QUIZZES", "EXAMS", "PROJECT"];
  const categories = groupOrder.map((grp) => ({
    key: grp,
    label: grp,
    percent: 40,
    items: courseAssignments.filter((a) => a.assignment_group === grp),
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
        <button id="wd-add-assignment" className="btn btn-danger">+ Assignment</button>
      </div>
      
      <ListGroup className="rounded-0">
        
        {categories.map((cat) => (
          <ListGroup.Item
            key={cat.key}
            className="wd-module p-0 mb-5 fs-5 border-gray"
          >
            <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
              <MdDragIndicator className="me-2 fs-3" />
              <span className="fw-bold flex-grow-1">
                {cat.label} {cat.percent}% of Total
              </span>
              <AssignmentControlButtons />
            </div>

            <ListGroup className={`${cat.listClass} rounded-0`}>
              {cat.items.map((item) => (
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
                      {/* You can replace the following stub with real data */}
                      {item.description?.slice(0, 30)}… | {item.points}/100
                      <br />
                      Due {item.due_date}
                    </h6>
                  </span>
                  <AssignmentControlButtons />
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
    </div>
  );
}