import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faSearch, faChevronLeft, faChevronDown, faChevronRight, faFileAlt, faDumbbell, faUtensils } from '@fortawesome/free-solid-svg-icons';
import './Notes.css';

function formatDate(date: Date) {
  return date.toLocaleDateString(undefined, {
    year: 'numeric', month: 'long', day: 'numeric'
  });
}

const Notes: React.FC = () => {
  const today = new Date();

  return (
    <div className="notes-layout">
      {/* Main content area */}
      <main className="notes-content">
        <div className="breadcrumb">CRM / Training Notes</div>
        <h1 className="notes-title">Client Session - Sarah M.</h1>
        <h2 className="notes-subtitle">Client Session - Sarah Martinez</h2>
        <div className="notes-meta">Date: {formatDate(today)} | Session #3</div>

        <section className="note-section">
          <h3>Goals for Today</h3>
          <ul className="bullets">
            <li>Upper body strength focus</li>
            <li>Proper form reinforcement</li>
            <li>Progressive weight increase</li>
          </ul>
        </section>

        <section className="note-section">
          <h3>Warm-up (10 minutes)</h3>
          <p>
            5 minutes light cardio on treadmill, followed by dynamic stretching focusing on shoulders and arms.
          </p>
        </section>

        <section className="note-section">
          <h3>Main Workout</h3>
          <p>
            Completed all exercises with excellent form. Sarah is showing great improvement in confidence and
            strength.
          </p>
        </section>

        <div className="command-hint">Type '/' for commands</div>
      </main>

      {/* Right sidebar navigation (Notion-like) */}
      <aside className="notes-rightbar">
        <button className="collapse-btn" title="Collapse">
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        <div className="search-box">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input type="text" placeholder="Search notes..." />
        </div>

        <div className="sidebar-section">
          <div className="sidebar-heading">Recent</div>
          <div className="recent-item">
            <FontAwesomeIcon icon={faFileAlt} /> Client Session - Sarah M.
            <span className="muted">2 hours ago</span>
          </div>
          <div className="recent-item">
            <FontAwesomeIcon icon={faDumbbell} /> HIIT Program
            <span className="muted">1 day ago</span>
          </div>
          <div className="recent-item">
            <FontAwesomeIcon icon={faFileAlt} /> Progress Notes - John D.
            <span className="muted">2 days ago</span>
          </div>
        </div>

        <div className="sidebar-section">
          <div className="sidebar-heading">Clients</div>
          <div className="tree">
            <div className="tree-item">
              <FontAwesomeIcon icon={faChevronDown} className="caret" />
              <FontAwesomeIcon icon={faFolder} className="folder" /> Sarah Martinez
              <span className="muted">(3)</span>
            </div>
            <div className="tree-children">
              <div className="tree-leaf"><FontAwesomeIcon icon={faFileAlt} /> Week 4 Progress</div>
              <div className="tree-leaf"><FontAwesomeIcon icon={faFileAlt} /> Strength Assessment</div>
              <div className="tree-leaf"><FontAwesomeIcon icon={faFileAlt} /> Nutrition Plan</div>
            </div>

            <div className="tree-item">
              <FontAwesomeIcon icon={faChevronRight} className="caret" />
              <FontAwesomeIcon icon={faFolder} className="folder" /> John Davis
              <span className="muted">(8)</span>
            </div>

            <div className="tree-item">
              <FontAwesomeIcon icon={faChevronRight} className="caret" />
              <FontAwesomeIcon icon={faFolder} className="folder" /> Mike Wilson
              <span className="muted">(5)</span>
            </div>

            <div className="tree-item">
              <FontAwesomeIcon icon={faChevronRight} className="caret" />
              <FontAwesomeIcon icon={faFolder} className="folder" /> Lisa Chen
              <span className="muted">(4)</span>
            </div>
          </div>
        </div>

        <div className="sidebar-section">
          <div className="sidebar-heading">Programs</div>
          <div className="program-item"><FontAwesomeIcon icon={faDumbbell} /> Strength Training</div>
          <div className="program-item"><FontAwesomeIcon icon={faDumbbell} /> HIIT Program</div>
          <div className="program-item"><FontAwesomeIcon icon={faUtensils} /> Flexibility & Recovery</div>
        </div>
      </aside>
    </div>
  );
};

export default Notes;
