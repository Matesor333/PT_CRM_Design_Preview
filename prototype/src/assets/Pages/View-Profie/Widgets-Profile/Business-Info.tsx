
function BusinessInfo(){
    return(

        <div className="card">
            <div className="card__body">
                <h3 className="section-title">Business Information</h3>
                <div className="form-grid">
                    <div className="form-group full-width">
                        <label className="form-label">Business Name</label>
                        <input type="text" className="form-control" value="Thompson Fitness LLC" id="business-name"/>
                    </div>
                    <div className="form-group full-width">
                        <label className="form-label">Business Address</label>
                        <input type="text" className="form-control" value="123 Business St, San Francisco, CA 94102"
                               id="business-address"/>
                    </div>
                    <div className="form-group">
                        <label className="form-label">Time Zone</label>
                        <select className="form-control" id="timezone">
                            <option value="America/Los_Angeles" selected>Pacific Time (PT)</option>
                            <option value="America/New_York">Eastern Time (ET)</option>
                            <option value="America/Chicago">Central Time (CT)</option>
                            <option value="America/Denver">Mountain Time (MT)</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BusinessInfo;