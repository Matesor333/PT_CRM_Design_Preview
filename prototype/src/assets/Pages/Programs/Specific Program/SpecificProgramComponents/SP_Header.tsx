

function SP_Header(){
    return (
        <div className="header-content">
            <div className="header-left">
                <h1 className="program-title">Group Fat Loss Training</h1>
                <p className="program-description">A comprehensive 12-week program designed to help clients achieve
                    sustainable fat loss through structured group training sessions, nutritional guidance, and
                    continuous support.</p>
                <div className="program-meta">
                        <span className="status status--success">
                            <i className="fas fa-circle"></i> Active
                        </span>
                    <span className="program-dates">
                            <i className="fas fa-calendar"></i> Jan 15 - Apr 15, 2025
                        </span>
                    <span className="enrollment-count">
                            <i className="fas fa-users"></i> 8/12 enrolled
                        </span>
                </div>
            </div>
            <div className="header-actions">
                <button className="btn btn--outline">
                    <i className="fas fa-cog"></i> Settings
                </button>
                <button className="btn btn--secondary">
                    <i className="fas fa-arrow-left"></i> Back to Programs
                </button>
            </div>
        </div>

    );


}

export default SP_Header