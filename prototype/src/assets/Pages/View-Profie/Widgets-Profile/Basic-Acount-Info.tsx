
function BasicAcountInfo(){
    return (
        <div className="card">
            <div className="card__body">
                <h3 className="section-title">Basic Account Information</h3>
                <div className="form-grid">
                    <div className="form-group">
                        <label className="form-label">First Name</label>
                        <input type="text" className="form-control" value="Alex" id="first-name"/>
                    </div>
                    <div className="form-group">
                        <label className="form-label">Last Name</label>
                        <input type="text" className="form-control" value="Thompson" id="last-name"/>
                    </div>
                    <div className="form-group">
                        <label className="form-label">Email Address</label>
                        <input type="email" className="form-control" value="alex.thompson@gmail.com" id="email"/>
                    </div>
                    <div className="form-group">
                        <label className="form-label">Phone Number</label>
                        <input type="tel" className="form-control" value="(555) 123-4567" id="phone"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BasicAcountInfo;