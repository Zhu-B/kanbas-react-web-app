export default function Assignments() {
  return (
    <div id="wd-assignments">
      <input placeholder="Search for Assignments"
             id="wd-search-assignment" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button> </h3>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <a href="#/Kambaz/Courses/1234/Assignments/123"
             className="wd-assignment-link" >
            A1 - ENV + HTML
          </a> <br />
          Multiple Moudles | Not avilable | 0/10
          </li>
        <li className="wd-assignment-list-item">
          <a href="#/Kambaz/Courses/1234/Assignments/124"
             className="wd-assignment-link" >
            A2 - What ever it is
          </a> <br />
          Multiple Moudles | Not avilable | 0/10
        </li>
      </ul>
      <h3 id="wd-assignment-title">
        QUIZZES 10% of Total <button>+</button> </h3>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <a href="#/Kambaz/Courses/1234/assignment/123"
             className="wd-assignment-link" >
            Q1
          </a> <br />
          Quiz | Not avilable | 0/10
          </li>
        <li className="wd-assignment-list-item">
          <a href="#/Kambaz/Courses/1234/assignment/124"
             className="wd-assignment-link" >
            Q2
          </a> <br />
          Quiz | Not avilable | 0/10
        </li>
      </ul>
      <h3 id="wd-assignment-title">
        EXAMS 20% of Total <button>+</button> </h3>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <a href="#/Kambaz/Courses/1234/assignment/123"
             className="wd-assignment-link" >
            E1
          </a> <br />
          Exam | Not avilable | 0/10
          </li>
        <li className="wd-assignment-list-item">
          <a href="#/Kambaz/Courses/1234/assignment/124"
             className="wd-assignment-link" >
            E2
          </a> <br />
          Exam | Not avilable | 0/10
        </li>
      </ul>
      <h3 id="wd-assignment-title">
        PROJECT 30% of Total <button>+</button> </h3>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <a href="#/Kambaz/Courses/1234/assignment/123"
             className="wd-assignment-link" >
            P1
          </a> <br />
          Project | Not avilable | 0/10
          </li>
        <li className="wd-assignment-list-item">
          <a href="#/Kambaz/Courses/1234/assignment/124"
             className="wd-assignment-link" >
            P2
          </a> <br />
          Project | Not avilable | 0/10
        </li>
      </ul>
    </div>
);}
