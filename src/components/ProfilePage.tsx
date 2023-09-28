const ProfilePage = () => (
  <div className="container d-flex justify-content-center align-items-center">
    <div className="row">
      <div className="col">
        <img
          src="https://i.imgur.com/Qtrsrk5.jpg"
          className="img-fluid"
          style={{ maxWidth: "100" }}
        />

        <div className="text-center">
          <div className="profile">
            <img src="https://i.imgur.com/JgYD2nQ.jpg" />
          </div>
        </div>

        <div className="mt-3 text-center">
          <h1 className="mb-0">first last</h1>
          <h5 className="mb-0 text-muted">@handle</h5>
          <p className="text-muted d-block mb-2">bio</p>

          <button className="btn btn-primary follow">follow</button>

          <div className="d-flex justify-content-between align-items-center mt-4 px-4">
            <div>
              <h6 className="mb-0">Followers 👤</h6>
              <span>142</span>
            </div>

            <div>
              <h6 className="mb-0">Popularity 🩷</h6>
              <span>8,797</span>
            </div>

            <div>
              <h6 className="mb-0">Rank 🏆</h6>
              <span>3</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h1 className="mt-3 text-center">besties</h1>
        <div className="card">
          <ol className="list-group list-group-numbered list-group-flush text-center">
            <li className="list-group-item">amy</li>
            <li className="list-group-item">billy</li>
            <li className="list-group-item">chuck</li>
            <li className="list-group-item">dante</li>
            <li className="list-group-item">eve</li>
          </ol>
        </div>
      </div>
    </div>
  </div>
);

export default ProfilePage;
