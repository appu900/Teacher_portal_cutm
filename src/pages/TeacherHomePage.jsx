import React from "react";
import ProfileCard from "../components/ProfileCard";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { add } from "../store/redirectSlice";
import data from "../Content/Teachers_Data"



export default function TeacherHomePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="bg-[#F4F5F7] w-full h-auto mb-10 md:px-32 py-10">
      {/* header section */}

      <div className="flex items-center justify-between px-5 mb-7">
        <h1 className="text-2xl font-bold">SOET</h1>
        <SearchBar />
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1">
        {data.map((item, index) => (
          <ProfileCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
}
