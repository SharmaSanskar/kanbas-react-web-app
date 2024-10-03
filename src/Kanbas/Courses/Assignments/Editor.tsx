function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="container">
      <label htmlFor="wd-name">Assignment Name</label>
      <input
        id="wd-name"
        value="A1 - ENV + HTML"
        className="form-control mt-2"
      />

      <textarea
        id="wd-description"
        cols={60}
        rows={5}
        className="form-control mt-4"
      >
        The assignment is available online submit a link to the landing page of
        your Web application running on Netlify.
      </textarea>
      <br />

      <div className="mb-3 row">
        <label htmlFor="email1" className="col-sm-2 col-form-label text-end">
          Email
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="email1"
            value="email@example.com"
          />
        </div>
      </div>

      <div className="mb-3 row">
        <label htmlFor="wd-points" className="col-sm-2 col-form-label text-end">
          Points
        </label>
        <div className="col-sm-10">
          <input id="wd-points" value={100} className="form-control" />
        </div>
      </div>

      {/* Complete on your own */}
      <div className="mb-3 row">
        <label htmlFor="wd-group" className="col-sm-2 col-form-label text-end">
          Assignment Group
        </label>
        <div className="col-sm-10">
          <select id="wd-group" className="form-select">
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            <option value="QUIZZES">QUIZZES</option>
            <option value="EXAMS">EXAMS</option>
            <option value="PROJECTS">PROJECTS</option>
          </select>
        </div>
      </div>

      <div className="mb-3 row">
        <label
          htmlFor="wd-display-grade-as"
          className="col-sm-2 col-form-label text-end"
        >
          Display Grade As
        </label>
        <div className="col-sm-10">
          <select id="wd-display-grade-as" className="form-select">
            <option value="PERCENTAGE">Percentage</option>
            <option value="MARKS">Marks</option>
            <option value="GRADE">Grade</option>
          </select>
        </div>
      </div>

      {/* SUBMISSION TYPE */}
      <div className="mb-3 row">
        <label
          htmlFor="wd-submission-type"
          className="col-sm-2 col-form-label text-end"
        >
          Submission Type
        </label>
        <div className="col-sm-10">
          <div className="border border-gray p-3">
            <select id="wd-submission-type" className="form-select">
              <option value="ONLINE">Online</option>
              <option value="OFFLINE">Offline</option>
            </select>

            <label className="py-3 fw-semibold">Online Entry Options</label>
            <div className="form-check mb-2">
              <input
                type="checkbox"
                name="check-entry-options"
                id="wd-text-entry"
                className="form-check-input"
              />
              <label htmlFor="wd-text-entry" className="form-check-label">
                Text Entry
              </label>
            </div>
            <div className="form-check mb-2">
              <input
                type="checkbox"
                name="check-entry-options"
                id="wd-website-url"
                className="form-check-input"
              />
              <label htmlFor="wd-website-url" className="form-check-label">
                Website URL
              </label>
            </div>
            <div className="form-check mb-2">
              <input
                type="checkbox"
                name="check-entry-options"
                id="wd-media-recordings"
                className="form-check-input"
              />
              <label htmlFor="wd-media-recordings" className="form-check-label">
                Media Recordings
              </label>
            </div>
            <div className="form-check mb-2">
              <input
                type="checkbox"
                name="check-entry-options"
                id="wd-student-annotation"
                className="form-check-input"
              />
              <label
                htmlFor="wd-student-annotation"
                className="form-check-label"
              >
                Student Annotation
              </label>
            </div>
            <div className="form-check mb-2">
              <input
                type="checkbox"
                name="check-entry-options"
                id="wd-file-upload"
                className="form-check-input"
              />
              <label htmlFor="wd-file-upload" className="form-check-label">
                File Uploads
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* ASSIGN */}
      <div className="mb-3 row">
        <label className="col-sm-2 col-form-label text-end">Assign</label>
        <div className="col-sm-10">
          <div className="border border-gray p-3">
            <div className="mb-3">
              <label htmlFor="wd-assign-to" className="form-label fw-semibold">
                Assign to
              </label>
              <select id="wd-assign-to" className="form-select">
                <option value="EVERYONE">Everyone</option>
                <option value="INDIVIDUAL">Individual</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="wd-due-date" className="form-label fw-semibold">
                Due
              </label>
              <input
                type="date"
                id="wd-due-date"
                value="2024-05-13"
                className="form-control"
              />
            </div>

            <div className="d-flex">
              <div className="me-3">
                <label
                  htmlFor="wd-available-from"
                  className="form-label fw-semibold"
                >
                  Available from
                </label>
                <input
                  type="date"
                  id="wd-available-from"
                  value="2024-05-06"
                  className="form-control"
                />
              </div>
              <div>
                <label
                  htmlFor="wd-available-until"
                  className="form-label fw-semibold"
                >
                  Until
                </label>
                <input
                  type="date"
                  id="wd-available-until"
                  value="2024-05-20"
                  className="form-control"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className="float-end">
        <button
          id="wd-cancel-btn"
          type="button"
          className="btn btn-light border border-gray me-3"
        >
          Cancel
        </button>
        <button id="wd-save-btn" type="button" className="btn btn-danger px-4">
          Save
        </button>
      </div>
    </div>
  );
}

export default AssignmentEditor;
