import "../css/MainProfilestyle.css";

export default function MainProfile() {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-logo">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_2_345)">
              <path fillRule="evenodd" clipRule="evenodd" d="M14.146 14.6667C14.146 14.6667 12.0248 11.3013 13.7231 8C15.6208 4.3112 14.0693 1.33333 14.0693 1.33333H2.33711C2.33711 1.33333 3.8859 4.31067 1.98971 7.99897C0.292091 11.301 2.42365 14.6667 2.42365 14.6667H14.146Z" fill="#121417" />
            </g>
            <defs>
              <clipPath id="clip0_2_345">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <h1 className="taskmaster-title">Taskmaster</h1>
        </div>
        <div className="profile-nav">
          <h2>Dashboard</h2>
          <h2>Tasks</h2>
          <h2>Projects</h2>
          <h2>Teams</h2>
        </div>
      </div>

      <div className="profile-body">
        <div className="profile-content">
          <div className="profile-heading">
            <h1>Profile</h1>
          </div>

          <div className="profile-form">
            <div className="form-group">
              <p>Name</p>
              <input type="text" />
            </div>

            <div className="form-group">
              <p>Email</p>
              <input type="text" />
            </div>

            <div className="form-group">
              <p>Role</p>
              <input type="text" />
            </div>

            <div className="form-button">
              <button className="edit-button">Edit Profile</button>
            </div>

            <div className="form-button">
              <button className="logout-button">Log out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
