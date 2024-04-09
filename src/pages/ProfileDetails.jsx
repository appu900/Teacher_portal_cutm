import React from "react";
import Profile from "../components/profilePageComponents/Profile";
import Description from "../components/profilePageComponents/Description";

const ProfileDetails = () => {
  return (
    <div className="w-full h-screen bg-[#F4F5F7] flex md:flex-row flex-col md:px-24">
      <Profile />
      <Description />
    </div>
  );
};

export default ProfileDetails;
