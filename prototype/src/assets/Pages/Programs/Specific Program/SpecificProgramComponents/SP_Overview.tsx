
function SP_Overview(){
    return (
        <div className="card">
            <div className="card__header">
                <h3>Program Overview</h3>
            </div>
            <div className="card__body">
                <div className="info-section">
                    <h4>Goals & Objectives</h4>
                    <ul className="goals-list">
                        <li><i className="fas fa-check"></i> Achieve 1-2 lbs fat loss per week</li>
                        <li><i className="fas fa-check"></i> Improve cardiovascular fitness</li>
                        <li><i className="fas fa-check"></i> Build lean muscle mass</li>
                        <li><i className="fas fa-check"></i> Develop healthy eating habits</li>
                    </ul>
                </div>

                <div className="info-section">
                    <h4>Program Details</h4>
                    <div className="detail-item">
                        <span className="detail-label">Duration:</span>
                        <span className="detail-value">12 weeks</span>
                    </div>
                    <div className="detail-item">
                        <span className="detail-label">Schedule:</span>
                        <span className="detail-value">Mon, Wed, Fri - 7:00 AM & 6:00 PM</span>
                    </div>
                    <div className="detail-item">
                        <span className="detail-label">Max Capacity:</span>
                        <span className="detail-value">12 clients</span>
                    </div>
                </div>
            </div>
        </div>
    )


}

export default SP_Overview