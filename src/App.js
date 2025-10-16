import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  const fetchUser = () => {
    axios
      .get("https://randomuser.me/api/")
      .then((res) => setUser(res.data.results[0]))
      .catch((err) => {
        console.error("Error fetching user data:", err);
        alert("Failed to load user data. Please try again.");
      });
  };

  useEffect(() => {
    fetchUser();
  }, []);

  if (!user) return <div className="loading">Wait...</div>;

  return (
    <div className="container">
      <div className="profile-card">
        <button className="refresh-button" onClick={fetchUser}>
          &gt;
        </button>
        <h2>Profile</h2>
        <img src={user.picture.large} alt="User" className="avatar" />
        <h1>{`${user.name.first} ${user.name.last}`}</h1>
        <div className="info-section">
          <p className="label">Email</p>
          <p className="value">{user.email}</p>
          <p className="label">Phone</p>
          <p className="value">{user.phone}</p>
          <p className="label">Location</p>
          <p className="value">{`${user.location.city}, ${user.location.country}`}</p>
          <p className="label">Age</p>
          <p className="value">{user.dob.age}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
