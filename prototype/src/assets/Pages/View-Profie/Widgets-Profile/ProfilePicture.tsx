
function ProfilePicture(){
    return (
        <div className="card">
            <div className="card__body">
                <h3 className="section-title">Profile Picture</h3>
                <div className="profile-picture-section">
                    <div className="current-avatar">AT</div>
                    <div className="avatar-info">
                        <p>Upload a profile picture for internal identification in your CRM system.</p>
                        <button className="btn btn--outline">Upload New Picture</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProfilePicture;