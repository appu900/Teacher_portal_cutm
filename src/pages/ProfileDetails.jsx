import React, { useEffect } from "react";
import Profile from "../components/profilePageComponents/Profile";
import Description from "../components/profilePageComponents/Description";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProfileDetails = () => {
  const navigate = useNavigate();
  const data = useSelector((state) => state.redirect);
  const teacher = data[data.length - 1];

  useEffect(() => {
    if (teacher === undefined) {
      return navigate("/");
    }
  }, []);
  return (
    <div className="w-full min-h-screen h-auto bg-[#F4F5F7] flex md:flex-row flex-col md:px-24">
      <h1>{teacher?.username}</h1>
      <Profile data={teacher} />
      <Description data={teacher} />
    </div>
  );
};

export default ProfileDetails;
