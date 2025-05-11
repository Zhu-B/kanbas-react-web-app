export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of
      </textarea>
      <br /><br />
      <table>
        <label htmlFor="wd-points">Points</label>
          <input id="wd-points" value={100} /><br /><br />
        
        <label  htmlFor="wd-group"> Assignment Group: </label>
          <select id="wd-group">
            <option selected value="ASSIGNMENTS">
                ASSIGNMENTS</option>
            <option value="QUIZZES">QUIZZES</option>
            <option value="EXAMS">EXAMS</option>
            <option value="PROJECT">PROJECT</option>
          </select><br /><br />
        <label  htmlFor="wd-display-grade-as"> Display Grade as: </label>
          <select id="wd-display-grade-as">
            <option selected value="PERCENTAGE">
                Percentage</option>
            <option value="WHATEVER">Whatever it is</option>
          </select><br /><br />
        <label  htmlFor="wd-submission-type"> Submission Type: </label>
          <select id="wd-submission-type">
            <option selected value="ONLINE">
                Online</option>
            <option value="OFF">Offline??</option>
          </select><br /><br />
        <label>Online Entry Options:</label><br/>
          <input type="checkbox" name="check-genre" id="wd-text-entry"/>
          <label htmlFor="wd-text-entry">Text Entry</label><br/>
          <input type="checkbox" name="check-genre" id="wd-website-url"/>
          <label htmlFor="wd-website-url">Website URL</label><br/>
          <input type="checkbox" name="check-genre" id="wd-media-recordings"/>
          <label htmlFor="wd-media-recordings">Media Recordings</label><br/>
          <input type="checkbox" name="check-genre" id="wd-student-annotation"/>
          <label htmlFor="wd-student-annotation">Student Annotation</label><br/>
          <input type="checkbox" name="check-genre" id="wd-file-upload"/>
          <label htmlFor="wd-file-upload">File Upload</label><br/><br/><br/>
        <label htmlFor="wd-assign-to">Assign to</label><br />
          <input id="wd-assign-to" value="Everyone" /><br /><br />
        
        <label htmlFor="wd-due-date"> Due</label><br />
          <input type="date"
            value="2024-05-13"
            id="wd-due-date"/><br/>
        
        <label htmlFor="wd-available-from"> Acailable from</label><br />
          <input type="date"
            value="2024-05-06"
            id="wd-available-from"/><br />
        <label htmlFor="wd-available-until"> Until</label><br />
          <input type="date"
            value="2024-05-20"
            id="wd-available-until"/>
      </table><br />
      <button type="button">
            Cancel
          </button>
      <button type="button">
            Save
          </button>
    </div>
);}
