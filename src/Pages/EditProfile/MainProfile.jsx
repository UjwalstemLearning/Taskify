import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ for redirect
import "./Profile.css";
import MainNavbar from "../../Components/MainNavbar/MainNavbar";
import upload from "../../assets/images/upload.png";

export default function MainProfile() {
  const navigate = useNavigate(); // ✅ Navigation hook
  const fileInputRef = useRef(null);
  const [previewImage, setPreviewImage] = useState(upload);
  const [isEditable, setIsEditable] = useState(false);

  const [profiledata, setProfileData] = useState({
    username: '',
    password: '',
    email: '',
    image: null
  });

  // 📸 Handle image preview and store file
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewImage(imageUrl);
      setProfileData((prevState) => ({
        ...prevState,
        image: file,
      }));
    }
  };

  // 📝 Handle form inputs
  const handleProfileState = (e) => {
    const { name, value } = e.target;
    setProfileData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const GetData = async () => {
    const url = "https://stemlearningshubhamshirodkar.pythonanywhere.com/api/users/profile/";
    const token = localStorage.getItem("accessToken");

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (!response.ok) {
        alert(`Error ${response.status}`);
        return;
      }

      setProfileData({
        username: data.username || "",
        email: data.email || "",
        image: null,
      });

      if (data.profile_image) {
        setPreviewImage(data.profile_image);
      }
    } catch (error) {
      alert("❌ Request failed");
    }
  };

  const Putdata = async (Profilepayload) => {
    const url = "https://stemlearningshubhamshirodkar.pythonanywhere.com/api/users/profile/";
    const token = localStorage.getItem("accessToken");

    const formdata = new FormData();
    formdata.append("username", Profilepayload.username || "");
    formdata.append("email", Profilepayload.email || "");
    if (Profilepayload.image) {
      formdata.append("profile_image", Profilepayload.image);
    }

    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: { Authorization: `Bearer ${token}` },
        body: formdata,
      });

      if (!response.ok) {
        alert(`Error ${response.status}`);
        return;
      }

      alert("✅ Profile updated successfully!");
    } catch (error) {
      alert("❌ Request failed");
    }
  };

  // 🚪 Log Out function
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken"); // just in case
    navigate("/signin");
  };

  return (
    <div className="profile-container">
      <MainNavbar />

      <div className="profile-body">
        {/* Left Column */}
        <div className="profile-content">
          <div className="profile-heading">
            <h1>Profile</h1>
          </div>

          <div className="profile-form">
            <div className="form-group">
              <p>Name</p>
              <input
                type="text"
                placeholder="Your Username"
                name="username"
                value={profiledata.username}
                onChange={handleProfileState}
                disabled={!isEditable}
              />
            </div>

            <div className="form-group">
              <p>Email</p>
              <input
                type="text"
                placeholder="Your email"
                name="email"
                value={profiledata.email}
                onChange={handleProfileState}
                disabled={!isEditable}
              />
            </div>

            <div className="form-button">
              <button
                className="edit-button"
                onClick={() => {
                  setIsEditable(true);
                  GetData(profiledata);
                }}
              >
                Edit Profile
              </button>
            </div>

            <div className="form-button">
              <button
                className="save-button"
                onClick={() => Putdata(profiledata)}
              >
                Make Changes
              </button>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="profile-right">
          <div className="image-upload">
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleImageChange}
              style={{ display: "none" }}
              name="image"
            />

            <img
              src={previewImage}
              onClick={() => fileInputRef.current.click()}
              alt="Profile Preview"
              className="preview-image"
              style={{ cursor: "pointer" }}
            />
          </div>

          <div className="right-logout">
            <button className="logout-button" onClick={handleLogout}>
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
