import React, { useState } from 'react';
import { FaFacebook, FaGoogle } from 'react-icons/fa'; // Importing Facebook and Google icons
import '../styles/profile.css';
import { Link } from 'react-router-dom';

const Profile = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };
// add the profile pic
  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfilePic(reader.result);
    };
    reader.readAsDataURL(file);
  };
// check box 
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };


  // save buttun click to be the alerat fucntion add this
  const handleSave = () => {
    alert('Your account is created!');
  };

  return (
    <div className="profile"> 

    {/* click the login to navigate the login page  */}
      <h1>Sign in<span> or </span><Link to="/Login" className='log'> Login </Link></h1>
      
      <div className="login">
        {profilePic && (
          <div className="profile-pic">
            <img src={profilePic} alt="Profile" />
          </div>
        )}
        <form>
          
          <div className="horizontal-inputs">
            <input
              type="text"
              placeholder="User Name"
              value={userName}
              onChange={handleUserNameChange}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
            <input
              type={isChecked ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            <input
              type={isChecked ? 'text' : 'password'}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
            <div className="checkbox">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <label>Remember me</label>
            </div>
          </div>

          {/* profile add the the open file  */}
          <div className="profile-pic-upload">
            <label htmlFor="profile-pic-input" className="upload-button">Choose Profile Picture</label>
            <input
              id="profile-pic-input"
              type="file"
              accept="image/*"
              onChange={handleProfilePicChange}
            />
            
            {/* buttun save the alert the screen */}
            <button type="submit" onClick={handleSave}>Save</button>
          </div>
       
        <div className="social-login">
          <button><FaFacebook /> Login with Facebook</button>
          <button><FaGoogle /> Login with Google</button>
        </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
