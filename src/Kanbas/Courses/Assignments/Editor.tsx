function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" value="A1 - ENV + HTML" />
      <br />
      <br />

      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of
      </textarea>
      <br />

      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>

        {/* Complete on your own */}
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group">
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              <option value="QUIZZES">QUIZZES</option>
              <option value="EXAMS">EXAMS</option>
              <option value="PROJECTS">PROJECTS</option>
            </select>
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade As</label>
          </td>
          <td>
            <select id="wd-display-grade-as">
              <option value="PERCENTAGE">Percentage</option>
              <option value="MARKS">Marks</option>
              <option value="GRADE">Grade</option>
            </select>
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type">
              <option value="ONLINE">Online</option>
              <option value="OFFLINE">Offline</option>
            </select>
            <br />

            <label>Online Entry Options</label>
            <br />
            <input
              type="checkbox"
              name="check-entry-options"
              id="wd-text-entry"
            />
            <label htmlFor="wd-text-entry">Text Entry</label>
            <br />
            <input
              type="checkbox"
              name="check-entry-options"
              id="wd-website-url"
            />
            <label htmlFor="wd-website-url">Website URL</label>
            <br />
            <input
              type="checkbox"
              name="check-entry-options"
              id="wd-media-recordings"
            />
            <label htmlFor="wd-media-recordings">Media Recordings</label>
            <br />
            <input
              type="checkbox"
              name="check-entry-options"
              id="wd-student-annotation"
            />
            <label htmlFor="wd-student-annotation">Student Annotation</label>
            <br />
            <input
              type="checkbox"
              name="check-entry-options"
              id="wd-file-upload"
            />
            <label htmlFor="wd-file-upload">File Uploads</label>
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label>Assign</label>
          </td>
          <td>
            <label htmlFor="wd-assign-to">Assign to</label>
            <br />
            <select id="wd-assign-to">
              <option value="EVERYONE">Everyone</option>
              <option value="INDIVIDUAL">Individual</option>
            </select>
            <br />

            <label htmlFor="wd-due-date">Due</label>
            <br />
            <input type="date" id="wd-due-date" value="2024-05-13" />

            <br />
            <label htmlFor="wd-available-from">Available from</label>
            <br />
            <input type="date" id="wd-available-from" value="2024-05-06" />

            <br />
            <label htmlFor="wd-available-until">Until</label>
            <br />
            <input type="date" id="wd-available-until" value="2024-05-20" />
          </td>
        </tr>
      </table>
      <br />

      <button id="wd-cancel-btn" type="button">
        Cancel
      </button>
      <button id="wd-save-btn" type="button">
        Save
      </button>
    </div>
  );
}

export default AssignmentEditor;
