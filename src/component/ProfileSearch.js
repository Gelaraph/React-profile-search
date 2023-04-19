import React, { useState } from "react";
import { UserProfileData } from "./Data";
import "./profileSearch.css";

function ProfileSearch() {
  const [profiles, setProfiles] = useState(UserProfileData);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchFilter = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProfiles = profiles.filter((profile) =>
    (profile.firstName + " " + profile.lastName)
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const renderProfiles = filteredProfiles.map((profile) => (
    <Profile key={profile.id} profile={profile} />
  ));

  return (
    <div className="container">
      <div className="input-div">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchFilter}
          placeholder="Search by name..."
        />
      </div>
      <ul>{renderProfiles}</ul>
    </div>
  );
}

function Profile({ profile }) {
  return (
    <li>
      <img src={profile.picture} alt="Profile" />
      <div>
        <p>{profile.id}</p>
        <h4>
          {profile.title} {profile.firstName} {profile.lastName}
        </h4>
      </div>
    </li>
  );
}

export default ProfileSearch;
