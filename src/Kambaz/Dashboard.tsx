import { useState } from "react";
import { Button, Card, Col, FormControl, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import type { Course } from "./Courses/reducer";
import { addCourse, updateCourse, deleteCourse } from "./Courses/reducer";
import { enrollCourse, unenrollCourse } from "./Enrollments/reducer";

export default function Dashboard() {
  const dispatch = useDispatch();
  const courses = useSelector((s: any) => s.coursesReducer.courses);
  const { currentUser } = useSelector((s: any) => s.accountReducer);
  const enrollments = useSelector((s: any) =>
    s.enrollmentsReducer.enrollments.filter(
      (e: any) => e.user === currentUser._id
    )
  );
  const enrolledIds = enrollments.map((e: any) => e.course);

  if (currentUser.role === "FACULTY") {
    const [form, setForm] = useState<Omit<Course, "_id">>({
      name: "",
      number: "",
      startDate: "",
      endDate: "",
      description: "",
    });
    const [editingId, setEditingId] = useState<string | null>(null);

    const navigate = useNavigate();

    const handleAdd = () => {
      dispatch(addCourse(form));
      setForm({ name: "", number: "", startDate: "", endDate: "", description: "" });
    };
    const handleUpdate = () => {
      if (!editingId) return;
      dispatch(updateCourse({ _id: editingId, ...form }));
      setEditingId(null);
      setForm({ name: "", number: "", startDate: "", endDate: "", description: "" });
    };
    const startEdit = (c: Course) => {
      setEditingId(c._id);
      setForm({
        name: c.name,
        number: c.number,
        startDate: c.startDate,
        endDate: c.endDate,
        description: c.description,
      });
    };

    return (
      <div className="p-4" id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1>
        <hr />
        <h5>
          New Course
          <Button
            id="wd-add-new-course-click"
            className="float-end"
            onClick={handleAdd}
          >
            Add
          </Button>
          <Button
            id="wd-update-course-click"
            variant="warning"
            disabled={!editingId}
            className="float-end me-2"
            onClick={handleUpdate}
          >
            Update
          </Button>
        </h5>
        <FormControl
          className="mb-2"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <FormControl
          as="textarea"
          rows={3}
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />

        <h2 id="wd-dashboard-published">
          Published Courses ({courses.length})
        </h2>
        <hr />
        <Row xs={1} md={5} className="g-4" id="wd-dashboard-courses">
          {courses.map((c: Course) => (
            <Col key={c._id} style={{ width: 300 }}>
              <Card>
                {/* Only this Link wraps the image and course info */}
                <Link
                  to={`/Kambaz/Courses/${c._id}/Home`}
                  className="text-decoration-none text-dark"
                >
                  <Card.Img
                    src="/images/reactjs.jpg"
                    variant="top"
                    width="100%"
                    height={160}
                  />
                  <Card.Body>
                    <Card.Title className="text-nowrap overflow-hidden">
                      {c.name}
                    </Card.Title>
                    <Card.Text
                      className="overflow-hidden"
                      style={{ height: 100 }}
                    >
                      {c.description}
                    </Card.Text>
                    <Button
                      variant="primary"
                      className="me-2"
                      onClick={() =>
                        navigate(`/Kambaz/Courses/${c._id}/Home`)
                      }
                    >
                      Go
                    </Button>
                    <Button
                      variant="warning"
                      className="me-2"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        startEdit(c);
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        dispatch(deleteCourse(c._id));
                      }}
                    >
                      Delete
                    </Button>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
  }

  const [showAll, setShowAll] = useState(false);
  const displayed = showAll
    ? courses
    : courses.filter((c: Course) => enrolledIds.includes(c._id));

  return (
    <div className="p-4" id="wd-dashboard">
      <div className="d-flex mb-3 align-items-center">
        <h1 className="flex-grow-1">Dashboard</h1>
        <Button onClick={() => setShowAll(!showAll)}>
          {showAll ? "My Courses" : "All Courses"}
        </Button>
      </div>
      <Row xs={1} md={5} className="g-4" id="wd-dashboard-courses">
        {displayed.map((c: Course) => {
          const enrolled = enrolledIds.includes(c._id);
          return (
            <Col key={c._id} style={{ width: 300 }}>
              <Card>
                <Link
                  to={`/Kambaz/Courses/${c._id}/Home`}
                  className="text-decoration-none text-dark"
                >
                  <Card.Img
                    src="/images/reactjs.jpg"
                    variant="top"
                    width="100%"
                    height={160}
                  />
                  <Card.Body>
                    <Card.Title className="text-nowrap overflow-hidden">
                      {c.name}
                    </Card.Title>
                  </Card.Body>
                </Link>
                <div className="p-2 d-flex justify-content-between">
                  <Button
                    size="sm"
                    variant={enrolled ? "danger" : "success"}
                    onClick={() =>
                      dispatch(
                        enrolled
                          ? unenrollCourse({
                              user: currentUser._id,
                              course: c._id,
                            })
                          : enrollCourse({
                              user: currentUser._id,
                              course: c._id,
                            })
                      )
                    }
                  >
                    {enrolled ? "Unenroll" : "Enroll"}
                  </Button>
                  <Link
                    to={`/Kambaz/Courses/${c._id}/Home`}
                    className="btn btn-primary btn-sm"
                  >
                    Enter
                  </Link>
                </div>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}