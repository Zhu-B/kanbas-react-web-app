import { useState } from "react";
import { FormControl } from "react-bootstrap";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
export default function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
    });
    
    const [moduleObj, setModuleObj] = useState({
        id: "m1",
        name: "Intro to Node",
        description: "Learn the basics of Node.js",
        course: "CS5610",
    });

    const [newScore, setNewScore] = useState(assignment.score);
    const [newCompleted, setNewCompleted] = useState(assignment.completed);

    const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`
    const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`;

    return (
        <div id="wd-working-with-objects">
            <h3>Working With Objects</h3>
            <h4>Modifying Properties</h4>
            <a id="wd-update-assignment-title"
                className="btn btn-primary float-end"
                href={`${ASSIGNMENT_API_URL}/title/${encodeURIComponent(
                assignment.title
                )}`}>
                Update Title
            </a>
            <FormControl className="w-75" id="wd-assignment-title"
                defaultValue={assignment.title} onChange={(e) =>
                setAssignment({ ...assignment, title: e.target.value })}/>
            <hr />
            <h4>Retrieving Objects</h4>
            <a id="wd-retrieve-assignments" className="btn btn-primary"
                href={`${ASSIGNMENT_API_URL}`}>
                Get Assignment
            </a>
            <hr/>
            <h4>Retrieving Properties</h4>
            <a id="wd-retrieve-assignment-title" className="btn btn-primary"
                href={`${ASSIGNMENT_API_URL}/title`}>
                Get Title
            </a>
            <hr/>
            <h4>Module Operations</h4>
            <a
                id="wd-get-module"
                className="btn btn-primary"
                href={MODULE_API_URL}>
                Get Module
            </a>
            <hr/>
            <a
                id="wd-get-module-name"
                className="btn btn-primary"
                href={`${MODULE_API_URL}/name`}>
                Get Module Name
            </a>
            <hr/>
            <FormControl
                className="w-75 my-2"
                id="wd-module-name"
                placeholder="Module Name"
                value={moduleObj.name}
                onChange={(e) =>
                    setModuleObj((m) => ({ ...m, name: e.target.value }))
                }
            />
            <a
                id="wd-update-module-name"
                className="btn btn-secondary"
                href={`${MODULE_API_URL}/name/${encodeURIComponent(
                    moduleObj.name
                )}`}
            >
                Update Module Name
            </a>
            <FormControl
                className="w-75 my-2"
                id="wd-module-description"
                placeholder="Module Description"
                value={moduleObj.description}
                onChange={(e) =>
                    setModuleObj((m) => ({ ...m, description: e.target.value }))
                }
            />
            <a
                id="wd-update-module-desc"
                className="btn btn-secondary"
                href={`${MODULE_API_URL}/description/${encodeURIComponent(
                    moduleObj.description
                )}`}
            >
                Update Module Description
            </a>
            <hr />

            <h4>Assignment Score &amp; Completed</h4>
            <FormControl
                type="number"
                className="w-25"
                id="wd-assignment-score"
                value={newScore}
                onChange={(e) => setNewScore(+e.target.value)}
            />
            <a
                id="wd-update-assignment-score"
                className="btn btn-secondary mx-2"
                href={`${ASSIGNMENT_API_URL}/score/${newScore}`}
            >
                Update Score
            </a>

            <label className="ms-3">
                <input
                type="checkbox"
                id="wd-assignment-completed"
                checked={newCompleted}
                onChange={(e) => setNewCompleted(e.target.checked)}
                className="me-1"
                />
                Completed
            </label>
            <a
                id="wd-update-assignment-completed"
                className="btn btn-secondary ms-2"
                href={`${ASSIGNMENT_API_URL}/completed/${newCompleted}`}
            >
                Update Completed
            </a>
        </div>
);}
