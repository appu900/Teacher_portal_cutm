import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { add } from "../store/redirectSlice";

const ProfileCard = ({ data }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleNavigate = () => {
    dispatch(add(data));
    navigate("/profile");
  };
  return (
    <div
      onClick={handleNavigate}
      className="bg-white w-[350px] h-[140px] rounded-lg shadow-lg cursor-pointer
    hover:shadow-none transition duration-300 ease-in-out px-5 py-5 flex items-center gap-5 m-4
    border-t-4 border-green-500 border-opacity-50 hover:border-opacity-100
    "
    >
      <img
        // src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        src={data.imageUrl}
        alt="profile"
        className="w-20 h-20 rounded-full object-cover"
      />
      <div className="flex flex-col">
        <p className="text-xl font-semibold text-green-800">{data.name}</p>
        <p className="text-gray-500 font-normal">{data.designation}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
